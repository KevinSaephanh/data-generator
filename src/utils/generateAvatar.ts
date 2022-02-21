import { getRandomNum } from "./getRandomNum";

export const generateAvatarUrl = () => {
  const randomNum = getRandomNum(1, 10000);
  return `https://robohash.org/${randomNum}`;
};
