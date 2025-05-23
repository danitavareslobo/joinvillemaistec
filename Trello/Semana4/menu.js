const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;

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

function contarImpares(numero) {
    let contador = 0;
    
    for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
            contador++;
        }
    }
    
    return contador;
}

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

function exibirMenu() {
    return `
            MENU PRINCIPAL            
═══════════════════════════════════════
[1] Somar dois números                
[2] Subtrair dois números             
[3] Buscar quantidade números pares   
[4] Buscar quantidade números ímpares 
[5] Buscar quantidade números primos  
[6] Sair                              
    `;
}

function executarPrograma() {
    let opcao;
    
    do {
        opcao = prompt(exibirMenu() + "\nEscolha uma opção (1-6):");
        
        switch (opcao) {
            case "1":
                let num1Soma = parseFloat(prompt("Digite o primeiro número:"));
                let num2Soma = parseFloat(prompt("Digite o segundo número:"));
                
                if (isNaN(num1Soma) || isNaN(num2Soma)) {
                    alert("Por favor, digite números válidos!");
                } else {
                    let resultadoSoma = soma(num1Soma, num2Soma);
                    alert(`Resultado: ${num1Soma} + ${num2Soma} = ${resultadoSoma}`);
                    console.log(`Soma: ${num1Soma} + ${num2Soma} = ${resultadoSoma}`);
                }
                break;
                
            case "2":
                let num1Sub = parseFloat(prompt("Digite o primeiro número:"));
                let num2Sub = parseFloat(prompt("Digite o segundo número:"));
                
                if (isNaN(num1Sub) || isNaN(num2Sub)) {
                    alert("Por favor, digite números válidos!");
                } else {
                    let resultadoSub = subtracao(num1Sub, num2Sub);
                    alert(`Resultado: ${num1Sub} - ${num2Sub} = ${resultadoSub}`);
                    console.log(`Subtração: ${num1Sub} - ${num2Sub} = ${resultadoSub}`);
                }
                break;
                
            case "3":
                let numPares = parseInt(prompt("Digite um número inteiro:"));
                
                if (isNaN(numPares) || numPares < 1) {
                    alert("Por favor, digite um número inteiro válido maior que 0!");
                } else {
                    let qtdPares = contarPares(numPares);
                    alert(`Até o número ${numPares}, existem ${qtdPares} números pares.`);
                    console.log(`Números pares até ${numPares}: ${qtdPares}`);
                }
                break;
                
            case "4":
                let numImpares = parseInt(prompt("Digite um número inteiro:"));
                
                if (isNaN(numImpares) || numImpares < 1) {
                    alert("Por favor, digite um número inteiro válido maior que 0!");
                } else {
                    let qtdImpares = contarImpares(numImpares);
                    alert(`Até o número ${numImpares}, existem ${qtdImpares} números ímpares.`);
                    console.log(`Números ímpares até ${numImpares}: ${qtdImpares}`);
                }
                break;
                
            case "5":
                let numPrimos = parseInt(prompt("Digite um número inteiro:"));
                
                if (isNaN(numPrimos) || numPrimos < 2) {
                    alert("Por favor, digite um número inteiro válido maior ou igual a 2!");
                } else {
                    let qtdPrimos = contarPrimos(numPrimos);
                    alert(`Até o número ${numPrimos}, existem ${qtdPrimos} números primos.`);
                    console.log(`Números primos até ${numPrimos}: ${qtdPrimos}`);
                }
                break;
                
            case "6":
                alert("Obrigado por usar o programa! Até logo!");
                console.log("Programa encerrado.");
                break;
                
            default:
                alert("Opção inválida! Por favor, escolha uma opção de 1 a 6.");
                break;
        }
        
    } while (opcao !== "6");
}

executarPrograma();