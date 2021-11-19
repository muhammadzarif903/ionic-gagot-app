export const roundNumber = (value: number, decimals: number) => {
  decimals = decimals || 0;
  return (Math.floor(value * Math.pow(10, decimals)) / Math.pow(10, decimals));
};
