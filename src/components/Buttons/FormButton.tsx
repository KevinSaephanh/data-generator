import { FC } from "react";

type FormButtonProps = {
  text: string;
  type: "button" | "submit";
  className: string;
  disabled: boolean;
  handleClick: Function;
};

export const FormButton: FC<FormButtonProps> = ({
  text,
  type,
  className,
  disabled,
  handleClick,
}) => {
  return (
    <>
      <button
        type={type}
        className={`${className} disabled:opacity-25`}
        disabled={disabled}
        onClick={() => handleClick()}
      >
        {text}
      </button>
    </>
  );
};
