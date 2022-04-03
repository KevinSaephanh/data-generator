/**
 * @description Takes in string and splits into array using delimiter.
 * The elements of the array are then transformed into camel case and combined into a single string
 * @param {string} str
 * @param {string} delimiter
 * @returns string
 */
export const stringToCamelCase = (str: string, delimiter: string) => {
  let camelCaseStr = "";
  const arr = str.split(delimiter);

  arr.forEach((el) => {
    // Set element to lower case
    let newStr = el.toLowerCase();

    // Capitalize 1st letter of string if element is NOT the 1st index
    if (arr.indexOf(el) !== 0) newStr = newStr.charAt(0).toUpperCase() + newStr.slice(1);
    camelCaseStr += newStr;
  });
  return camelCaseStr;
};
