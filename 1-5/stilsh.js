function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRightmostDigit(number) {
  return number % 10;
}
let randomFourDigitNum = getRandomNumber(1000, 9999);

let lastDigit = getRightmostDigit(randomFourDigitNum);

console.log("Random Number: " + randomFourDigitNum);
console.log("Rightmost Digit: " + lastDigit);