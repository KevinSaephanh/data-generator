import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Select } from "./Select";
import { UploadInput } from "./UploadInput";

// Avatar creator: https://robohash.org/

export const Form: FC = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <form
      className="w-11/12 md:w-3/5 mx-auto flex flex-col min-h-96"
      onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
    >
      <div className="flex">
        <input className="w-72 mb-5 p-2" {...register("username")} placeholder="Username" />
        <Select />
      </div>
      <input className="w-72 mb-5 p-2" {...register("email")} placeholder="Email" />
      <input className="w-72 mb-5 p-2" {...register("password")} placeholder="Password" />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-24 py-2 px-4 mb-5 rounded"
      >
        Preview
      </button>
    </form>
  );
};
