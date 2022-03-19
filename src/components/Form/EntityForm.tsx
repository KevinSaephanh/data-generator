import { useContext } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { defaultEntityFields, entityOptions, Tabs } from "../../constants";
import FormField from "../../models/FormField";
import { AppContext } from "../../store/AppProvider";
import { ExitButton } from "../Buttons/ExitButton";
import { FormButton } from "../Buttons/FormButton";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";

export const EntityForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const { activeTab, isGeneratingPreview } = state;
  const { register, handleSubmit, control } = useForm({
    defaultValues: { entities: defaultEntityFields },
    shouldUnregister: false,
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "entities",
  });

  const handleClick = (data: any) => {
    console.log(data);
  };

  return (
    <form
      className={`w-11/12 flex flex-col min-h-96 mx-auto md:mx-0 ${
        activeTab === Tabs[Tabs.MockData] ? "block" : "hidden"
      }`}
    >
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
                disabled={isGeneratingPreview}
                registration={register(`entities.${key}.name`, { required: true })}
              />
              <SelectField
                options={entityOptions}
                defaultValue={field.type}
                disabled={isGeneratingPreview}
                registration={register(`entities.${key}.name`, { required: true })}
              />
              <ExitButton key={key} path={"M6 18L18 6M6 6l12 12"} handleClick={() => remove(key)} />
            </div>
          );
        })}

        <div className="flex flex-row">
          <FormButton
            text={"Add Field"}
            type={"button"}
            className={
              "bg-indigo-500 hover:bg-indigo-700 text-white font-bold w-32 py-2 px-4 mb-5 mr-5 rounded"
            }
            disabled={isGeneratingPreview}
            handleClick={() => append({ name: "Enter entity name", type: "" })}
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold w-32 py-2 px-4 mb-5 rounded disabled:opacity-25"
            disabled={isGeneratingPreview}
            onClick={handleSubmit((data) => handleClick(data))}
          >
            Generate
          </button>
        </div>
      </div>
    </form>
  );
};
