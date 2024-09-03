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
    totaisDiarios.forEach((valor, index) => {
        console.log(`${nomeDias[index]} vendeu um total de R$${valor.toFixed(2)}`);
    });
}
calcularTotalDiario(vendas);