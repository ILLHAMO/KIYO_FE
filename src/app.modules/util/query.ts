export const queryToNumber = (
  origin: undefined | string | Array<string>,
  defaultValue: number,
): number => {
  if (!origin) return defaultValue;
  if (Array.isArray(origin)) return defaultValue;
  if (Number.isNaN(origin)) return defaultValue;

  return Number(origin);
};
