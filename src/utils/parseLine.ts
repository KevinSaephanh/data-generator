export const parseLine = (line: string) => {
  const keyValueArr = line.split(/=(.*)/s);

  console.log(keyValueArr);
  if (!!keyValueArr) {
    const key = keyValueArr[0];
    const value = keyValueArr[1];
  }
};
