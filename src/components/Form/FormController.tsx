import { FC } from "react";
import { Controller, useForm } from "react-hook-form";

type FormControllerProps = {
  name: string;
};

export const FormController: FC = () => {
  const { control } = useForm();

  return (
    <Controller
      control={control}
      name="object"
      rules={{ required: true }}
      render={({ field }) => (
        <div>
          <input
            value={field.value.value}
            onChange={(event) => field.onChange({ ...field.value, value: event.target.value })}
          />

          <select
            defaultValue={""}
            onChange={(event) => field.onChange({ ...field.value, value: event.target.value })}
          >
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
        </div>
      )}
    />
  );
};
