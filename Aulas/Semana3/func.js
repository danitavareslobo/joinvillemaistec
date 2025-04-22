let valor1 = 5;
let valor2 = 10;

let resultadoFinal = 0;

console.log(resultadoFinal);
resultadoFinal = soma(valor1, valor2);
console.log(resultadoFinal);
resultadoFinal = subtracao(resultadoFinal, 3);
console.log(resultadoFinal);
resultadoFinal = soma(resultadoFinal, valor1);
console.log(resultadoFinal);

function soma(num1, num2) {
    let result = num1 + num2;
    return result;
    // return =num1+num2;
}

function subtracao(numero1, numero2) {
    return numero1 - numero2;
}

console.log(soma(2,3))
