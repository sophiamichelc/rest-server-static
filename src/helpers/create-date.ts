export const createDate = (): string => {
  const date = new Date();

  const parts = new Intl.DateTimeFormat("es-PE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).formatToParts(date);

  const day = parts.find((p) => p.type === "day")?.value;
  const month = parts.find((p) => p.type === "month")?.value;
  const year = parts.find((p) => p.type === "year")?.value;

  return `${day}-${month}-${year}`;
};
