const readline = require("readline-sync");

let numeroSecreto = 42;
let contadorTentativas = 0;
let acertou = false;

while (acertou == false) {
    let chuteDoUsuario = readline.questionInt("Digite um chute na senha: ");
    contadorTentativas = contadorTentativas + 1;

    if (chuteDoUsuario == numeroSecreto) {
        console.log("Acertou! Tentativas: " + contadorTentativas);
        acertou = true;
    } else {
        if (chuteDoUsuario < numeroSecreto) {
            console.log("O numero secreto e MAIOR");
        } else {
            console.log("O numero secreto e MENOR");
        }
    }
}