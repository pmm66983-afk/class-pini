function getNextEven(number) {
    let halfRoundedDown = Math.floor(number / 2);
    let nextEven = (halfRoundedDown * 2) + 2;
    return nextEven;
}

console.log("Input: 4.1 -> Output: " + getNextEven(4.1));
console.log("Input: 5 -> Output: " + getNextEven(5));
console.log("Input: 6 -> Output: " + getNextEven(6));     