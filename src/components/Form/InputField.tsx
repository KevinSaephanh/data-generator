import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type InputFieldProps = {
  placeholder?: any;
  defaultValue: string;
  pattern?: string;
  disabled?: boolean;
  registration: Partial<UseFormRegisterReturn>;
};

export const InputField: FC<InputFieldProps> = ({
  placeholder,
  defaultValue,
  pattern,
  disabled,
  registration,
}) => {
  return (
    <input
      placeholder={placeholder}
      pattern={pattern}
      defaultValue={defaultValue}
      disabled={disabled}
      className="w-44 md:w-64 mb-5 p-2 mr-5"
      minLength={1}
      maxLength={20}
      {...registration}
    />
  );
};
