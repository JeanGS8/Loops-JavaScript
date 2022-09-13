const prompt = require('prompt-sync')();

let idade=0, menos21=0, mais50=0;

while(idade != -99){
    idade = Number(prompt(`Digite sua idade ([-99] para finalizar): `));
    if(idade < 21 && idade != -99){
        menos21++;
    }
    else if(idade > 50){
        mais50++;
    }
}

console.log(`\nO total de pessoas com menos de 21 anos são: ${menos21}`);
console.log(`O total de pessoas com mais de 50 anos são: ${mais50}`);