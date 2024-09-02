function exibirElementosArray(numeros) {
    for(let i in numeros) {
        alert(`${i}: ${numeros[i]}`); 
    }
}

const arrayNumeros = [10, 20, 30, 40, 50];

exibirElementosArray(arrayNumeros);