const prices = [7, 1, 5, 3, 6, 4];

let leftIndex = 0;
let rightIndex = 1;
let maxProfit = 0;

while (rightIndex < prices.length) {
  if (prices[leftIndex] < prices[rightIndex]) {
    let currProfit = prices[rightIndex] - prices[leftIndex];

    if (currProfit > maxProfit) {
      maxProfit = currProfit;
    }
  } else {
    leftIndex = rightIndex;
  }
  rightIndex++;
}

console.log(maxProfit);
