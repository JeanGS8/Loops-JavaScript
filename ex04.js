const prompt = require('prompt-sync')();

let num=0, pessoasCalmas=0; mulheresNervosas=0, homensAgressivos=0, outrosCalmos=0, mais40Nervoso=0, menos18Calmo=0;
while(num < 150){
    let idade = Number(prompt('Digite sua idade: '));
    let sexo = Number(prompt('Digite seu sexo (1-feminino / 2-masculino / 3-Outros): '));
    let personalidade = Number(prompt('Você é calmo, nervoso ou agressivo? (1-calma / 2-nervosa / 3-agressiva): '));

    if(personalidade == 1){
        pessoasCalmas++;
    }
    if(personalidade == 2 && sexo == 1){
        mulheresNervosas++;
    }
    if(personalidade == 3 && sexo == 2){
        homensAgressivos++;
    }
    if(personalidade == 1 && sexo == 3){
        outrosCalmos++;
    }
    if(personalidade == 2 && idade > 40){
        mais40Nervoso++;
    }
    if(personalidade == 1 && idade < 18){
        menos18Calmo++;
    }
    console.log();
    num++;
}

console.log(`\nPessoas calmas: ${pessoasCalmas}`);
console.log(`Mulheres nervosas: ${mulheresNervosas}`);
console.log(`Homens agressivos: ${homensAgressivos}`);
console.log(`Outros calmos: ${outrosCalmos}`);
console.log(`Pessoas nervosas com mais de 40 anos: ${mais40Nervoso}`);
console.log(`Pessoas calmas com menos de 18 anos: ${menos18Calmo}`);