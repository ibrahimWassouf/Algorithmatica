const numbers = Array.from({ length: 1000 }, (_, index) => index);
const divisible = numbers.filter((elem) => elem % 3 == 0 || elem % 5 == 0);
const sum = divisible.reduce((partialSum, elem) => partialSum + elem, 0);

console.log(sum);
