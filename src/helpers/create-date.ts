export const createDate = (): string => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDay();
  return `${year}-${month}-${day}`;
};
