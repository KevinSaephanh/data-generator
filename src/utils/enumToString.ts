interface Enum {
  [key: number]: string;
}

export const enumToString = (value: string, enumObj: Enum) => {
  let str;

  Object.keys(enumObj)
    .filter((key) => !isNaN(Number(enumObj[key as unknown as keyof typeof enumObj])))
    .map((k) => (str = k));
  return str;
};
