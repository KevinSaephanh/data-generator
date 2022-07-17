import { FC } from "react";

type ErrorMessageProps = {
  show: boolean;
  text: string;
};

export const ErrorMessage: FC<ErrorMessageProps> = ({ show, text }) => {
  return (
    <div
      className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ${
        show ? "block" : "hidden"
      }`}
      role="alert"
    >
      <strong className="font-bold">{text}</strong>
    </div>
  );
};
