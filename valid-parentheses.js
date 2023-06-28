var isValid = function (s) {
  const PAREN_OPEN = "(";
  const PAREN_CLOSE = ")";
  const BRACK_OPEN = "{";
  const BRACK_CLOSE = "}";
  const SQUARE_OPEN = "[";
  const SQUARE_CLOSE = "]";

  let stack = [];

  for (char of s) {
    console.log(char);
    if (char === PAREN_OPEN || char === BRACK_OPEN || char === SQUARE_OPEN) {
      stack.push(char);
    } else if (char === PAREN_CLOSE && stack[stack.length - 1] === PAREN_OPEN) {
      stack.pop();
    } else if (char === BRACK_CLOSE && stack[stack.length - 1] === BRACK_OPEN) {
      stack.pop();
    } else if (
      char === SQUARE_CLOSE &&
      stack[stack.length - 1] === SQUARE_OPEN
    ) {
      stack.pop();
    } else {
      return false;
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
};
