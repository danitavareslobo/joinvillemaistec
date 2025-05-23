const soma = (a, b) => a + b;

const subtracao = (a, b) => a - b;

let numero1 = prompt("Digite o primeiro número:");
let numero2 = prompt("Digite o segundo número:");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Por favor, digite números válidos!");
} else {
    let resultadoSoma = soma(numero1, numero2);
    let resultadoSubtracao = subtracao(numero1, numero2);
    
    console.log(`Soma: ${numero1} + ${numero2} = ${resultadoSoma}`);
    console.log(`Subtração: ${numero1} - ${numero2} = ${resultadoSubtracao}`);
}