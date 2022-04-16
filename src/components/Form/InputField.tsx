import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type InputFieldProps = {
  placeholder?: any;
  defaultValue?: string;
  pattern?: string;
  disabled?: boolean;
  tooltip?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const InputField: FC<InputFieldProps> = ({
  placeholder,
  defaultValue,
  pattern,
  disabled,
  tooltip,
  registration,
}) => {
  const handleChange = (e: any) => {
    console.log(e);
  };

  return (
    <input
      placeholder={placeholder}
      pattern={pattern}
      defaultValue={defaultValue}
      disabled={disabled}
      className="w-44 md:w-64 mb-5 p-2 mr-5"
      minLength={1}
      maxLength={20}
      data-bs-toggle="tooltip"
      title={tooltip}
      {...registration}
      // onChange={e => {
      //   registration.onChange(e)
      // }}
    />
  );
};
