import { FC } from "react";

export const Home: FC = () => {
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

      <section className="relative">
        <div className="flex flex-col sm:flex-row md:p-10">
          <div>Form area</div>
          <div>Preview area</div>
        </div>
      </section>
    </>
  );
};
