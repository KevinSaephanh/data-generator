import { ChangeEvent, FC } from "react";
import Option from "../../models/KeyValuePair";

type SelectFieldProps = {
  options: Option[];
  index?: number;
  disabled?: boolean;
  name?: string;
  change: Function;
};

export const SelectField: FC<SelectFieldProps> = ({ options, index, name, disabled, change }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    change(index, e.target.value, "select");
  };

  return (
    <>
      <select className="w-40 mb-5 p-2" disabled={disabled} name={name} onChange={handleChange}>
        {options.map(({ key, value }) => (
          <option key={key} value={value}>
            {key}
          </option>
        ))}
      </select>
    </>
  );
};
