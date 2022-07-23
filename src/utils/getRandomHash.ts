export const getRandomHash = (len: number, chars: string | null) => {
  chars = chars || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let hash = "";

  for (let i = 0; i < len; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    hash += chars.substring(randomIndex, randomIndex + 1);
  }
  return hash;
};
