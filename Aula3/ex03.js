const produtos = [
    { id: 1, nome: "Televisão", preco: 1000 },
    { id: 2, nome: "Cadeira", preco: 200 },
    { id: 3, nome: "Mouse", preco: 32.50 },
    { id: 4, nome: "Mouse Pad", preco: 15 },
    { id: 5, nome: "Teclado", preco: 90.00 }
];

const achado = produtos.find(function(item) {
    return item.id === 3;
});

console.log("Produto com ID 3:");
console.log(achado.nome);

const caros = produtos.filter(function(item) {
    return item.preco > 50;
});

console.log("\nProdutos acima de R$ 50:");
for (let i = 0; i < caros.length; i++) {
    console.log("Nome: " + caros[i].nome + " - Preço: R$ " + caros[i].preco);
}