const x = 5;
const y = 3;
const z = 2;

let som= x + y 
let min= x - y 
let maal= x * z
let deel = x / z
// methode met concatenation
console.log(
    x + " + " + y + " is " + som +"\n",
    x + " - " + y + " is " + min +"\n",
    x + " * " + z + " is " + maal +"\n",
    x + " / " + z + " is " + deel.toFixed(2) +"\n",
)
// methode met template literals (backticks gebruiken!)
console.log(
    `${x} + ${y} is ${som}\n`,
    `${x} - ${y} is ${min}\n`,
    `${x} * ${y} is ${maal}\n`,
    `${x} / ${y} is ${deel}\n`
);