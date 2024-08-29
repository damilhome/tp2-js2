function exibirCarro() {
    const carro = {
        marca: 'Toyota',
        modelo: 'Corolla',
        ano: 2020,
    };

    for (const key in carro) {
        alert(`${key}: ${carro[key]}`);
    }
}

exibirCarro();