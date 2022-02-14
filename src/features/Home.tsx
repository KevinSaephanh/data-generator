import { FC, useState } from "react";
import { Form } from "../components/Form/Form";

export const Home: FC = () => {
  const [preview, setPreview] = useState({ n: "asda", v: " 'asda" });

  const handleSetPreview = (value: any) => {
    setPreview(value);
  };

  return (
    <>
      <section className="relative">
        <div className="text-center p-5 mt-16 mx-auto md:w-10/12">
          <h1 className="text-5xl md:text-6xl text-gray-800 font-extrabold tracking-tighter mb-4">
            Data Generator
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Need custom mock data modeled after your entities to test your app? Want to add typing
            for your environment variables? Try this app!
          </p>
        </div>
      </section>

      <section className="relative w-full md:w-4/5 md:mx-auto">
        <div className="flex flex-col sm:flex-row md:p-10">
          <Form />
          <div className="min-h-500 w-11/12 md:w-3/5 overflow-y-scroll p-5 border-2 border-sky-500 mx-auto">
            <pre>{JSON.stringify(preview, null, 2)}</pre>
          </div>
        </div>
      </section>
    </>
  );
};
