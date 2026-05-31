function getRandomTwoDigit() {
    return Math.floor(Math.random() * 90) + 10;
}
function getTensDigit(number) {
    let a = Math.floor(number / 10);
    let b = (number % 10) * 10 + a;
    return b;
}
let originalNum = getRandomTwoDigit();
let reversed = getTensDigit(originalNum);

console.log("Original number: " + originalNum);
console.log("Reversed number: " + reversed);
