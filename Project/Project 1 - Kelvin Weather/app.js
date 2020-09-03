// The forecast today is 293 Kelvin temperature
const kelvin = 0;

//Convert Kelvin to Celsius
const celsius = kelvin - 273;

//Convert Celsius to Fahrenheit
let fahrenheit = celsius*(9/5) + 32;

//Round down Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//Convert to Newton
let newton = celsius*(33/100);

//Round down
newton = Math.floor(newton);

console.log(`The Newton temperature is ${newton} degrees Newton.`);