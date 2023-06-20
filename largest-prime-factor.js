import { argv } from "process";

let composite = parseInt(argv[2]);
let sqrt = Math.ceil(Math.sqrt(composite));
let currPrime = 2;
/*
while (composite != currPrime) {
  if (composite % currPrime == 0) {
    console.log(currPrime);
    composite = composite / currPrime;
  }
  currPrime += 1;
}

console.log(currPrime);
*/
// Take two
let divisibles = [];
console.log(sqrt);
for (let i = 1; i <= sqrt; i++) {
  if (composite % i == 0) {
    divisibles.push(i);
  }
}
console.log(divisibles);
let primes = divisibles.filter((num) => Math.pow(2, num) % num == 2 % num);

console.log(primes);
