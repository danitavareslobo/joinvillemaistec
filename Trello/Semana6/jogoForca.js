const palavras = [
    'ABACAXI', 'BANANA', 'CACHORRO', 'DINOSSAURO', 'ELEFANTE',
    'FUTEBOL', 'GUITARRA', 'HOSPITAL', 'IGUANA', 'JANGADA',
    'KARATE', 'LARANJA', 'MARTELO', 'NOTEBOOK', 'OCEANO',
    'PINGUIM', 'QUADRADO', 'ROBOTICA', 'SANFONA', 'TIGRE',
    'UNIVERSO', 'VIOLINO', 'WHISKY', 'XADREZ', 'YOGA',
    'ZEBRA', 'CHOCOLATE', 'DRAGAO', 'FANTASIA', 'GIRAFA'
];

let palavraEscolhida = '';
let tamanhoPalavra = 0;

function sortearPalavra() {
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    palavraEscolhida = palavras[indiceAleatorio];
    tamanhoPalavra = palavraEscolhida.length;
    
    console.log(`Palavra sorteada: ${palavraEscolhida}`);
    console.log(`Tamanho da palavra: ${tamanhoPalavra} letras`);
    
    return palavraEscolhida;
}

function prepararExibicaoPalavra() {
    let espacosPalavra = '';
    
    for (let i = 0; i < tamanhoPalavra; i++) {
        espacosPalavra += '_ ';
    }
    
    espacosPalavra = espacosPalavra.trim();
    
    console.log(`Exibição inicial: ${espacosPalavra}`);
    
    const elementoPalavra = document.getElementById('wordDisplay');
    if (elementoPalavra) {
        elementoPalavra.textContent = espacosPalavra;
    }
    
    return espacosPalavra;
}

function inicializarJogo() {
    console.log('=== INICIANDO JOGO DA FORCA ===');
    console.log(`Total de palavras disponíveis: ${palavras.length}`);
    
    sortearPalavra();
    
    prepararExibicaoPalavra();
    
    console.log('=== JOGO INICIALIZADO ===');
}

function mostrarInformacoesPalavras() {
    console.log('=== INFORMAÇÕES DAS PALAVRAS ===');
    console.log(`Total de palavras: ${palavras.length}`);
    
    const palavrasPorTamanho = {};
    palavras.forEach(palavra => {
        const tamanho = palavra.length;
        if (!palavrasPorTamanho[tamanho]) {
            palavrasPorTamanho[tamanho] = [];
        }
        palavrasPorTamanho[tamanho].push(palavra);
    });
    
    console.log('Distribuição por tamanho:');
    Object.keys(palavrasPorTamanho).sort().forEach(tamanho => {
        console.log(`${tamanho} letras: ${palavrasPorTamanho[tamanho].length} palavras`);
        console.log(`  Exemplos: ${palavrasPorTamanho[tamanho].slice(0, 3).join(', ')}`);
    });
    
    const tamanhos = palavras.map(p => p.length);
    const menorTamanho = Math.min(...tamanhos);
    const maiorTamanho = Math.max(...tamanhos);
    
    console.log(`Palavra mais curta: ${menorTamanho} letras`);
    console.log(`Palavra mais longa: ${maiorTamanho} letras`);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada! Pronto para inicializar o jogo.');
    
    mostrarInformacoesPalavras();
    
    inicializarJogo();
});

function testarSorteio(quantidade = 5) {
    console.log(`=== TESTANDO ${quantidade} SORTEIOS ===`);
    
    for (let i = 1; i <= quantidade; i++) {
        console.log(`\nTeste ${i}:`);
        sortearPalavra();
        prepararExibicaoPalavra();
    }
}