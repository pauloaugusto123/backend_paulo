const input = require("readline-sync")

const min = (a, b) => {
    if (a < b) {
        return a;
    } else {
        return b;
    }
};

let a = input.questionInt("Digite um numero = ")
let b = input.questionInt("Agora outro = ")

console.log(`menor é o min(a, b)`);