function somarNumeros(...numeros){
    let soma = numeros.reduce((acumulador, numAtual) => acumulador + numAtual, 0)
    return soma
};

let arrayNum = [5,5,5,5,5]

console.log(somarNumeros(...arrayNum))

const arrayDeObjetos = [
    {aluno: 'Cauã', idade: '18 anos'},
    {aluno: 'Bruno', idade: '17 anos'},
    {aluno: 'Lucas', idade: '17 anos'},
]

function mostrarAlunos(arrayDeObjetos){
    arrayDeObjetos.forEach(({ aluno, idade }) => console.log(`O aluno ${aluno} possui ${idade}.`)) // Desestruturação de objeto
}

mostrarAlunos(arrayDeObjetos)