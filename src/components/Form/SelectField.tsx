import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export type Option = {
  label: React.ReactNode;
  value: any;
};

type SelectFieldProps = {
  options: Option[];
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  registration: Partial<UseFormRegisterReturn>;
};

export const SelectField: FC<SelectFieldProps> = ({
  options,
  registration,
  defaultValue,
  placeholder,
  disabled,
}) => {
  return (
    <>
      <select
        className="w-32 md:w-40 mb-5 p-2"
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        {...registration}
      >
        {options.map(({ label, value }, key) => (
          <option key={key} value={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
};
