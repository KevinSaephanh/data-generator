import { FC, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { entityOptions } from "../../constants";
import FormField from "../../models/FormField";
import { ExitButton } from "../Buttons/ExitButton";
import { FormButton } from "../Buttons/FormButton";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";

type EntityFormProps = {
  name: string;
  entityData: FormField[];
  handleSetData: Function;
  toggleSubmit: Function;
};

export const EntityForm: FC<EntityFormProps> = ({
  name,
  entityData,
  handleSetData,
  toggleSubmit,
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { register, handleSubmit, control } = useForm({
    defaultValues: { [name]: entityData },
    shouldUnregister: false,
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  // useEffect(() => {
  //   console.log(name);
  //   console.log(watch(name));
  // }, [name, watch]);

  const handleClick = (data: any) => {
    setIsGenerating(true);
    console.log(data);

    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  const handleAddField = () => {
    append({ name: "Enter entity name", type: "" });
  };

  const handleDeleteField = (index: number) => {
    console.log(entityData);
    console.log(fields);
    remove(index);
    console.log(fields);
    handleSetData(fields);
  };

  return (
    <form className="w-11/12 md:w-500 mx-auto flex flex-col min-h-96">
      <div className="flex flex-col">
        <div className="flex flex-row space-x-24 md:space-x-40 mr-5 md:mr-10">
          <h3 className="font-semibold pb-5 pl-2 md:text-lg">Field Name</h3>
          <h3 className="font-semibold pb-5 pl-2 md:text-lg">Type</h3>
        </div>
        {fields.map((field: FormField, key: number) => {
          return (
            <div className="flex flex-row" key={key}>
              <InputField
                placeholder={field.name}
                defaultValue={""}
                pattern={"[A-Za-z0-9-_]+"}
                disabled={isGenerating}
                registration={register(`entities.${key}.name`, { required: true })}
              />
              <SelectField
                options={entityOptions}
                defaultValue={field.type}
                disabled={isGenerating}
                registration={register(`entities.${key}.name`, { required: true })}
              />
              <ExitButton key={key} path={"M6 18L18 6M6 6l12 12"} handleClick={handleDeleteField} />
            </div>
          );
        })}

        <div className="flex flex-row">
          <FormButton
            text={"Add Field"}
            type={"button"}
            className={
              "bg-indigo-500 hover:bg-indigo-700 text-white font-bold w-32 py-2 px-4 mb-5 mr-5 rounded disabled:opacity-25"
            }
            disabled={isGenerating}
            handleClick={handleAddField}
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold w-32 py-2 px-4 mb-5 rounded disabled:opacity-25"
            disabled={isGenerating}
            onClick={handleSubmit((data) => handleClick(data))}
          >
            Generate
          </button>
        </div>
      </div>
    </form>
  );
};
