const readline = require('readline-sync')
const celsius = Number(readline.question("digite a temperatura em celsius?"))
const fahrenheit = celsius * 1.8 + 32
console.log(`${celsius}°C é igual a ${fahrenheit}°F`)