let nome = "João";
let setor = "Rh";
let horasTrab = 300;
let valorHora = 50;

// Horas extras acima de 200h

function salarioHora(pHoras, pValorHora) {
    let horas = 0;
    let horasExtras = 0;
    
    if (pHoras > 200) {
        horas = 200;
        horasExtras = pHoras - 200;
    } 
    else {
        horas = pHoras;
    }

    return (horas * pValorHora) + (horasExtras * (pValorHora * 1.5));
}

console.log(salarioHora(horasTrab, valorHora));

console.log(nome + " vc receberá R$ " + 220*valorHora + " referente ao seu salário. Mais R$ " + (horasTrab-220)*(valorHora*1.5) + " referente às suas horas extras. Totalizando assim, um recebimento de R$ " + salarioHora(horasTrab, valorHora) + ".")















