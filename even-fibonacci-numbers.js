let list = [1, 1];
let evenList = [];

while (list[list.length - 1] <= 4000000) {
  const newFib = list[list.length - 1] + list[list.length - 2];
  list.push(newFib);

  if (newFib % 2 == 0) {
    evenList.push(newFib);
  }
}

const sum = evenList.reduce((partialSum, element) => element + partialSum, 0);
console.log(sum);
