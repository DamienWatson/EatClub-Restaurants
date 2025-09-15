export const charsInStr = (str: string, chars: string) => {
  return str.toLowerCase().includes(chars.toLowerCase());
};

export const charsInArr = (arr: Array<string>, chars: string) => {
  return arr.filter((item) => charsInStr(item, chars)).length > 0;
};

export const kebabCase = (str: string) => {
  return str.toLowerCase().replace(/\s/g, '-');
};

export const checkTimeBeforeTime = (checkTime: string, time: string) => {
  if (!checkTime || checkTime === '' || !time || time === '') {
    return false;
  }

  let timeNumber = Number(time.split(':')[0]);
  if (time.includes('pm')) {
    timeNumber += 12;
  }
  const timeDate = new Date(`January 01, 2025, ${timeNumber}:00`);

  let checkNumber = Number(checkTime?.split(':')[0]);
  if (checkTime?.includes('pm')) {
    checkNumber += 12;
  }
  const checkDate = new Date(`January 01, 2025, ${checkNumber}:00`);

  return (checkDate >= timeDate);
}
