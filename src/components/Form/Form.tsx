import { FC, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { InputField } from "./InputField";
import { Option, SelectField } from "./SelectField";

const options: Option[] = [
  { label: "Select a type", value: "" },
  { label: "Username", value: "username" },
  { label: "First Name", value: "firstName" },
  { label: "last Name", value: "lastName" },
  { label: "Email", value: "email" },
  { label: "Avatar", value: "avatar" },
  { label: "Date", value: "date" },
  { label: "Primary ID", value: "primaryId" },
  { label: "Unique ID", value: "uniqueId" },
];

const defaultFields = [
  { name: "userId", type: "uniqueId" },
  { name: "username", type: "username" },
  { name: "email", type: "email" },
  { name: "avatar", type: "avatar" },
];

export const Form: FC = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: { entities: defaultFields },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "entities",
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [data, setData] = useState("");

  const handleClick = (data: any) => {
    setIsGenerating(true);
    console.log(data);

    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  const handleAddField = () => {
    append({ name: "", type: "" });
  };

  const handleDeleteField = (index: number) => {
    remove(index);
  };

  return (
    <form className="w-11/12 md:w-3/5 mx-auto flex flex-col min-h-96">
      <div className="flex flex-col">
        <div className="flex flex-row space-x-24 md:space-x-40 mr-5 md:mr-10">
          <h3 className="font-semibold pb-5 pl-2 md:text-lg">Field Name</h3>
          <h3 className="font-semibold pb-5 pl-2 md:text-lg">Type</h3>
        </div>
        {fields.map((field, i) => {
          return (
            <div className="flex flex-row" key={i}>
              <InputField
                placeholder={field.name}
                defaultValue={""}
                pattern={"[A-Za-z0-9-_]+"}
                disabled={isGenerating}
                registration={register(`entities.${i}.name`, { required: true })}
              />
              <SelectField
                options={options}
                defaultValue={field.type}
                disabled={isGenerating}
                registration={register(`entities.${i}.name`, { required: true })}
              />

              <svg
                className="block h-6 w-6 mt-2 ml-5 md:ml-10 rounded-full cursor-pointer hover:text-white hover:bg-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                onClick={() => handleDeleteField(i)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          );
        })}

        <div className="flex flex-row">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-32 py-2 px-4 mb-5 mr-5 rounded disabled:opacity-25"
            disabled={isGenerating}
            onClick={handleAddField}
          >
            Add Field
          </button>
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
