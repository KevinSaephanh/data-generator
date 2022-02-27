import { FC, useState } from "react";
import { Form } from "../components/Form/Form";
import { Preview } from "../components/Preview/Preview";
import { enumToString } from "../utils/enumToString";

export enum FormNames {
  MockData,
  EnvTypes,
}

export const Home: FC = () => {
  const [formName, setFormName] = useState("MockData" as keyof typeof FormNames);
  const [data, setData] = useState({
    n: "asda",
    v: " 'asda",
    va: " 'asda",
    v2: " 'asda",
    vg: " 'asda",
    vbv: " 'asda",
  });

  const handleSetData = (value: any) => {
    setData(value);
  };

  console.log(enumToString("", FormNames));

  return (
    <>
      <section className="relative">
        <div className="text-center p-5 mt-16 mx-auto md:w-10/12">
          <h1 className="text-5xl md:text-6xl text-gray-800 font-extrabold tracking-tighter mb-4">
            Data Generator
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mt-10">
            Need custom mock data modeled after your entities to test your app? Want to create
            modules to add typing for your environment variables? This app does all of the above for
            you, given a data set. In addition to this, we also provide sample mock data.
          </p>
        </div>
      </section>

      <section className="relative w-full md:w-11/12 md:mx-auto">
        <div className="flex flex-col md:flex-row md:p-10">
          <div className="flex flex-col">
            <ul className="flex flex-row flex-wrap list-none border-b-0 mb-4" role="tablist">
              {Object.keys(FormNames)
                .filter((key) => !isNaN(Number(FormNames[key as keyof typeof FormNames])))
                .map((name, i) => (
                  <li
                    className="block font-semibold ml-4 md:ml-0 px-2 md:px-2 py-2 rounded hover:border-transparent hover:bg-blue-400 focus:border-transparent active cursor-pointer"
                    role="tab"
                    aria-controls={`tabs-${name}`}
                    aria-selected="true"
                    key={i}
                    onClick={() => setFormName(name as keyof typeof FormNames)}
                  >
                    {name}
                  </li>
                ))}
            </ul>
            <Form formName={formName.toString()} />
          </div>
          <Preview data={data} />
        </div>
      </section>
    </>
  );
};
