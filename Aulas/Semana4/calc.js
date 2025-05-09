console.log("Calculadora FuturoDev");

let opcao = 0;

do{
    console.log("[1] Soma \n[2] Subtração \n[3] Multiplicação \n[4] Divisão \n[5] Sair");
    opcao = prompt("Escolha a opção desejada: ")

    switch(opcao){
        case "1": 
            Soma();
            break;
        case "2":
            Subtracao();
            break;
        case "3":
            Multiplicacao();
            break;
        case "4":
            Divisao();
            break;
        case "5":
            console.log("Finalizando aplicação ... ");
            break; 
        default:
            console.log("Opção inválida!");
    }
}while(opcao != 5);

function Soma(){
    let num1 = parseInt(prompt("Digite o primeiro número da soma(+): "));
    let num2 = parseInt(prompt("Digite o segundo número da soma(+): "));

    console.log(num1 + "+" + num2 + "=" + (num1+num2));
}

function Subtracao(){
    let num1 = parseInt(prompt("Digite o primeiro número da subtração(-): "));
    let num2 = parseInt(prompt("Digite o segundo número da subtração(-): "));

    console.log(num1 + "-" + num2 + "=" + (num1-num2));
}

function Multiplicacao(){
    let num1 = parseInt(prompt("Digite o primeiro número da multiplicação(*): "));
    let num2 = parseInt(prompt("Digite o segundo número da multiplicação(*): "));

    console.log(num1 + "*" + num2 + "=" + (num1*num2));
}

function Divisao(){
    let num1 = parseInt(prompt("Digite o primeiro número da divisão(/): "));
    let num2 = 0;

    do{
        num2 = parseInt(prompt("Digite o segundo número da divisão(/): "));

        if(num2 == 0){
            console.log("Impossível realizar a divisão por zero, escolha outro número.")
        }
    }while(num2 == 0);
    
    console.log(num1 + "/" + num2 + "=" + (num1/num2));
}