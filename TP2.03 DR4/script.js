function multiplicarArray(arrNubmer) {
    const arrResult = [];

    for (let i = 0; i < arrNubmer.length; i++) {
        arrResult.push(arrNubmer[i] * 3);
    }

    return arrResult;
}

const resultado = multiplicarArray([1, 2, 3, 4, 5]);
console.log(resultado);