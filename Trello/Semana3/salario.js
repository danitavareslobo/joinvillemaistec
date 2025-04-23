let nome = "João";
let setor = "AD";
let horasTrab = 300;
let valorHora = 50;

// Horas extras acima de 220h;
// [OP] - sem mudança de cálculo;
// [AD] - salário base 10% maior;
// [GE] - salário base 25% maior, mas não possui horas extras;

let salarioBase = 220 * valorHora;
let salarioAjustado = calculoSalario(salarioBase, setor);

let horasExtras = 0;
let valorHorasExtras = 0;

if (horasTrab > 220 && setor != "GE") {
    horasExtras = horasTrab - 220;
    valorHorasExtras = horasExtras * (valorHora * 1.5);
}

let salarioTotal = salarioAjustado;
if (setor != "GE") {
    salarioTotal += valorHorasExtras;
}

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


function calculoSalario(pSalario, pSetor) {
    if (pSetor == "AD") {
        return pSalario * 1.10;
    }
    if (pSetor == "GE") {
        return pSalario * 1.25;
    }
    else {
        return pSalario;
    }
}

function nomeSetor(pSetor) {
    if (pSetor == "AD") {
        return "Administrativo";
    }
    if (pSetor == "GE") {
        return "Gerência";
    }
    else {
        return "Operacional";
    }
}

let mensagem = "O funcionário " + nome + " do setor " + nomeSetor(setor) + 
               " receberá R$ " + salarioAjustado + " referente ao seu salário base (220h).";

if (setor == "GE") {
    mensagem += " Totalizando assim, um recebimento de R$ " + salarioAjustado + ".";
} 

else {
    let horasExtras = 0;
    let valorHorasExtras = 0;
    
    if (horasTrab > 220) {
        horasExtras = horasTrab - 220;
        valorHorasExtras = horasExtras * (valorHora * 1.5);
        mensagem += " Mais R$ " + valorHorasExtras + 
                   " referente às suas horas extras, que foram " + horasExtras + "h.";
    }
    
    mensagem += " Totalizando assim, um recebimento de R$ " + salarioTotal + ".";
}

console.log(mensagem);
