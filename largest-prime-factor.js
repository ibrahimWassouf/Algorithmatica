import { argv } from "process";

let composite = parseInt(argv[2]);
let currPrime = 2;

while (composite != currPrime) {
  if (composite % currPrime == 0) {
    console.log(currPrime);
    composite = composite / currPrime;
  }
  currPrime += 1;
}

console.log(currPrime);
