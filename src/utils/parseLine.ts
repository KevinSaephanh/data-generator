import { getDataType } from "./getDataType";
import { stringToCamelCase } from "./stringToCamelCase";

/**
 * @description Parses line to extract key value pair
 * @param {string} line
 * @returns KeyValuePair OR null
 */
export const parseLine = (line: string) => {
  const [key, value] = line.split(/=(.*)/);
  const mutatedKey = stringToCamelCase(key, "_");
  const dataType = getDataType(value);

  if (!!mutatedKey && !!dataType) return { key: mutatedKey, value: dataType };
  return null;
};
