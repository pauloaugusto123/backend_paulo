const input = require("readline-sync")

let num = input.questionInt("Digite um numero: ")
let decisao = num % 2 === 0 ? "par" : "impar"

console.log(decisao)