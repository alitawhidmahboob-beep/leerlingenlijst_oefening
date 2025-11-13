const seconds = 99456
const secondsInYear = 1 * 365 * 24 * 60 * 60;
const secondsInDay = 24 * 60 * 60;
const secondsInHour = 60 * 60;
const secondsInMinute = 60;

let secondsLeft = seconds;

const numberOfYear = Math.floor(secondsLeft/secondsInYear);
secondsLeft -= numberOfYear * secondsInYear;
const numberOfDay = Math.floor(secondsLeft/secondsInDay);
secondsLeft -= numberOfDay * secondsInDay;
const numberOfHour = Math.floor(secondsLeft/secondsInHour);
secondsLeft -= numberOfHour * secondsInHour;
const numberOfMinute = Math.floor(secondsLeft/secondsInMinute);
secondsLeft -= numberOfMinute * secondsInMinute;

const message = `
${numberOfYear} year, ${numberOfDay} day, ${numberOfHour} hour, ${numberOfMinute} minute
`;

console.log(message);