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

  const handleClick = (data: any) => {
    console.log(data);
  };

  const handleDelete = (key: string) => {};

  return (
    <form
      className="w-11/12 md:w-3/5 mx-auto flex flex-col min-h-96"
      onSubmit={handleSubmit((data) => handleClick(data))}
    >
      <div className="flex flex-col">
        <div className="flex flex-row space-x-24 md:space-x-40 mr-5 md:mr-10">
          <ColumnTitle title="Field Name" />
          <ColumnTitle title="Type" />
        </div>

        {Object.keys(inputs).map((key, i) => (
          <div className="flex flex-row">
            <InputField
              type="text"
              placeholder={key}
              pattern={"[A-Za-z0-9-_]+"}
              key={i}
              registration={register(key)}
            />
            <SelectField options={options} key={i} registration={register(key)} />

            <svg
              className="block h-6 w-6 mt-2 ml-5 md:ml-10 rounded-full cursor-pointer hover:text-white hover:bg-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              onClick={() => handleDelete(key)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        ))}
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
