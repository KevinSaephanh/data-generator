interface Enum {
  [key: number]: string;
}

export const enumToString = (value: string, enumObj: Enum) => {
  return Object.keys(enumObj)
    .filter((key) => !isNaN(Number(enumObj[key as unknown as keyof typeof enumObj])))
    .find((k) => k === value) as string;
};
