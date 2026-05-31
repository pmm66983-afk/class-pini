function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getHundredsDigit(number) {
    let removeRightDigits = Math.floor(number / 100);
    let hundredsDigit = removeRightDigits % 10;
    return hundredsDigit;
}
let randomNum = getRandomNumber(100, 9999);

let theDigit = getHundredsDigit(randomNum);

console.log("The random number is: " + randomNum);
console.log("The hundreds digit is: " + theDigit);