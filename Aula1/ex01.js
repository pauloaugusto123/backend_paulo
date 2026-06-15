const readline = require("readline-sync");

let nomeUsuario = readline.question("Digite seu nome: ");
let idadeUsuario = readline.questionInt("Digite sua idade: ");
let cidadeUsuario = readline.question("Digite sua cidade: ");

let mensagemFinal = "Ola! Meu nome e " + nomeUsuario + ", tenho " + idadeUsuario + " anos e sou de " + cidadeUsuario + ".";

console.log(mensagemFinal);