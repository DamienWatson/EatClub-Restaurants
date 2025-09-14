export const charsInStr = (str: string, chars: string) => {
  return str.toLowerCase().includes(chars.toLowerCase());
};

export const charsInArr = (arr: Array<string>, chars: string) => {
  return arr.filter((item) => charsInStr(item, chars)).length > 0;
};
