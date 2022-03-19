import { ChangeEvent, FC, useContext, useRef, useState } from "react";
import { FormButton } from "../Buttons/FormButton";
import fileImage from "../../assets/fileImage.png";
import { AppContext } from "../../store/AppProvider";

type EnvTypeFormProps = {
  name: string;
};

export const EnvTypeForm: FC<EnvTypeFormProps> = ({ name }) => {
  const { state, dispatch } = useContext(AppContext);
  const { isGeneratingPreview } = state;
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
    parseEnvFile();
    // Check type of file
    const reader = new FileReader();
    reader.onload = (e: any) => {
      console.log(e.target.result);
    };
    reader.readAsText(file!);
  };

  const parseEnvFile = () => {
    // BrowserFS.
    // const data = readFileSync("./.env", "utf-8");
    // console.log(data);
  };

  return (
    <form className="w-11/12 md:w-500 md:min-w-11/12 mx-auto flex flex-col min-h-96">
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
          disabled={!file || isGeneratingPreview}
          handleClick={handleButtonClick}
        />
      </div>
    </form>
  );
};
