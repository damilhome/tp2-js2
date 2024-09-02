function contarPropriedades(obj) {
    let contador = 0;

    for(let i in obj) {
        contador++;
    }

    alert(contador);
}

const pessoa = {
    nome: "Ana",
    idade: 28,
    profissão: "Engenheira"
}

contarPropriedades(pessoa);