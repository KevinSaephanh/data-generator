import { FC, useState } from "react";
import { Form } from "../components/Form/Form";
import { Preview } from "../components/Preview/Preview";
import { enumToString } from "../utils/enumToString";

enum Tabs {
  MockData,
  EnvTypes,
}

export const Home: FC = () => {
  const [activeTab, setActiveTab] = useState(Tabs[Tabs.MockData]);
  const [submitted, setSubmitted] = useState(false);
  const [entityData, setEntityData] = useState<any[]>([]);
  const [envTypeData, setEnvTypeData] = useState<any[]>([]);

  const handleSetData = (value: any[]) => {
    if (activeTab === Tabs[Tabs.MockData]) setEntityData(value);
    else setEnvTypeData(value);
  };

  const toggleSubmit = () => {
    setSubmitted(!submitted);
  };

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
              {Object.keys(Tabs)
                .filter((key) => enumToString(key, Tabs))
                .map((name, i) => (
                  <li
                    className="block text-lg font-semibold ml-4 md:ml-0 px-2 md:px-2 py-2 rounded hover:border-transparent hover:bg-blue-400 focus:border-transparent active cursor-pointer"
                    role="tab"
                    aria-controls={`tabs-${name}`}
                    aria-selected="true"
                    key={i}
                    onClick={() => setActiveTab(enumToString(name, Tabs))}
                  >
                    {name}
                  </li>
                ))}
            </ul>
            {/* Toggle between 2 forms depending on form name */}
            {activeTab === Tabs[Tabs.MockData] ? (
              <Form
                key={1}
                name={activeTab}
                handleSetData={handleSetData}
                toggleSubmit={toggleSubmit}
              />
            ) : (
              <Form
                key={2}
                name={activeTab}
                handleSetData={handleSetData}
                toggleSubmit={toggleSubmit}
              />
            )}
          </div>
          <Preview data={activeTab === Tabs[Tabs.MockData] ? entityData : envTypeData} />
        </div>
      </section>
    </>
  );
};
