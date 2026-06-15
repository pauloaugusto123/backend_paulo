const readline = require("readline-sync");


let primeiroNumero = headline.questionInt("Digite o primeiro numero: ");
let segundoNumero = readline.questionInt("Digite o segundo numero: ");


let soma = primeiroNumero + segundoNumero;
let subtracao = primeiroNumero - segundoNumero;
let multiplicacao = primeiroNumero * segundoNumero;


console.log("Soma = " + soma);
console.log("Subtração = " + subtracao);
console.log("Multiplicação = " + multiplicacao);


if (segundoNumero === 0) {
    console.log("Erro: Não é possível dividir por zero.");
} else {
    let divisao = primeiroNumero / segundoNumero;
    console.log("Divisão = " + divisao);
}