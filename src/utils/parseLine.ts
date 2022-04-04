import { getDataType } from "./getDataType";

/**
 * @description Parses line to extract key value pair
 * @param {string} line
 * @returns KeyValuePair OR null
 */
export const parseLine = (line: string) => {
  const [key, value] = line.split(/=(.*)/);
  const dataType = getDataType(value);

  if (!!key && !!dataType) return { key, value: dataType };
  return null;
};
