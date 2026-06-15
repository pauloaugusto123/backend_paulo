const readline = require("readline-sync");

let somaNotas = 0;

for (let i = 1; i <= 5; i++) {
    let notaDigitada = readline.questionInt("Digite a nota " + i + ": ");
    
    somaNotas = somaNotas + notaDigitada;
}

let mediaFinal = somaNotas / 5;

if (mediaFinal >= 7) {
    console.log("Aprovado, media final: " + mediaFinal);
} else if (mediaFinal >= 5) {
    console.log("Recuperacao, media final: " + mediaFinal);
} else {
    console.log("Reprovado, media final: " + mediaFinal);
}