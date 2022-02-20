export const generateAvatarUrl = () => {
  const randomNum = Math.random() * (10000 - 1) + 1;
  return `https://robohash.org/${randomNum}`;
};
