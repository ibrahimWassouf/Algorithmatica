let smallestLeft = 999;
let smallestRight;

for (let right = 999; right > 0; right--){
    const mult = smallestLeft * right;
    if (isPalindrome(mult)) {
      smallestRight = right;
      break;
    }
}

let largestPalindrome = smallestLeft * smallestRight;

for (let i = 999; i > 0; i--) {
  for (let j = 999; j > smallestRight; j--){
    let mult = i * j;
    if (isPalindrome(mult) && mult > largestPalindrome){
      largestPalindrome = mult;
    }
  }
}

console.log(largestPalindrome);

function isPalindrome(num){
  let string = num.toString();
  let stack = [];

  for (const char of string){
    stack.push(char);
  }

  for (let i = 0; i < stack.length; i++){
    let char = stack.pop();
    if (char !== string[i]) {
      return false;
    }
  }
  return true;
}

