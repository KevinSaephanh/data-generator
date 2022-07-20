import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import Option from "../../models/KeyValuePair";

type SelectFieldProps = {
  options: Option[];
  defaultValue?: string;
  disabled?: boolean;
  registration: Partial<UseFormRegisterReturn>;
};

export const SelectField: FC<SelectFieldProps> = ({
  options,
  registration,
  defaultValue,
  disabled,
}) => {
  return (
    <>
      <select
        className="w-40 mb-5 p-2"
        defaultValue={defaultValue}
        disabled={disabled}
        {...registration}
      >
        {options.map(({ key, value }) => (
          <option key={key} value={value}>
            {key}
          </option>
        ))}
      </select>
    </>
  );
};
