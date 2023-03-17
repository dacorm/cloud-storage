export const getExtensionFromFileName = (filename) => {
  return filename.split(".").pop();
};
