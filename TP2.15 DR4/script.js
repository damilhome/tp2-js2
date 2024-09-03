const nomeDias = ['Segunda-feira','Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']
const vendas = [
    [150, 200, 120], // Segunda-feira
    [180, 230, 140], // Terça-feira
    [160, 210, 130], // Quarta-feira
    [170, 220, 150], // Quinta-feira
    [190, 240, 160], // Sexta-feira
    [200, 250, 170], // Sábado
    [210, 260, 180]  // Domingo
];

function calcularTotalDiario(vendas) {
    const totaisDiarios = [];
    for(let i = 0; i < vendas.length; i++){
        let soma = 0
        for(let j = 0; j < vendas[i].length; j++){
            soma += vendas[i][j];
        }
        totaisDiarios.push(soma);
    }
    return totaisDiarios
}

function encontrarMelhorPiorDia(totaisDiarios) {
    let maior = 0
    let maiorIndex = null;
    let menor = 0;
    let menorIndex = null;
    for(let i = 0; i < totaisDiarios.length; i++){
        if(i === 0){
            maior = totaisDiarios[i]
            maiorIndex = i;
            menor = totaisDiarios[i]
            menorIndex = i;
        }
        else{
            if(maior < totaisDiarios[i]){
                maior = totaisDiarios[i];
                maiorIndex = i;
            }
            if(menor > totaisDiarios[i]){
                menor = totaisDiarios[i];
                menorIndex = i;
            }
        }
    }
    console.log(`${nomeDias[maiorIndex]}, ${nomeDias[menorIndex]}`);
}

encontrarMelhorPiorDia(calcularTotalDiario(vendas))