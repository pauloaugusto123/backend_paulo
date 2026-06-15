const readline = require("readline-sync");

let numeroTabuada = readline.questionInt("Digite o numero que quer para sua tabuada: ");

console.log("Gerando a tabuada do " + numeroTabuada + "...");

for (let i = 1; i <= 10; i = i + 1) {

    let resultado = numeroTabuada * i;
    
    console.log(numeroTabuada + " * " + i + " = " + resultado);
}