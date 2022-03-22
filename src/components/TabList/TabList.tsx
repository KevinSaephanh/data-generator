import { useContext } from "react";
import { UPDATE_ACTIVE_TAB } from "../../store/ActionTypes";
import { AppContext } from "../../store/AppProvider";
import { enumToString } from "../../utils/enumToString";

export enum Tabs {
  MockData,
  EnvTypes,
}

export const TabList = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleClick = (e: any, name: string) => {
    dispatch({
      type: UPDATE_ACTIVE_TAB,
      payload: name,
    });
  };

  return (
    <ul className="h-14 flex list-none border-b-0 mb-4 md:mb-6" role="tablist">
      {Object.keys(Tabs)
        .filter((key) => enumToString(key, Tabs))
        .map((name, i) => (
          <li
            className={`block text-lg font-semibold ml-4 md:ml-0 px-2 md:px-2 py-2 rounded md:hover:bg-gray-200 cursor-pointer
          ${name === state.activeTab ? "border-b-4 border-indigo-500" : ""}`}
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
  );
};
