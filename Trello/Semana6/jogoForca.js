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
let jogoTerminado = false;

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

function verificarVitoria() {
    const palavraCompleta = !palavraAtual.includes('_');
    
    if (palavraCompleta) {
        jogoTerminado = true;
        mostrarVitoriaComNome(); 
        return true;
    }
    
    return false;
}

function mostrarVitoriaComNome() {
    const nomeJogador = getPlayerNameFromStorage();
    
    const mensagem = `🎉 PARABÉNS, ${nomeJogador.toUpperCase()}! 🎉\nVocê descobriu a palavra "${palavraEscolhida}"!\nTentativas utilizadas: ${letrasJaTentadas.length}`;
    
    console.log('=== VITÓRIA! ===');
    console.log(`Jogador: ${nomeJogador}`);
    console.log(`Palavra: ${palavraEscolhida}`);
    console.log(`Tentativas: ${letrasJaTentadas.length}`);
    console.log('================');
    
    mostrarMensagem(mensagem, 'vitoria');
    
    desabilitarControles();
    
    mostrarBotaoJogarNovamente();
    
    salvarEstatisticaVitoria();
}

function salvarEstatisticaVitoria() {
    try {
        const nomeJogador = getPlayerNameFromStorage();
        const estatisticas = JSON.parse(localStorage.getItem('hangman_stats') || '{}');
        
        if (!estatisticas[nomeJogador]) {
            estatisticas[nomeJogador] = {
                vitorias: 0,
                jogos: 0,
                ultimaVitoria: null
            };
        }
        
        estatisticas[nomeJogador].vitorias++;
        estatisticas[nomeJogador].jogos++;
        estatisticas[nomeJogador].ultimaVitoria = new Date().toISOString();
        
        localStorage.setItem('hangman_stats', JSON.stringify(estatisticas));
        
        console.log(`Estatísticas atualizadas para ${nomeJogador}:`, estatisticas[nomeJogador]);
    } catch (error) {
        console.warn('Erro ao salvar estatísticas:', error);
    }
}

function desabilitarControles() {
    const campoLetra = document.getElementById('letterInput');
    const botaoTentar = document.getElementById('guessButton');
    
    if (campoLetra) {
        campoLetra.disabled = true;
    }
    
    if (botaoTentar) {
        botaoTentar.disabled = true;
    }
}

function habilitarControles() {
    const campoLetra = document.getElementById('letterInput');
    const botaoTentar = document.getElementById('guessButton');
    
    if (campoLetra) {
        campoLetra.disabled = false;
        campoLetra.focus();
    }
    
    if (botaoTentar) {
        botaoTentar.disabled = false;
    }
}

function mostrarBotaoJogarNovamente() {
    const botaoReiniciar = document.getElementById('resetButton');
    
    if (botaoReiniciar) {
        botaoReiniciar.style.display = 'inline-block';
    } else {
        console.log('💡 Para jogar novamente, digite: reiniciarJogo()');
    }
}

function esconderBotaoJogarNovamente() {
    const botaoReiniciar = document.getElementById('resetButton');
    
    if (botaoReiniciar) {
        botaoReiniciar.style.display = 'none';
    }
}

function processarLetra(letra) {
    if (jogoTerminado) {
        mostrarMensagem('O jogo já terminou! Clique em "Jogar Novamente" para reiniciar.', 'aviso');
        return false;
    }
    
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
        
        if (verificarVitoria()) {
            return true; 
        }
        
    } else {
        letrasErradas.push(letraValida);
        mostrarMensagem(`A letra "${letraValida}" não está na palavra.`, 'erro');
        console.log(`Letra errada: ${letraValida}`);
    }
    
    atualizarInterface();
    
    const campoLetra = document.getElementById('letterInput');
    if (campoLetra && !jogoTerminado) {
        campoLetra.value = '';
        campoLetra.focus();
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
    console.log(`Jogador: ${getPlayerNameFromStorage()}`);
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
        
        let classeCSS = 'message';
        switch(tipo) {
            case 'vitoria':
                classeCSS += ' win';
                break;
            case 'sucesso':
                classeCSS += ' success';
                break;
            case 'erro':
                classeCSS += ' error';
                break;
            case 'aviso':
                classeCSS += ' warning';
                break;
            default:
                classeCSS += ` ${tipo}`;
        }
        
        elementoMensagem.className = classeCSS;
        
        if (tipo !== 'vitoria') {
            setTimeout(() => {
                if (elementoMensagem.textContent === texto) {
                    elementoMensagem.textContent = '';
                    elementoMensagem.className = 'message';
                }
            }, 3000);
        }
    }
}

function inicializarJogo() {
    if (!isPlayerLoggedIn()) {
        console.warn('Nenhum jogador logado! Redirecionando para login...');
        return;
    }
    
    const nomeJogador = getPlayerNameFromStorage();
    console.log(`=== INICIANDO JOGO DA FORCA ===`);
    console.log(`Jogador: ${nomeJogador}`);
    
    letrasCorretas = [];
    letrasErradas = [];
    letrasJaTentadas = [];
    jogoTerminado = false;
    
    sortearPalavra();
    
    prepararExibicaoPalavra();
    
    atualizarInterface();
    
    habilitarControles();
    
    esconderBotaoJogarNovamente();
    
    const elementoMensagem = document.getElementById('message');
    if (elementoMensagem) {
        elementoMensagem.textContent = `${nomeJogador}, digite uma letra para começar!`;
        elementoMensagem.className = 'message';
    }
    
    console.log('=== JOGO INICIALIZADO ===');
    console.log(`${nomeJogador}, digite uma letra para começar!`);
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
    
    const botaoReiniciar = document.getElementById('resetButton');
    if (botaoReiniciar) {
        botaoReiniciar.addEventListener('click', function() {
            console.log('=== REINICIANDO JOGO ===');
            inicializarJogo();
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Jogo da Forca carregado! Aguardando login...');
    
    const gameScreen = document.getElementById('gameScreen');
    if (gameScreen && gameScreen.style.display !== 'none') {
        configurarEventos();
    }
});

function tentarLetra(letra) {
    return processarLetra(letra);
}

function reiniciarJogo() {
    console.log('=== REINICIANDO JOGO ===');
    inicializarJogo();
}

function obterEstatisticasJogador() {
    try {
        const nomeJogador = getPlayerNameFromStorage();
        const estatisticas = JSON.parse(localStorage.getItem('hangman_stats') || '{}');
        
        return estatisticas[nomeJogador] || {
            vitorias: 0,
            jogos: 0,
            ultimaVitoria: null
        };
    } catch (error) {
        console.warn('Erro ao obter estatísticas:', error);
        return { vitorias: 0, jogos: 0, ultimaVitoria: null };
    }
}

function mostrarEstatisticas() {
    const nomeJogador = getPlayerNameFromStorage();
    const stats = obterEstatisticasJogador();
    
    console.log(`=== ESTATÍSTICAS DE ${nomeJogador.toUpperCase()} ===`);
    console.log(`Vitórias: ${stats.vitorias}`);
    console.log(`Jogos: ${stats.jogos}`);
    console.log(`Taxa de vitória: ${stats.jogos > 0 ? ((stats.vitorias / stats.jogos) * 100).toFixed(1) : 0}%`);
    if (stats.ultimaVitoria) {
        console.log(`Última vitória: ${new Date(stats.ultimaVitoria).toLocaleString()}`);
    }
    console.log('=====================================');
}