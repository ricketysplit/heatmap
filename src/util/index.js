export const getColor = value => {
  const variance = (value - 250) / 500;
  return Number(value) > 250
    ? `rgba(210, 0, 0, ${0.7 + variance}`
    : `rgba(0, 0, 240, ${0.7 - variance}`;
};
