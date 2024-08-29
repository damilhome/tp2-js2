/* let fullName = 'Mark Elliot Zuckerberg';
let alive = true;
let year = 1984;
let height = 1.71;

console.log(typeof ALTERAR_AQUI == 'string');
console.log(typeof ALTERAR_AQUI == 'number');
console.log(typeof ALTERAR_AQUI == 'boolean');
console.log(typeof ALTERAR_AQUI == 'number'); */

function contarPares() {
    for (let i = 1; i <= 20; i++) {
        if(i % 2 === 0) {
            alert(`${i} é par`);
        }
    }
}

contarPares();