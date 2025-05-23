// Menu
// Função Base de verificação (primos, pares e impares)
// Arrows functions das verificações

let continuar = true;

while(continuar){
    console.log("MENU DOS EXERCÍCIOS\n[1] Verificar quantos números primos existem até: \n[2] Verificar quantos números pares existem até: \n[3] Verificar quantos números impares existem até: \n[4] Sair");
    let opcao = prompt("Escolha sua opção: ");

    if(opcao === "4"){
        console.log("Finalizando sistema...");
        continuar = false;
    }

    switch(opcao){
        case "1":
            buscaNumerosPrimos();
            break;
        case "2":
            // par
            break;
        case "3":
            // impar
            break;
        default:
            console.log("Opção inválida")
    }
};

function buscaNumerosPrimos(){
    let numPrimo = parseInt(prompt("Digite o número para operação de verificação: "));
    let qtdadeNumerosPrimos = 0;
    let contagem = 2;

    while(contagem <= numPrimo){ // contagem é o sequencial
        // comparações - é divisível somente por 1 e por ele mesmo
        // verificar contagem%[squencialdenumeros] = 0

        let primo = true;

        for(let i = 1; i <= contagem; i++){
            if(contagem%i == 0 && i != 1 && i != contagem){
                primo = false;
                break;
            }
        } 

        if(primo){
            //quantidade
            qtdadeNumerosPrimos++
        }
        contagem++;
    }

    console.log("Número informado: " + primo + ", a quantidade de números primos é de: " + qtdadeNumerosPrimos);
}