function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getSecondDigitFromRight(number) {
    let cutLastDigit = Math.floor(number / 10);
    let secondDigit = cutLastDigit % 10;
    return secondDigit;
}
let randomNum = getRandomNumber(1000, 9999);

let theDigit = getSecondDigitFromRight(randomNum);

console.log("Random Number: " + randomNum);
console.log("Second Digit from Right: " + theDigit);