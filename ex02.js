const prompt = require('prompt-sync')();

const num = [];
let par=0, impar=0;

for(let i=0; i<10; i++){
    num[i] = Number(prompt(`Digite o ${1+i} número: `));

    if(num[i] % 2 == 0){
        par++;
    }
    else{
        impar++;
    }
}

console.log(`\nentre os 10 números ${impar} são impares e ${par} são pares.`);