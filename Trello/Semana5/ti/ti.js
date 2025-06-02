let historicoConversoes = [];

function converterParaBinario(numero) {
    if (numero === 0) {
        return {
            binario: '0',
            processo: ['0 ÷ 2 = 0 resto 0']
        };
    }
    
    let binario = '';
    let processo = [];
    let numeroOriginal = numero;
    
    while (numero > 0) {
        let resto = numero % 2;
        let quociente = Math.floor(numero / 2);
        processo.push(`${numero} ÷ 2 = ${quociente} resto ${resto}`);
        binario = resto + binario;
        numero = quociente;
    }
    
    return {
        binario: binario,
        processo: processo
    };
}

function validarEntrada(valor) {
    const numero = parseInt(valor);
    
    if (isNaN(numero)) {
        return { valido: false, erro: 'Por favor, digite um número válido.' };
    }
    
    if (numero < 0) {
        return { valido: false, erro: 'Por favor, digite um número positivo.' };
    }
    
    if (numero > 1000000) {
        return { valido: false, erro: 'Número muito grande. Máximo permitido: 1.000.000' };
    }
    
    return { valido: true, numero: numero };
}

function exibirResultado(numeroDecimal, resultadoConversao) {
    const resultadoSection = document.getElementById('resultado-section');
    const valorDecimal = document.getElementById('valor-decimal');
    const valorBinario = document.getElementById('valor-binario');
    const explicacao = document.getElementById('explicacao');
    
    resultadoSection.style.display = 'block';
    
    valorDecimal.textContent = numeroDecimal;
    valorBinario.textContent = resultadoConversao.binario;
    
    explicacao.innerHTML = `
        <h4>🔍 Processo de Conversão:</h4>
        <p>Para converter ${numeroDecimal} para binário, dividimos sucessivamente por 2:</p>
        <div class="processo-divisao">
${resultadoConversao.processo.join('\n')}

Lendo os restos de baixo para cima: <strong>${resultadoConversao.binario}</strong>
        </div>
        <p><strong>Verificação:</strong> ${verificarConversao(numeroDecimal, resultadoConversao.binario)}</p>
    `;
    
    setTimeout(() => {
        resultadoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
}

function verificarConversao(decimal, binario) {
    let resultado = 0;
    let explicacao = '';
    
    for (let i = 0; i < binario.length; i++) {
        let bit = parseInt(binario[binario.length - 1 - i]);
        let potencia = Math.pow(2, i);
        resultado += bit * potencia;
        
        if (bit === 1) {
            explicacao += (explicacao ? ' + ' : '') + `2^${i}`;
        }
    }
    
    return `${binario}₂ = ${explicacao} = ${resultado}₁₀ ✓`;
}

function adicionarAoHistorico(decimal, binario) {
    const novaConversao = {
        decimal: decimal,
        binario: binario,
        timestamp: new Date().toLocaleTimeString()
    };
    
    historicoConversoes.unshift(novaConversao);
    
    if (historicoConversoes.length > 10) {
        historicoConversoes = historicoConversoes.slice(0, 10);
    }
    
    atualizarHistorico();
}

function atualizarHistorico() {
    const historicoLista = document.getElementById('historico-lista');
    const btnLimparHistorico = document.getElementById('btn-limpar-historico');
    
    if (historicoConversoes.length === 0) {
        historicoLista.innerHTML = '<p class="historico-vazio">Nenhuma conversão realizada ainda.</p>';
        btnLimparHistorico.style.display = 'none';
    } else {
        historicoLista.innerHTML = historicoConversoes.map(item => `
            <div class="historico-item">
                <span>${item.decimal}₁₀ → ${item.binario}₂</span>
                <small>${item.timestamp}</small>
            </div>
        `).join('');
        btnLimparHistorico.style.display = 'block';
    }
}

function limparHistorico() {
    if (confirm('Deseja realmente limpar todo o histórico?')) {
        historicoConversoes = [];
        atualizarHistorico();
        exibirNotificacao('Histórico limpo com sucesso! 🗑️', 'info');
    }
}

function limparCampos() {
    document.getElementById('numero-decimal').value = '';
    document.getElementById('resultado-section').style.display = 'none';
    document.getElementById('numero-decimal').focus();
    exibirNotificacao('Campos limpos! ✨', 'info');
}

function executarConversao() {
    const input = document.getElementById('numero-decimal');
    const valor = input.value.trim();
    
    if (!valor) {
        exibirNotificacao('Por favor, digite um número para converter.', 'erro');
        input.focus();
        return;
    }
    
    const validacao = validarEntrada(valor);
    
    if (!validacao.valido) {
        exibirNotificacao(validacao.erro, 'erro');
        input.select();
        return;
    }
    
    const numero = validacao.numero;
    const resultado = converterParaBinario(numero);
    
    exibirResultado(numero, resultado);
    
    adicionarAoHistorico(numero, resultado.binario);
    
    exibirNotificacao(`Conversão realizada: ${numero} → ${resultado.binario}₂`, 'sucesso');
}

function mostrarFerramenta(tipo) {
    const ferramentas = {
        hex: 'Conversor Hexadecimal - Converte números decimais para hexadecimal',
        base64: 'Codificador Base64 - Codifica e decodifica texto em Base64',
        hash: 'Gerador de Hash - Gera hashes MD5, SHA1, SHA256',
        ip: 'Calculadora IP - Calcula subredes e máscaras de rede'
    };
    
    const descricao = ferramentas[tipo] || 'Ferramenta não encontrada';
    alert(`🛠️ ${descricao}\n\nEsta funcionalidade estará disponível em breve!`);
}

function verMaisFerramentas() {
    alert(`🚀 Portal de Ferramentas TI

Em breve você terá acesso a:

• Conversor de Bases (Binário, Octal, Hexadecimal)
• Calculadora de Subredes IP
• Gerador de Senhas Seguras
• Validador de Expressões Regulares
• Formatador JSON/XML
• Gerador de QR Code
• Calculadora de Hash
• Conversor de Timestamps

Aguarde as próximas atualizações! 🔧`);
}

function voltarLogin() {
    if (confirm('Deseja realmente voltar à tela de login?')) {
        window.location.href = '../login/login.html';
    }
}

function exibirNotificacao(mensagem, tipo = 'sucesso') {
    const notificacaoAnterior = document.querySelector('.notificacao');
    if (notificacaoAnterior) {
        notificacaoAnterior.remove();
    }
    
    const notificacao = document.createElement('div');
    notificacao.className = `notificacao ${tipo}`;
    notificacao.innerHTML = `
        <div class="notificacao-content">
            <span class="notificacao-icon">${tipo === 'sucesso' ? '✓' : tipo === 'info' ? 'ℹ️' : '⚠️'}</span>
            <span class="notificacao-texto">${mensagem}</span>
        </div>
    `;
    
    const cores = {
        sucesso: { bg: '#d4edda', color: '#155724', border: '#c3e6cb' },
        info: { bg: '#d1ecf1', color: '#0c5460', border: '#bee5eb' },
        erro: { bg: '#f8d7da', color: '#721c24', border: '#f5c6cb' }
    };
    
    const cor = cores[tipo] || cores.sucesso;
    
    notificacao.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${cor.bg};
        color: ${cor.color};
        padding: 15px 20px;
        border-radius: 8px;
        border: 1px solid ${cor.border};
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
        max-width: 350px;
        font-weight: 500;
    `;
    
    document.body.appendChild(notificacao);
    
    setTimeout(() => {
        if (document.contains(notificacao)) {
            notificacao.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => notificacao.remove(), 300);
        }
    }, 4000);
}

function adicionarAnimacoes() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        .notificacao-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .notificacao-icon {
            font-weight: bold;
            font-size: 16px;
        }
    `;
    document.head.appendChild(style);
}

function animarElementos() {
    const elementos = document.querySelectorAll('.conversor-card, .info-card, .historico-card, .outras-ferramentas, .navegacao');
    
    elementos.forEach((elemento, index) => {
        elemento.style.opacity = '0';
        elemento.style.transform = 'translateY(20px)';
        elemento.style.transition = 'all 0.6s ease-out';
        
        setTimeout(() => {
            elemento.style.opacity = '1';
            elemento.style.transform = 'translateY(0)';
        }, 200 * (index + 1));
    });
}

function configurarEventosTeclado() {
    const input = document.getElementById('numero-decimal');
    
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            executarConversao();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            limparCampos();
        }
    });
    
    input.addEventListener('input', function(e) {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
}

function configurarDicas() {
    const input = document.getElementById('numero-decimal');
    
    input.title = 'Atalhos: Enter = Converter | Esc = Limpar';
    
    const exemplos = ['42', '128', '255', '1024', '2048'];
    let exemploIndex = 0;
    
    setInterval(() => {
        if (input.value === '' && document.activeElement !== input) {
            input.placeholder = `Digite um número (ex: ${exemplos[exemploIndex]})`;
            exemploIndex = (exemploIndex + 1) % exemplos.length;
        }
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Página TI carregada - Conversor Binário');
    
    adicionarAnimacoes();
    setTimeout(animarElementos, 300);
    configurarEventosTeclado();
    configurarDicas();
    
    const btnConverter = document.getElementById('btn-converter');
    const btnLimpar = document.getElementById('btn-limpar');
    const btnVoltar = document.getElementById('btn-voltar');
    const btnMaisFerramentas = document.getElementById('btn-mais-ferramentas');
    const btnLimparHistorico = document.getElementById('btn-limpar-historico');
    
    if (btnConverter) {
        btnConverter.addEventListener('click', executarConversao);
    }
    
    if (btnLimpar) {
        btnLimpar.addEventListener('click', limparCampos);
    }
    
    if (btnVoltar) {
        btnVoltar.addEventListener('click', voltarLogin);
    }
    
    if (btnMaisFerramentas) {
        btnMaisFerramentas.addEventListener('click', verMaisFerramentas);
    }
    
    if (btnLimparHistorico) {
        btnLimparHistorico.addEventListener('click', limparHistorico);
    }
    
    const botoes = document.querySelectorAll('button');
    botoes.forEach(botao => {
        botao.addEventListener('mouseenter', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(-2px)';
            }
        });
        
        botao.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    const input = document.getElementById('numero-decimal');
    if (input) {
        setTimeout(() => input.focus(), 500);
    }
    
    atualizarHistorico();
    
    setTimeout(() => {
        exibirNotificacao('Bem-vindo ao Portal TI! Digite um número para converter. 🚀', 'sucesso');
    }, 1000);
    
    setTimeout(() => {
        if (historicoConversoes.length === 0) {
            adicionarAoHistorico(42, '101010');
            adicionarAoHistorico(255, '11111111');
            adicionarAoHistorico(10, '1010');
        }
    }, 2000);
    
    console.log('Conversor binário inicializado com sucesso');
});