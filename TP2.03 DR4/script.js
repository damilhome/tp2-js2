function multiplicarArray(arrNubmer) {
    const arrResult = [];

    for (let index in arrNubmer) {
        arrResult.push(arrNubmer[index] * 3);
    }

    return arrResult;
}

const resultado = multiplicarArray([1, 2, 3, 4, 5]);
console.log(resultado);