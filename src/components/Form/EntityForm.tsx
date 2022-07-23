import { FormEvent, KeyboardEvent, useContext, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { defaultEntityFields, entityOptions } from "../../constants";
import KeyValuePair from "../../models/KeyValuePair";
import { createEntity } from "../../staticDataGenerator";
import { SET_ERROR_MESSAGE, UPDATE_ENTITY_PREVIEW } from "../../store/ActionTypes";
import { AppContext } from "../../store/AppProvider";
import { ExitButton } from "../Buttons/ExitButton";
import { FormButton } from "../Buttons/FormButton";
import { Tabs } from "../TabList/TabList";
import { ErrorMessage } from "./ErrorMessage";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";

export const EntityForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const { activeTab, isGeneratingPreview, errorMessage } = state;
  const { register, handleSubmit, control, formState, setValue } = useForm({
    defaultValues: { entities: defaultEntityFields },
    shouldUnregister: false,
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "entities",
  });
  const [disabled, setDisabled] = useState(false);
  const [numRecords, setNumRecords] = useState(1);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    const isValidKey =
      !isNaN(+key) || key === "Backspace" || key === "ArrowRight" || key === "ArrowLeft";

    // Prevent invalid keys from being input
    if (!isValidKey) event.preventDefault();
  };

  const handleNumChange = (event: FormEvent<HTMLInputElement>) => {
    const num = +event.currentTarget.value;
    const isInvalidNum = num > 1000 || num < 1;

    // If number is invalid, set error message and disable 'Generate' button
    dispatch({
      type: SET_ERROR_MESSAGE,
      payload: isInvalidNum ? "Please enter a number between 1 and 1000" : "",
    });
    setDisabled(isInvalidNum);
    setNumRecords(num);
  };

  const handleFieldChange = (index: number, value: string, fieldType: string) => {
    if (fieldType === "input") setValue(`entities.${index}.key`, value);
    else setValue(`entities.${index}.value`, value);
  };

  const onSubmit = (data: any) => {
    const { entities } = data;
    const arr: any[] = [];

    // Create entities until number of records desired is reached
    for (let i = 0; i < numRecords; i++) {
      const entity = createEntity(entities as KeyValuePair[]);
      arr.push(entity);
    }

    // Set preview
    dispatch({
      type: UPDATE_ENTITY_PREVIEW,
      payload: arr,
    });
  };

  return (
    <form
      className={`w-11/12 flex flex-col min-h-96 mx-auto md:mx-0 ${
        activeTab === Tabs[Tabs.MockData] ? "block" : "hidden"
      }`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <ErrorMessage show={disabled} text={errorMessage} />
      <div className="flex flex-col">
        <div className="flex flex-row space-x-24 md:space-x-40 mr-5 md:mr-10">
          <h3 className="font-semibold pb-5 pl-2 md:text-lg">Field Name</h3>
          <h3 className="font-semibold pb-5 pl-2 md:text-lg">Type</h3>
        </div>
        {fields.map((field, index) => {
          return (
            <div
              className="flex flex-row"
              key={field.id}
              {...register(`entities.${index}` as const, { required: true })}
            >
              <InputField
                index={index}
                placeholder={"Enter entity name"}
                pattern={"[A-Za-z0-9-_]+"}
                disabled={isGeneratingPreview}
                tooltip={"Enter the name of the entity field"}
                change={handleFieldChange}
              />
              <SelectField
                index={index}
                options={entityOptions}
                disabled={isGeneratingPreview}
                change={handleFieldChange}
              />
              <ExitButton
                key={index}
                path={"M6 18L18 6M6 6l12 12"}
                handleClick={() => remove(index)}
              />
            </div>
          );
        })}

        <div className="mb-8">
          <span># of Records (Max. 1000): </span>
          <input
            type="number"
            pattern="[0-9]"
            min="1"
            max="1000"
            className="border-b-2 border-black w-16 pl-1"
            title="Input number of records you want to generate"
            onKeyDown={handleKeyDown}
            onChange={handleNumChange}
          />
        </div>

        <div className="flex flex-row">
          <FormButton
            text={"Add Field"}
            type={"button"}
            className={
              "bg-indigo-500 hover:bg-indigo-700 text-white font-bold w-32 py-2 px-4 mb-5 mr-5 rounded"
            }
            disabled={isGeneratingPreview}
            handleClick={() => append({ key: "", value: "" })}
          />
          <FormButton
            text={"Generate"}
            type={"submit"}
            className={
              "bg-green-500 hover:bg-green-700 text-white font-bold w-32 py-2 px-4 mb-5 rounded disabled:cursor-not-allowed"
            }
            disabled={!formState.isValid || !!errorMessage}
            handleClick={() => {}}
          />
        </div>
      </div>
    </form>
  );
};
