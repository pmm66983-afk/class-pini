function convertMinutesToHours(totalMinutes) {
    let  hours = Math.floor(totalMinutes / 60);
    let minit = totalMinutes % 60;
    return hours + " hours and " + minit + " minutes";
}
console.log(convertMinutesToHours(135));