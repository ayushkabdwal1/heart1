export const truncate = (str, max) => {
  return typeof str === "string"
    ? str.length > max
      ? str.substring(0, max - 1) + "..."
      : str
    : null;
};
