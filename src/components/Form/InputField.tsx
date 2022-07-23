import { FC, FormEvent, useState } from "react";

type InputFieldProps = {
  placeholder?: any;
  index?: number;
  pattern?: string;
  disabled?: boolean;
  tooltip?: string;
  change: Function;
};

export const InputField: FC<InputFieldProps> = ({
  placeholder,
  index,
  pattern,
  disabled,
  tooltip,
  change,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    change(index, e.currentTarget.value, "input");
  };

  return (
    <input
      placeholder={placeholder}
      pattern={pattern}
      disabled={disabled}
      className="w-44 md:w-64 mb-5 p-2 mr-5"
      minLength={1}
      maxLength={25}
      data-bs-toggle="tooltip"
      title={tooltip}
      value={value}
      onChange={handleChange}
    />
  );
};
