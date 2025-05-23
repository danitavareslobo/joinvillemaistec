function contarPares(numero) {
    let contador = 0;
    let i = 1; 
    
    while (i <= numero) {
        if (i % 2 === 0) {
            contador++;
        }
        i++;
    }
    
    return contador;
}

let numero = prompt("Digite um número inteiro:");

numero = parseInt(numero);

if (isNaN(numero) || numero < 1) {
    console.log("Por favor, digite um número inteiro válido maior que 0!");
} else {
    let quantidadePares = contarPares(numero);
    
    console.log(`Até o número ${numero}, existem ${quantidadePares} números pares (excluindo o 0).`);
    
    let pares = [];
    let j = 1;
    while (j <= numero) {
        if (j % 2 === 0) {
            pares.push(j);
        }
        j++;
    }
    console.log(`Os números pares são: ${pares.join(', ')}`);
}