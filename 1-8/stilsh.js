function getRandomTwoDigit() {
  return Math.floor(Math.random() * 90) + 10;
}
function sumOfDigits(number) {
    let a = Math.floor(number / 10);
    let b = number % 10;
    return a + b;
}
let randomTwoDigitNum = getRandomTwoDigit();

let sumDigits = sumOfDigits(randomTwoDigitNum);
console.log("The random two-digit number is: " + randomTwoDigitNum);
console.log("The sum of its digits is: " + sumDigits);