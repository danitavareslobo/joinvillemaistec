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
let letrasCorretas = [];
let letrasErradas = [];
let letrasJaTentadas = [];
let palavraAtual = [];

function sortearPalavra() {
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    palavraEscolhida = palavras[indiceAleatorio];
    tamanhoPalavra = palavraEscolhida.length;
    
    palavraAtual = Array(tamanhoPalavra).fill('_');
    
    console.log(`Palavra sorteada: ${palavraEscolhida}`);
    console.log(`Tamanho da palavra: ${tamanhoPalavra} letras`);
    
    return palavraEscolhida;
}

function prepararExibicaoPalavra() {
    let espacosPalavra = palavraAtual.join(' ');
    
    console.log(`Exibição atual: ${espacosPalavra}`);
    
    const elementoPalavra = document.getElementById('wordDisplay');
    if (elementoPalavra) {
        elementoPalavra.textContent = espacosPalavra;
    }
    
    return espacosPalavra;
}

function validarLetra(letra) {
    letra = letra.toUpperCase();
    
    if (!/^[A-Z]$/.test(letra)) {
        mostrarMensagem('Por favor, digite apenas uma letra válida!', 'erro');
        return false;
    }
    
    if (letrasJaTentadas.includes(letra)) {
        mostrarMensagem(`Você já tentou a letra "${letra}"!`, 'aviso');
        return false;
    }
    
    return letra;
}

function processarLetra(letra) {
    const letraValida = validarLetra(letra);
    
    if (!letraValida) {
        return false;
    }
    
    letrasJaTentadas.push(letraValida);
    
    if (palavraEscolhida.includes(letraValida)) {
        letrasCorretas.push(letraValida);
        
        for (let i = 0; i < palavraEscolhida.length; i++) {
            if (palavraEscolhida[i] === letraValida) {
                palavraAtual[i] = letraValida;
            }
        }
        
        mostrarMensagem(`Boa! A letra "${letraValida}" está na palavra!`, 'sucesso');
        console.log(`Letra correta: ${letraValida}`);
        
    } else {
        letrasErradas.push(letraValida);
        mostrarMensagem(`A letra "${letraValida}" não está na palavra.`, 'erro');
        console.log(`Letra errada: ${letraValida}`);
    }
    
    atualizarInterface();
    
    const campoLetra = document.getElementById('letterInput');
    if (campoLetra) {
        campoLetra.value = '';
    }
    
    return true;
}

function atualizarInterface() {
    prepararExibicaoPalavra();
    
    const elementoCorretas = document.getElementById('correctLetters');
    if (elementoCorretas) {
        elementoCorretas.textContent = letrasCorretas.join(' ');
    }
    
    const elementoErradas = document.getElementById('wrongLetters');
    if (elementoErradas) {
        elementoErradas.textContent = letrasErradas.join(' ');
    }
    
    console.log('--- Status do Jogo ---');
    console.log(`Palavra atual: ${palavraAtual.join(' ')}`);
    console.log(`Letras corretas: ${letrasCorretas.join(', ')}`);
    console.log(`Letras erradas: ${letrasErradas.join(', ')}`);
    console.log(`Letras tentadas: ${letrasJaTentadas.join(', ')}`);
}

function mostrarMensagem(texto, tipo) {
    console.log(`[${tipo.toUpperCase()}] ${texto}`);
    
    const elementoMensagem = document.getElementById('message');
    if (elementoMensagem) {
        elementoMensagem.textContent = texto;
        elementoMensagem.className = `message ${tipo}`;
        
        setTimeout(() => {
            elementoMensagem.textContent = '';
            elementoMensagem.className = 'message';
        }, 3000);
    }
}

function inicializarJogo() {
    console.log('=== INICIANDO JOGO DA FORCA ===');
    
    letrasCorretas = [];
    letrasErradas = [];
    letrasJaTentadas = [];
    
    sortearPalavra();
    
    prepararExibicaoPalavra();
    
    atualizarInterface();
    
    console.log('=== JOGO INICIALIZADO ===');
    console.log('Digite uma letra para começar!');
}

function configurarEventos() {
    const botaoTentar = document.getElementById('guessButton');
    if (botaoTentar) {
        botaoTentar.addEventListener('click', function() {
            const campoLetra = document.getElementById('letterInput');
            if (campoLetra) {
                const letra = campoLetra.value.trim();
                if (letra) {
                    processarLetra(letra);
                } else {
                    mostrarMensagem('Digite uma letra primeiro!', 'aviso');
                }
            }
        });
    }
    
    const campoLetra = document.getElementById('letterInput');
    if (campoLetra) {
        campoLetra.addEventListener('keypress', function(evento) {
            if (evento.key === 'Enter') {
                const letra = campoLetra.value.trim();
                if (letra) {
                    processarLetra(letra);
                } else {
                    mostrarMensagem('Digite uma letra primeiro!', 'aviso');
                }
            }
        });
        
        campoLetra.addEventListener('input', function(evento) {
            evento.target.value = evento.target.value.toUpperCase().replace(/[^A-Z]/g, '');
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada! Configurando jogo da forca...');
    
    configurarEventos();
    
    inicializarJogo();
    
    console.log('Jogo configurado! Use o campo de entrada para tentar letras.');
});

function tentarLetra(letra) {
    return processarLetra(letra);
}

function reiniciarJogo() {
    console.log('=== REINICIANDO JOGO ===');
    inicializarJogo();
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
    });
}