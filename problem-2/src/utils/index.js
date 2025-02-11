export const formatNumberWithCommas = (value) => {
  if (value === "") return value;
  const [integer, decimal] = value.split(".");
  const integerWithCommas = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decimal ? `${integerWithCommas}.${decimal}` : integerWithCommas;
};
