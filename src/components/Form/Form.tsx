import { ChangeEvent, FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Select } from "./Select";
import { UploadInput } from "./UploadInput";

// Avatar creator: https://robohash.org/

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

  Object.keys(inputs).map((key) => console.log(key));

  return (
    <form
      className="w-11/12 md:w-3/5 mx-auto flex flex-col min-h-96"
      onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
    >
      <div className="flex flex-col">
        {Object.keys(inputs).map((key, i) => (
          <div className="flex" key={i}>
            <input className="w-52 md:w-64 mb-5 p-2" {...register(key)} placeholder={key} />
            <Select />
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
