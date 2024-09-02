function contarCaracteres(texto) {
    let totalCaracteres = 0;
    
    for (const caracter of texto) {
        totalCaracteres++;
    }

    alert(totalCaracteres);
}
const mensagem = "Olá, mundo!";
contarCaracteres(mensagem); 