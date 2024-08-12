let arraySimples = [2, 4, 6, 8, 10, 11]
let resultado = arraySimples.every(elemento => elemento % 2 === 0); // Retorna apenas True ou False (Funciona como o operador lógico &&)
console.log(resultado);

arraySimples = [2, 4, 6, 8, 10, 11]
resultado = arraySimples.some(elemento => elemento % 2 !== 0); // Retorna apenas True ou False (Funciona como o operador lógico ||)
console.log(resultado);