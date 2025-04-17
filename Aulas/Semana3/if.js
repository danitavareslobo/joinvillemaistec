let numero1 = 10;
let numero2 = 5;
let resultado = true;

resultado = numero1 > numero2;

console.log(resultado)


// && => E (and)
// || => Ou (Or)
// ! => Não (Not)

// numero1 > numero2 => maior
// numero1 < numero2 => menor
// numero1 >= numero2 => maior ou igual
// numero1 <= numero2 => menor ou igual
// numero1 == numero2 => igual
// numero1 === numero2 => igual em valor e tipo
// !(numero1 == numero2) => diferente
// numero1 != numero2 => diferente
// numero1 !== numero2 => diferente valor e tipo


let tpOperacao = "MULT";

let valor1 = 800; // horas trabalhadas
let valor2 = 60; // valor Hora

let bonus = valor1 >= 60; // 25% salário

if (valor1 <= 1000 && valor2 <= 1000) { // validação
    
    if (tpOperacao == "SOMA") {
        console.log("Soma de " + valor1 + " + " + valor2 + " é igual a " + (valor1 + valor2) + ".")
    }

    else if (tpOperacao == "SUBT") {
        console.log("Subtração de " + valor1 + " - " + valor2 + " é igual a " + (valor1 - valor2) + ".")
    }

    else if (tpOperacao == "MULT" && !bonus) {
        console.log("Multiplicação de " + valor1 + " x " + valor2 + " é igual a " + (valor1 * valor2) + ".")
    }

    else if (tpOperacao == "MULT" && bonus) {
        console.log("Multiplicação de " + valor1 + " x " + valor2 + " + bônus de 25% é igual a " + (valor1 * valor2 * 1.25) + ".")
    }

    else {
        console.log("Divisão de " + valor1 + " / " + valor2 + " é igual a " + (valor1 / valor2) + ".")
    }

};


let nota = 50;

if (nota >= 90) {
    console.log("Aprovado com mérito")
}
else if (nota >= 70) {
    console.log("Aprovado")
}
else {
    console.log("Reprovado")
}