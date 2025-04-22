let nome = "Maria";
let idade = 80;
let tempoContrib = 20;
let sexo = "F"; //M ou F


function verificaIdadeAposentadoria(pIdade, pSexo, pContribuicao) {
    // F - 62 e M - 65 anos || 

    if ((pSexo == "M" && pIdade >= 65 && pContribuicao >= 20) || (pSexo == "F" && pIdade >= 62 && pContribuicao >= 15)){
        return true;
    }
    return false;
}


if (verificaIdadeAposentadoria(idade, sexo, tempoContrib)) {
    console.log(nome + " pode seguir com o pedido da aposentadoria.")
}
else {
    console.log(nome + " não pode seguir com o pedido de aposentadoria.")
}