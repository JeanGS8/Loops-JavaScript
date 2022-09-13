const prompt = require('prompt-sync')();

console.log(`todos os números de 1000 a 1999 que quando divididos por 11 obtemos resto = 5\n`);
for(let i=1000; i<1999; i++){
    if(i % 11 == 5){
        console.log(`${i} `);
    }
}