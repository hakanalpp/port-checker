export const getDate = () => {
  const options = {
    hour12: false,
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  return new Date().toLocaleString(undefined, options).replace(",", "");
};
