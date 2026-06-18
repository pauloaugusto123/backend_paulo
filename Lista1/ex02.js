const input = require("readline-sync")

let base = input.questionFloat("Digite a base: ")
let altura = input.questionFloat("Digite a altura: ")

console.log(`A area do triangulo é de: ${(base*altura)/2}`)