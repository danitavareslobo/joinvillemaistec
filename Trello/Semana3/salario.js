let nome = "Joãolet nome = "João";let nome = "João";
let setor = "GE";
let horasTrab = 300;
let valorHora = 50;

// Horas extras acima de 220h;
// [OP] - sem mudança de cálculo;
// [AD] - salário base 10% maior;
// [GE] - salário base 25% maior, mas não possui horas extras;

console.log(salarioHora(horasTrab, valorHora, setor));

function salarioHora(pHoras, pValorHora, pSetor) {
    let horas = 0;
    let horasExtras = 0;

    if (pHoras > 220 && pSetor != "GE") {
        horas = 220;
        horasExtras = pHoras - 220;
    }
    else {
        horas = pHoras;
    }

    return (horas * pValorHora) + (horasExtras * (pValorHora * 1.5));
}



// console.log(nome + " vc receberá R$ " + 220*valorHora + " referente ao seu salário. Mais R$ " + (horasTrab-220)*(valorHora*1.5) + " referente às suas horas extras, que foram " + (horasTrab-220) + "h. Totalizando assim, um recebimento de R$ " + salarioHora(horasTrab, valorHora) + ".")
let setor = "GE";
let horasTrab = 300;
let valorHora = 50;

// Horas extras acima de 220h;
// [OP] - sem mudança de cálculo;
// [AD] - salário base 10% maior;
// [GE] - salário base 25% maior, mas não possui horas extras;

console.log(salarioHora(horasTrab, valorHora, setor));

function salarioHora(pHoras, pValorHora, pSetor) {
    let horas = 0;
    let horasExtras = 0;

    if (pHoras > 220 && pSetor != "GE") {
        horas = 220;
        horasExtras = pHoras - 220;
    }
    else {
        horas = pHoras;
    }

    return (horas * pValorHora) + (horasExtras * (pValorHora * 1.5));
}



// console.log(nome + " vc receberá R$ " + 220*valorHora + " referente ao seu salário. Mais R$ " + (horasTrab-220)*(valorHora*1.5) + " referente às suas horas extras, que foram " + (horasTrab-220) + "h. Totalizando assim, um recebimento de R$ " + salarioHora(horasTrab, valorHora) + ".")
let setor = "GE";
let horasTrab = 300;
let valorHora = 50;

// Horas extras acima de 220h;
// [OP] - sem mudança de cálculo;
// [AD] - salário base 10% maior;
// [GE] - salário base 25% maior, mas não possui horas extras;

console.log(salarioHora(horasTrab, valorHora, setor));

function salarioHora(pHoras, pValorHora, pSetor) {
    let horas = 0;
    let horasExtras = 0;

    if (pHoras > 220 && pSetor != "GE") {
        horas = 220;
        horasExtras = pHoras - 220;
    }
    else {
        horas = pHoras;
    }

    return (horas * pValorHora) + (horasExtras * (pValorHora * 1.5));
}



// console.log(nome + " vc receberá R$ " + 220*valorHora + " referente ao seu salário. Mais R$ " + (horasTrab-220)*(valorHora*1.5) + " referente às suas horas extras, que foram " + (horasTrab-220) + "h. Totalizando assim, um recebimento de R$ " + salarioHora(horasTrab, valorHora) + ".")
