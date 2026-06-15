const input = require("readline-sync") // Importação mantida caso use depois

const produtos = [
    {id: 1, nome: "Televisão", preco: 1000 },
    {id: 2, nome: "Cadeira", preco: 200},
    {id: 3, nome: "Mouse", preco: 32.50},
    {id: 4, nome: "Mouse Pad", preco: 15}
]

for (let i = 0; i < produtos.length; i++) {
  console.log(
    `ID: ${produtos[i].id}, Nome: ${produtos[i].nome}, Preço: R$ ${produtos[i].preco.toFixed(2)}`
  );
}

produtos.push({id: 5, nome: "Teclado", preco: 90.00});

console.log("\n")

for (let i = 0; i < produtos.length; i++) {
  console.log(
    `ID: ${produtos[i].id}, Nome: ${produtos[i].nome}, Preço: R$ ${produtos[i].preco.toFixed(2)}`
  );
}

console.log("\nNovo tamanho do array: ", produtos.length)
