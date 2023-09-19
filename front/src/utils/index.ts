export const formatDate = (date: string | undefined) =>
  date !== undefined ? `${date.substring(0, 4)}.${date.substring(4)}` : '';
