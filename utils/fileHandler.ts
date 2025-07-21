/* eslint-disable @typescript-eslint/no-explicit-any */
export const fileHandler = (file: any) => {
  if (file) return URL.createObjectURL(file);
};

export const isImage = (url: string) => {
  const imageExtensions = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/i;
  return imageExtensions.test(url);
};
