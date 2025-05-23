function contarPrimos(numero) {
    let contador = 0;
    
    for (let i = 2; i <= numero; i++) {
        let ehPrimo = true;
        
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                ehPrimo = false;
                break; 
            }
        }
        
        if (ehPrimo) {
            contador++;
        }
    }
    
    return contador;
}

let numero = prompt("Digite um número inteiro:");

numero = parseInt(numero);

if (isNaN(numero) || numero < 0) {
    console.log("Por favor, digite um número inteiro válido!");
} else {
    let quantidadePrimos = contarPrimos(numero);
    
    console.log(`Até o número ${numero}, existem ${quantidadePrimos} números primos.`);
    
    if (numero >= 2) {
        let primos = [];
        for (let i = 2; i <= numero; i++) {
            let ehPrimo = true;
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    ehPrimo = false;
                    break;
                }
            }
            if (ehPrimo) {
                primos.push(i);
            }
        }
        console.log(`Os números primos são: ${primos.join(', ')}`);
    }
}