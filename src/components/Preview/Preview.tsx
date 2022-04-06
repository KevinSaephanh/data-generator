import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../store/AppProvider";
import { Tabs } from "../TabList/TabList";

export const Preview = () => {
  const { activeTab, entityPreview, envTypesPreview } = useContext(AppContext).state;
  const [hasClicked, setHasclicked] = useState(false);
  const [preview, setPreview] = useState<string | any[]>("");

  useEffect(() => {
    if (activeTab === Tabs[Tabs.MockData]) setPreview(entityPreview);
    else setPreview(envTypesPreview);
  }, [activeTab, entityPreview, envTypesPreview]);

  const handleClick = () => {
    setHasclicked(true);
    if (activeTab === Tabs[Tabs.MockData])
      navigator.clipboard.writeText(JSON.stringify(entityPreview, null, 2));
    else navigator.clipboard.writeText(JSON.stringify(envTypesPreview, null, 2));
  };

  return (
    <div className="flex flex-col w-11/12 md:w-2/4 mx-auto md:mr-0 md:ml-auto">
      <button
        className="bg-indigo-500 hover:bg-indigo-700 h-10 text-white font-bold w-32 py-2 px-4 mb-5 md:mr-0 ml-auto rounded mt-10 md:mt-0"
        onClick={handleClick}
      >
        {hasClicked ? "Copied!" : "Copy"}
      </button>
      <div className="h-550 w-full max-w-700 md:text-lg overflow-y-scroll p-2 md:p-5 rounded border-2 border-gray-800">
        {preview.length > 0 ? (
          <>
            {typeof preview === "string" ? (
              <pre className="whitespace-pre-wrap">{preview}</pre>
            ) : (
              <pre>{JSON.stringify(preview, null, 2)}</pre>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};
