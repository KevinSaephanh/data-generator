import { useContext, useEffect, useState } from "react";
import { Preview } from "../components/Preview/Preview";
import { TabList, Tabs } from "../components/TabList/TabList";
import {
  createComments,
  createMockEnvTypes,
  createOrders,
  createPosts,
  createProducts,
  createUsers,
} from "../staticDataGenerator";
import {
  RESET_PREVIEWS,
  UPDATE_ENTITY_PREVIEW,
  UPDATE_ENV_TYPES_PREVIEW,
} from "../store/ActionTypes";
import { AppContext } from "../store/AppProvider";
import { createProcessEnv } from "../utils/createProcessEnv";
import { enumToString } from "../utils/enumToString";

enum Entities {
  Users,
  Posts,
  Comments,
  Orders,
  Products,
}

export const Mocks = () => {
  const { state, dispatch } = useContext(AppContext);
  const { activeTab } = state;
  const [activeEntity, setActiveEntity] = useState(Entities[Entities.Users]);

  useEffect(() => {
    // Reset previews
    dispatch({ type: RESET_PREVIEWS });

    // Generate mock data
    if (activeTab === Tabs[Tabs.MockData]) getEntitiesMock();
    else getEnvTypesMock();
  }, [activeEntity, activeTab]);

  const getEntitiesMock = () => {
    let payload: any[] = [];

    // Create payload depneding on current active entity
    switch (activeEntity) {
      case Entities[Entities.Users]:
        payload = createUsers(50);
        break;
      case Entities[Entities.Posts]:
        payload = createPosts(50);
        break;
      case Entities[Entities.Comments]:
        payload = createComments(50);
        break;
      case Entities[Entities.Products]:
        payload = createProducts(50);
        break;
      case Entities[Entities.Orders]:
        payload = createOrders(50);
        break;
      default:
        payload = createUsers(50);
        break;
    }

    // Update preview with new entities
    dispatch({
      type: UPDATE_ENTITY_PREVIEW,
      payload,
    });
  };

  const getEnvTypesMock = () => {
    const envTypes = createMockEnvTypes();
    const envTypesPreview = createProcessEnv(envTypes);
    dispatch({
      type: UPDATE_ENV_TYPES_PREVIEW,
      payload: envTypesPreview,
    });
  };

  return (
    <>
      <section className="text-center p-5 mt-16 mx-auto md:w-10/12">
        <h2 className="text-4xl text-gray-800 font-extrabold tracking-tighter mb-4">
          Example Mock Data
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto md:mt-10">
          Copy and paste our free mock data examples. These are common entities you can find in many
          modern applications.
        </p>
      </section>

      <section className="w-full md:w-11/12 flex flex-col md:flex-row md:mx-auto mt-10 md:mt-0 md:p-10">
        <div className="flex flex-col">
          <TabList />
          {activeTab === Tabs[Tabs.MockData] ? (
            <ul className="flex flex-row md:flex-col mx-auto md:mx-0">
              {Object.keys(Entities)
                .filter((key) => enumToString(key, Entities))
                .map((name, i) => (
                  <li
                    className={`md:w-32 cursor-pointer p-2 rounded hover:bg-indigo-500 ${
                      name === activeEntity ? "bg-indigo-200" : ""
                    }`}
                    key={i}
                    onClick={() => setActiveEntity(name)}
                  >
                    {name}
                  </li>
                ))}
            </ul>
          ) : null}
        </div>
        <Preview />
      </section>
    </>
  );
};
