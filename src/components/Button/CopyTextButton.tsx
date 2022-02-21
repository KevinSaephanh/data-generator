import { FC, useState } from "react";

type CopyTextButtonProps = {
  data: any;
};

export const CopyTextButton: FC<CopyTextButtonProps> = ({ data }) => {
  const [hasClicked, setHasclicked] = useState(false);

  const handleClick = () => {
    setHasclicked(true);
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 h-10 text-white font-bold w-32 py-2 px-4 mb-5 mr-5 ml-auto rounded mt-10 md:mt-0"
        onClick={handleClick}
      >
        {hasClicked ? "Copied!" : "Copy"}
      </button>
    </>
  );
};
