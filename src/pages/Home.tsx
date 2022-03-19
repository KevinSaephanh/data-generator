import { FC, useContext } from "react";
import { EntityForm } from "../components/Form/EntityForm";
import { EnvTypeForm } from "../components/Form/EnvTypeForm";
import { Preview } from "../components/Preview/Preview";
import { Tabs } from "../constants";
import { UPDATE_ACTIVE_TAB } from "../store/ActionTypes";
import { AppContext } from "../store/AppProvider";
import { enumToString } from "../utils/enumToString";

export const Home: FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const { activeTab } = state;

  const handleClick = (e: any, name: string) => {
    dispatch({
      type: UPDATE_ACTIVE_TAB,
      payload: name,
    });
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
            {/* Tabs List */}
            <ul className="flex list-none border-b-0 mb-4 md:mb-6" role="tablist">
              {Object.keys(Tabs)
                .filter((key) => enumToString(key, Tabs))
                .map((name, i) => (
                  <li
                    className={`block text-lg font-semibold ml-4 md:ml-0 px-2 md:px-2 py-2 rounded md:hover:bg-gray-200 cursor-pointer
                    ${name === activeTab ? "border-b-4 border-indigo-500" : ""}`}
                    role="tab"
                    aria-controls={`tabs-${name}`}
                    aria-selected="true"
                    key={i}
                    onClick={(e) => handleClick(e, name)}
                  >
                    {name}
                  </li>
                ))}
            </ul>

            {/* Forms */}
            <div className="relative">
              <EntityForm />
              <EnvTypeForm />
            </div>
          </div>

          <Preview />
        </div>
      </section>
    </>
  );
};
