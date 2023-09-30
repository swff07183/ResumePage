export const formatDate = (date: string | undefined) =>
  date !== undefined ? `${date.substring(0, 4)}.${date.substring(4)}` : '';

export const makeSameKeyObj = <T extends object, U>(obj: T, defaultValue: U) =>
  Object.keys(obj).reduce(
    (newObj, key) => ({
      ...newObj,
      [key]: defaultValue,
    }),
    {} as Record<keyof T, U>
  );
