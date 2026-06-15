const alunos = [
    { id: 1, nome: "Ana", nota: 8.5 },
    { id: 2, nome: "Bruno", nota: 6.0 },
    { id: 3, nome: "Carlos", nota: 7.0 },
    { id: 4, nome: "Daniela", nota: 4.5 },
    { id: 5, nome: "Eduardo", nota: 9.0 }
];

const listaResultado = alunos.map(function(aluno) {

    let status = "Reprovado";
    
    if (aluno.nota >= 7) {
        status = "Aprovado";
    }

    return {
        nome: aluno.nome,
        nota: aluno.nota,
        situacao: status
    };
});

console.log("--- RESULTADO DOS ALUNOS ---");

for (let i = 0; i < listaResultado.length; i++) {
    console.log("Nome: " + listaResultado[i].nome + " | Nota: " + listaResultado[i].nota + " | Status: " + listaResultado[i].situacao);
}
