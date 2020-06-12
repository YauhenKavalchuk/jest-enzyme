export const trimString = (string, maxLength) =>
  string && string.trim().length > maxLength
    ? `${string.trim().slice(0, maxLength)}...`
    : string;

export const getIsValidNumber = (number) => !Number.isNaN(parseInt(number, 10));

export const removeObjPropImmutably = (obj, prop) => {
  const res = { ...obj };
  delete res[prop];
  return res;
};
