import { ChangeEvent, FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Option } from "../../types/Option";
import { ColumnTitle } from "./ColumnTitle";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";
import { UploadInput } from "./UploadInput";

// Avatar creator: https://robohash.org/

const options: Option[] = [
  { label: "Select a type", value: "" },
  { label: "Username", value: "username" },
  { label: "FirstName", value: "firstName" },
  { label: "lastName", value: "lastName" },
  { label: "Email", value: "email" },
  { label: "Avatar", value: "avatar" },
  { label: "Date", value: "date" },
  { label: "PrimaryId", value: "primaryId" },
  { label: "UniqueId", value: "uniqueId" },
];

export const Form: FC = () => {
  const { register, handleSubmit } = useForm();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [data, setData] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <form
      className="w-11/12 md:w-3/5 mx-auto flex flex-col min-h-96"
      onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
    >
      <div className="flex flex-row">
        <div className="flex flex-col mr-5 md:mr-10">
          <ColumnTitle title="Field Name" />
          {Object.keys(inputs).map((key, i) => (
            <InputField
              type="text"
              placeholder={key}
              pattern={"[A-Za-z0-9-_]+"}
              key={i}
              registration={register(key)}
            />
          ))}
        </div>

        <div className="flex flex-col">
          <ColumnTitle title="Type" />
          {Object.keys(inputs).map((key, i) => (
            <SelectField options={options} key={i} registration={register(key)} />
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-24 py-2 px-4 mb-5 rounded"
      >
        Preview
      </button>
    </form>
  );
};
