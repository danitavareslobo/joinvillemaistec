function contarImpares(numero) {
    let contador = 0;
    
    for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
            contador++;
        }
    }
    
    return contador;
}

let numero = prompt("Digite um número inteiro:");

numero = parseInt(numero);

if (isNaN(numero) || numero < 1) {
    console.log("Por favor, digite um número inteiro válido maior que 0!");
} else {
    let quantidadeImpares = contarImpares(numero);
    
    console.log(`Até o número ${numero}, existem ${quantidadeImpares} números ímpares.`);
    
    let impares = [];
    for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
            impares.push(i);
        }
    }
    console.log(`Os números ímpares são: ${impares.join(', ')}`);
}