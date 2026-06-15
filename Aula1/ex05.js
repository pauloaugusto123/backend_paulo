const readline = require("readline-sync");

let quantidadePares = 0;
let quantidadeImpares = 0;

for (let i = 1; i <= 10; i = i + 1) {
    
    let numeroDigitado = readline.questionInt("Digite o valor " + i + ": ");

    if (numeroDigitado % 2 == 0) {
        quantidadePares = quantidadePares + 1;
    } else {
        quantidadeImpares = quantidadeImpares + 1;
    }
}

console.log("Dentro desta lista de numeros existem um total de " + quantidadePares + " numeros pares e " + quantidadeImpares + " numeros impares");