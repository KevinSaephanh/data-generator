import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Option } from "../../types/Option";

type SelectFieldProps = {
  options: Option[];
  placeholder?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const SelectField: FC<SelectFieldProps> = ({ options, registration, placeholder }) => {
  return (
    <>
      <select className="w-32 md:w-40 mb-5 p-2" placeholder={placeholder} {...registration}>
        {options.map(({ label, value }, key) => (
          <option key={key} value={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
};
