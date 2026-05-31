function roomCalculations(width, height) {
    let area = width * height;
    let perimeter = 2 * (width + height);
    return "Area: " + area + ", Perimeter: " + perimeter;
}
console.log(roomCalculations(5, 3));