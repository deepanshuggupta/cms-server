import { generate } from "randomstring";

export const randomImageName = (name: string) => {
  const arr = name.split(".");
  const firstName = arr.slice(0, arr.length - 1).join("");
  const suffix = `.${arr[arr.length - 1]}`;
  const random = generate(7);
  return `${firstName}-${random}${suffix}`;
};
