import Fakerator from "fakerator";

// Generates name from fakerator then returns first and last name as string array
export const generateName = () => {
  const fakerator = Fakerator();
  const name = fakerator.names.name();
  return name.split("\\s+");
};
