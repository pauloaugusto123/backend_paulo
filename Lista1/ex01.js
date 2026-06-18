const input = require("readline-sync")

let C = input.questionFloat("Digite um valor em celsius: ")

console.log(`fahrenheit = ${C * 1.8 + 32}`)