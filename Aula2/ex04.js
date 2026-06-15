const input = require("readline-sync");

function executarOperacao(a, b, operacao) {
    let resultado = operacao(a, b);
    console.log(resultado);
}

executarOperacao(6, 7, (a, b) => a + b);
executarOperacao(6, 7, (a, b) => a * b);
executarOperacao(6, 7, (a, b) => a - b);