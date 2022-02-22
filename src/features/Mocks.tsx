import { FC, useEffect, useState } from "react";
import { Preview } from "../components/Preview/Preview";
import {
  createComments,
  createOrders,
  createPosts,
  createProducts,
  createUsers,
} from "../staticDataGenerator";

enum Entities {
  Users,
  Posts,
  Comments,
  Orders,
  Products,
}

export const Mocks: FC = () => {
  const [data, setData] = useState<any>(createUsers());
  const [activeEntity, setActiveEntity] = useState(Entities.Users);

  useEffect(() => {
    switch (activeEntity) {
      case Entities.Users:
        setData(createUsers());
        return;
      case Entities.Posts:
        setData(createPosts());
        return;
      case Entities.Comments:
        setData(createComments());
        return;
      case Entities.Products:
        setData(createProducts());
        return;
      case Entities.Orders:
        setData(createOrders());
        return;
      default:
        return;
    }
  }, [activeEntity]);

  return (
    <>
      <section className="relative">
        <div className="text-center p-5 mt-16 mx-auto md:w-10/12">
          <h2 className="text-4xl text-gray-800 font-extrabold tracking-tighter mb-4">
            Example Mock Data
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto md:mt-10">
            Copy and paste our free mock data examples. These are common entities you can find in
            many modern applications.
          </p>
        </div>
      </section>

      <section className="relative w-full md:w-11/12 md:mx-auto mt-10 md:mt-0">
        <div className="flex flex-col md:flex-row md:p-10">
          <ul className="flex flex-row md:flex-col mx-auto md:mx-0 md:mt-12">
            {Object.values(Entities)
              .filter((k) => typeof Entities[k as number] === "number")
              .map((key, i) => (
                <li
                  className={`cursor-pointer p-2 rounded hover:bg-blue-500 ${
                    key === Entities[activeEntity] ? "bg-blue-200" : ""
                  }`}
                  key={i}
                  onClick={() => setActiveEntity(Entities[key as keyof typeof Entities])}
                >
                  {key}
                </li>
              ))}
          </ul>
          <Preview data={data} />
        </div>
      </section>
    </>
  );
};
