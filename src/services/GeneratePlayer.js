export const generateAverage = () => {
  const average = Math.round(150 / (Math.random() * 150));
  return average;
};

export const getRandomAverage = (mean, dist) => {
  return (
    Math.round(
      (Math.random() * 2 * dist +
        Math.random() * 2 * dist +
        Math.random() * dist) /
        3
    ) +
    mean -
    dist
  );
};
