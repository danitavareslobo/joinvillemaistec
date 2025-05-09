// FOR
// let numero = prompt("Informe o número para a tabuada: ");
// console.log("Tabuada do ", numero);

// for(let i = 1; i <= 10; i++){
//     console.log(i, " x ", numero, " = ", numero*i);
// }

// WHILE / DO WHILE

/*let numero = prompt("Informe o número para a tabuada: ");
console.log("Tabuada do ", numero);

let contador = 1;
console.log("Contagem do While");

while(contador <= 10){
    console.log(numero, " x ", contador, " = ", numero*contador);
    contador++;
}*/

/*let numero = prompt("Informe o número para a tabuada: ");
console.log("Tabuada do ", numero);

contador = 1;
console.log("Contagem do Do While");
do{
    console.log(numero, " x ", contador, " = ", numero*contador);
    contador++;
} while(contador <= 10)*/ 

let numero = prompt("Informe o número para verificar se seus antecessores são ímpar ou par: ");

let contador = 1;

while(contador <= numero){
    let texto = "";
    if(contador%2 == 0){
        texto = "par"
    }
    else{
        texto = "impar"
    }
    console.log("O número ", contador, " é ", texto, ".");
    contador++;
}