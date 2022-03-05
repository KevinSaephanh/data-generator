import { FC, useState } from "react";

type PreviewProps = {
  data: any[];
};

export const Preview: FC<PreviewProps> = ({ data }) => {
  const [hasClicked, setHasclicked] = useState(false);

  const handleClick = () => {
    setHasclicked(true);
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
  };

  return (
    <div className="flex flex-col w-full">
      <button
        className="bg-indigo-500 hover:bg-indigo-700 h-10 text-white font-bold w-32 py-2 px-4 mb-5 mr-5 md:mr-0 ml-auto rounded mt-10 md:mt-0"
        onClick={handleClick}
      >
        {hasClicked ? "Copied!" : "Copy"}
      </button>
      <div className="h-550 w-11/12 max-w-700 md:w-10/12 md:text-lg md:mr-0 md:ml-auto overflow-y-scroll p-2 md:p-5 rounded border-2 border-gray-800 mx-auto">
        {data.length > 0 ? <pre>{JSON.stringify(data, null, 2)}</pre> : <></>}
      </div>
    </div>
  );
};
