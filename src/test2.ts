const array = [1, 2, 4, 4, 5, 6, 7, 8, 9, 10];
const shuffledArray = array.sort((a, b) => 0.5 - Math.random());

function onlyUnique(value: any, index: any, self: any) {
  return self.indexOf(value) === index;
}

console.log(
  shuffledArray.filter(
    (value: any, index: any, self: any) => self.indexOf(value) === index
  ).length
);
