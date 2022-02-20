import { FC } from "react";

type PreviewProps = {
  data: {};
};

export const Preview: FC<PreviewProps> = ({ data }) => {
  return (
    <div className="min-h-500 w-11/12 md:w-3/5 md:text-lg overflow-y-scroll p-5 rounded border-2 border-gray-800 mx-auto">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
