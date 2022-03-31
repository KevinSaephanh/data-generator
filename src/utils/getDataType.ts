// Takes in data as string and parses it to check the type
export const getDataType = (data: string) => {
  // If data is 'true' or 'false'
  if (data.toLowerCase() === "true" || data.toLowerCase() === "false") return "boolean";

  // If data can be converted to a number
  if (!isNaN(+data)) return "number";

  // If data is string that does NOT contain any whitespace
  if (data.match(/^\S*$/)) return "string";

  return null;
};
