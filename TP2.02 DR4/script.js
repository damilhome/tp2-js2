/* let a = 4;
let b = 2;

//console.log(adição);
//console.log(subtração);
//console.log(multiplicação);
//console.log(divisão)
//console.log(módulo ou resto da divisão inteira)
//console.log(exponenciação) */

function somarImpares() {
    let tempSum = 0;
    for (let i = 1; i <= 15; i++) {
        if(i % 2 !== 0) {
            tempSum += i;
        }
    }
    alert(`A soma dos números ímpar é ${tempSum}`);
}

somarImpares();