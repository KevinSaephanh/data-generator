import KeyValuePair from "../models/KeyValuePair";

/**
 * @description Takes in data as array of key/value pair and
 * creates the contents of a global env.d.ts file as a string
 * using the key/value
 * @param {KeyValuePair[]} data
 * @returns string
 */
export const createProcessEnv = (data: KeyValuePair[]) => {
  let processEnv = "declare global {\n\tnamespace NodeJS {\n\t\tinterface ProcessEnv {\n";

  //   Traverse key/value pair array and add each element to process env string
  data.forEach((el) => (processEnv += `\t\t\t${el.key}: ${el.value}\n`));

  // Add closing brackets and export statement
  processEnv += "\t\t}\n\t}\n}\n\nexport {};";

  return processEnv;
};
