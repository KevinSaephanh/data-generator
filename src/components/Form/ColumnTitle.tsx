import { FC } from "react";

type ColumnTitleProps = {
  title: string;
};

export const ColumnTitle: FC<ColumnTitleProps> = ({ title }) => {
  return (
    <>
      <h3 className="font-semibold pb-5 pl-2 md:text-lg">{title}</h3>
    </>
  );
};
