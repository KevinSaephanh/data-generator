export const getRandomNum = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};
