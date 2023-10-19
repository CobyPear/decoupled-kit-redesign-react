export const classNames = (
  strings: TemplateStringsArray,
  ...values: string[]
) => {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (values[i] || "");
  });
  return str.replace(/\s\s+/g, " ").trim();
};
