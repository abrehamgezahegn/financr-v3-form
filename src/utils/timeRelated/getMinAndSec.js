export const getMinAndSec = value => {
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value - minutes * 60);

  if (seconds / 10 < 1) {
    return `${minutes}:0${seconds}`;
  }

  return `${minutes}:${seconds}`;
};
