export default somaNum // Default export
export { perimetroQuadrado, areaQuadrado } // Name export (Lista)

function somaNum(...numeros){
    let soma = numeros.reduce((acumulador, numAtual) => acumulador + numAtual, 0)
    return soma
};

function perimetroQuadrado(lado){
    return 4 * lado
};

function areaQuadrado(lado){
    return lado * lado
};
