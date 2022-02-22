import { FC } from "react";
import { CopyTextButton } from "../Button/CopyTextButton";

type PreviewProps = {
  data: {};
};

export const Preview: FC<PreviewProps> = ({ data }) => {
  return (
    <div className="flex flex-col w-full">
      <CopyTextButton data={data} />
      <div className="max-h-500 w-11/12 md:w-10/12 md:text-lg md:mr-0 md:ml-auto overflow-y-scroll p-2 md:p-5 rounded border-2 border-gray-800 mx-auto">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};
