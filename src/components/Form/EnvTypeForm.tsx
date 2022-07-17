import { ChangeEvent, useContext, useRef, useState } from "react";
import { FormButton } from "../Buttons/FormButton";
import fileImage from "../../assets/fileImage.png";
import { AppContext } from "../../store/AppProvider";
import { Tabs } from "../TabList/TabList";
import { SET_ERROR_MESSAGE, UPDATE_ENV_TYPES_PREVIEW } from "../../store/ActionTypes";
import KeyValuePair from "../../models/KeyValuePair";
import { parseLine } from "../../utils/parseLine";
import { createProcessEnv } from "../../utils/createProcessEnv";
import { ErrorMessage } from "./ErrorMessage";

export const EnvTypeForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const { activeTab, isGeneratingPreview, errorMessage } = state;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File>();
  const [disabled, setDisabled] = useState(true);

  const handleClick = () => {
    if (fileInputRef.current !== null) fileInputRef.current.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFile = e.target.files![0];
    setFile(newFile);

    // If file type is NOT .env, display error
    const isEnvFile = newFile.name.lastIndexOf(".env") > 1;
    if (!isEnvFile) {
      dispatch({
        type: SET_ERROR_MESSAGE,
        payload: "Please upload a .env file",
      });
    }

    // Set disabled value
    if (!isEnvFile || !!errorMessage || isGeneratingPreview) setDisabled(true);
    else setDisabled(false);
  };

  const handleButtonClick = async () => {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const parsedData = getParsedData(e.target.result);
      const envTypesPreview = createProcessEnv(parsedData);

      // Update store with keyValuePair array as new env types preview
      dispatch({
        type: UPDATE_ENV_TYPES_PREVIEW,
        payload: envTypesPreview,
      });
    };
    reader.readAsText(file!);
  };

  const getParsedData = (data: string) => {
    const arr: KeyValuePair[] = [];

    // Split text data by line and push to array
    data.split(/\r\n/).forEach((line: string) => {
      const keyValuePair = parseLine(line);
      if (!!keyValuePair) arr.push(keyValuePair);
    });
    return arr;
  };

  return (
    <form
      className={`w-11/12 mx-auto flex flex-col min-h-96 ${
        activeTab === Tabs[Tabs.EnvTypes] ? "block" : "hidden"
      }`}
    >
      <ErrorMessage show={disabled} text={errorMessage} />
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
            "bg-green-500 hover:bg-green-700 text-white font-bold w-32 py-2 px-4 mt-5 rounded disabled:cursor-not-allowed"
          }
          disabled={disabled}
          handleClick={handleButtonClick}
        />
      </div>
    </form>
  );
};
