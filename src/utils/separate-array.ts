export const separateArray = (array: any[], size: number): any[] => {
  const finalArray: any[] = [];

  for (let index = 0; index < array.length; index += size) {
    finalArray.push(array.slice(index, index + size));
  }

  return finalArray;
};
