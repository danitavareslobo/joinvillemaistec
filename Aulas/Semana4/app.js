console.log("Aplicação básica FuturoDev");

let opcao = 0;
// Construção do MENU

do{
    console.log("[1] Qual o nosso curso? \n[2] Que módulo estamos? \n[3] Quem é nosso mentor? \n[4] Quem é o monitor? \n[5] Sair");
    opcao = prompt("Escolha a opção desejada: ")

    switch(opcao){
        case "1": 
            console.log("FutudoDEV Joinville +Tec");
            break;
        case "2":
            console.log("Módulo 1: Front-End");
            break;
        case "3":
            console.log("O mentor atual é o Otto!");
            break;
        case "4":
            nomeMonitor();
            break;
        case "5":
            console.log("Finalizando aplicação ... ");
            break; 
        default:
            console.log("Opção inválida!");
    }
}while(opcao != 5);

function nomeMonitor(){
    console.log("O monitor do nosso curso é o Vanderlei!");
}

