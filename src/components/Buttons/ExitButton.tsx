import { FC } from "react";

type ExitButtonProps = {
  index?: number;
  path: string;
  handleClick: Function;
};

export const ExitButton: FC<ExitButtonProps> = ({ index, path, handleClick }) => {
  return (
    <>
      <svg
        className="block h-6 w-6 mt-2 ml-5 md:ml-10 rounded-full cursor-pointer hover:text-white hover:bg-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        onClick={() => handleClick(index)}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path} />
      </svg>
    </>
  );
};
