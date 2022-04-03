import { ChangeEvent, useContext, useRef, useState } from "react";
import { FormButton } from "../Buttons/FormButton";
import fileImage from "../../assets/fileImage.png";
import { AppContext } from "../../store/AppProvider";
import { Tabs } from "../TabList/TabList";
import { UPDATE_ENV_TYPES_PREVIEW } from "../../store/ActionTypes";
import KeyValuePair from "../../models/KeyValuePair";
import { parseLine } from "../../utils/parseLine";
import { stringToCamelCase } from "../../utils/stringToCamelCase";

export const EnvTypeForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const { activeTab, isReadyToGenerate, isGeneratingPreview } = state;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File>();

  const handleClick = () => {
    if (fileInputRef.current !== null) fileInputRef.current.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFile = e.target.files![0];
    setFile(newFile);
  };

  const handleButtonClick = async () => {
    const reader = new FileReader();
    const arr: KeyValuePair[] = [];

    reader.onload = (e: any) => {
      // Split file text by line and push to array
      e.target.result.split(/\r\n/).map((line: string) => {
        const keyValuePair = parseLine(line);
        if (!!keyValuePair) arr.push(keyValuePair);
      });

      // Update store with keyValuePair array as new env types preview
      dispatch({
        type: UPDATE_ENV_TYPES_PREVIEW,
        payload: arr,
      });
    };
    reader.readAsText(file!);
  };

  return (
    <form
      className={`w-11/12 mx-auto flex flex-col min-h-96 ${
        activeTab === Tabs[Tabs.EnvTypes] ? "block" : "hidden"
      }`}
    >
      <img
        id="background"
        src={fileImage}
        className="h-44object-cover transition duration-300"
        alt=""
      />
      <div className="m-auto py-6 sm:px-0 flex flex-col justify-center items-center">
        <input type="file" ref={fileInputRef} onChange={handleFileChange} />
        <div className="space-y-6 text-center">
          <p className="text-gray-700 text-lg font-semibold">
            Drag and drop a file or
            <label
              htmlFor="dragOver"
              title="Upload a file"
              className="relative cursor-pointer text-blue-500 hover:text-blue-600 block"
              onClick={handleClick}
            >
              Upload a file
            </label>
          </p>
        </div>
        <FormButton
          text={"Generate"}
          type={"button"}
          className={
            "bg-green-500 hover:bg-green-700 text-white font-bold w-32 py-2 px-4 mt-5 rounded"
          }
          disabled={!file || isReadyToGenerate || isGeneratingPreview}
          handleClick={handleButtonClick}
        />
      </div>
    </form>
  );
};
