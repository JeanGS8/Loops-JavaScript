const prompt = require('prompt-sync')();

let num=0, soma=0;

do{
    num = Number(prompt('Digite um número (0-para sair): '));
    soma += num;
}while(num != 0);

console.log(`\nA soma de todos os números é: ${soma}`);