function getRandomNumber(top = 1000) {
    return Math.floor(Math.random() * top)
}
function calculatePotCapacity(diameter, depth) {
    let radius = diameter / 2;
    let pi = 3.14;
    let baseArea = pi * (radius ** 2);
    return baseArea * depth;
}
let randomDiameter = getRandomNumber();
let randomDepth = getRandomNumber();

console.log("Diameter: " + randomDiameter);
console.log("Depth: " + randomDepth);
console.log("Capacity: " + calculatePotCapacity(randomDiameter, randomDepth));