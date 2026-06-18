let soma = 0;

for(let i=1; i<=50; i++){
    console.log(i)
    
    if(i % 2 === 0){
        soma = soma + i
    }
}

console.log(`\n soma = ${soma}`)