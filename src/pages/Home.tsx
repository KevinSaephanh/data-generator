import { FC } from "react";
import { EntityForm } from "../components/Form/EntityForm";
import { EnvTypeForm } from "../components/Form/EnvTypeForm";
import { Preview } from "../components/Preview/Preview";
import { TabList } from "../components/TabList/TabList";

export const Home: FC = () => {
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
            <TabList />

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
