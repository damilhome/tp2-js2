/* const nomeDias = ['Segunda-feira','Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'] */
const vendas = [
    [150, 200, 120], // Segunda-feira
    [180, 230, 140], // Terça-feira
    [160, 210, 130], // Quarta-feira
    [170, 220, 150], // Quinta-feira
    [190, 240, 160], // Sexta-feira
    [200, 250, 170], // Sábado
    [210, 260, 180]  // Domingo
];
/* 
function totalVendido(vendas){
    let soma = 0;
    for(dias of vendas){
        for(valor of dias){
            soma += valor;
        }
    }
    return `O valor total das vendas foi R$${soma}`
}


function mediaDiaria(vendas){
    const mediasDiarias = [];
    for(dias of vendas){
        let media = 0;
        for(valor of dias){
            media += valor;
        }
       
        mediasDiarias.push(media/dias.length);
       
    }
    return mediasDiarias;
}

function calcularSomaDosDias(vendas){
    const somaDias = [];
    for(dias of vendas){
        let soma = 0;
        for(valor of dias){
            soma += valor
        }
        somaDias.push(soma);
    }
    return somaDias;
}

function maiorVendaDaSemana(somaDias, nomeDias){
    let maior = 0
    let maiorIndex = null;
    for(dias in somaDias){
        if(dias === "0"){
            maior = somaDias[dias]
            maiorIndex = dias;
        }
        else{
            if(maior < somaDias[dias]){
                maior = somaDias[dias];
                maiorIndex = dias;
               
            }
        }
    }
    return `O maior dia de vendas foi ${nomeDias[maiorIndex]}, vendendo R$${maior}`;
}

function menorVendaDaSemana(somaDias, nomeDias){
    let menor = 0;
    let menorIndex = null;
    for(dias in somaDias){
        if(dias === "0"){
            menor = somaDias[dias]
            menorIndex = dias;
        }
        else{
            if(menor > somaDias[dias]){
                menor = somaDias[dias];
                menorIndex = dias;
            }
        }
    }

    return `O menor dia de vendas foi ${nomeDias[menorIndex]}, vendendo R$${menor}`;
}

const mediasDiarias = mediaDiaria(vendas);


console.log(totalVendido(vendas));
mediasDiarias.forEach((dias, index) => {
    console.log(`${nomeDias[index]} teve uma media de vendas de R$${dias.toFixed(2)}`);
})

console.log(maiorVendaDaSemana(calcularSomaDosDias(vendas), nomeDias));
console.log(menorVendaDaSemana(calcularSomaDosDias(vendas), nomeDias)); */