export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatPath = (path: string) => {
  return capitalize(path.replaceAll("-", " ").replaceAll("/", ""));
};
