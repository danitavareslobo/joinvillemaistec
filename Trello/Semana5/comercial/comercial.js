const produto = {
    nome: "Headphone Premium Wireless",
    preco: 899.90,
    precoOriginal: 1199.90,
    imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop&crop=center",
    imagemFallback: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjM1MCIgdmlld0JveD0iMCAwIDQwMCAzNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzUwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjEzMCIgY3k9IjE3NSIgcj0iNDAiIGZpbGw9IiM5Q0EzQUYiLz4KPGJ5Y2xlIGN4PSIyNzAiIGN5PSIxNzUiIHI9IjQwIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0xNzAgMTM1SDIzMFYyMTVIMTcwVjEzNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPHRleHQgeD0iMjAwIiB5PSIyNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SGVhZHBob25lPC90ZXh0Pgo8L3N2Zz4K",
    especificacoes: [
        "Conexão: Bluetooth 5.0",
        "Bateria: 30 horas de reprodução",
        "Cancelamento de ruído ativo",
        "Microfone integrado",
        "Garantia: 2 anos"
    ]
};

function formatarPreco(preco) {
    return `R$ ${preco.toFixed(2).replace('.', ',')}`;
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
            <span class="notificacao-icon">${tipo === 'sucesso' ? '✓' : '!'}</span>
            <span class="notificacao-texto">${mensagem}</span>
        </div>
    `;
    
    notificacao.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${tipo === 'sucesso' ? '#d4edda' : '#f8d7da'};
        color: ${tipo === 'sucesso' ? '#155724' : '#721c24'};
        padding: 15px 20px;
        border-radius: 8px;
        border: 1px solid ${tipo === 'sucesso' ? '#c3e6cb' : '#f5c6cb'};
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
        max-width: 300px;
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

function comprarProduto() {
    const mensagem = `🛒 Produto adicionado à compra!

${produto.nome}
Valor: ${formatarPreco(produto.preco)}
Desconto: ${produto.desconto}% OFF

Redirecionando para o checkout...`;

    exibirNotificacao('Produto adicionado à compra! Redirecionando...', 'sucesso');
    
    setTimeout(() => {
        alert(mensagem);
        console.log('Produto comprado:', produto);
    }, 1500);
}

function adicionarAoCarrinho() {
    const mensagem = `🛍️ Adicionado ao carrinho!

${produto.nome}
Valor: ${formatarPreco(produto.preco)}

Continue comprando ou finalize sua compra.`;

    exibirNotificacao('Produto adicionado ao carrinho!', 'sucesso');
    
    setTimeout(() => {
        alert(mensagem);
        console.log('Produto no carrinho:', produto);
    }, 1000);
}

function voltarLogin() {
    if (confirm('Deseja realmente voltar à tela de login?')) {
        window.location.href = '../login/login.html';
    }
}

function mostrarCatalogo() {
    alert('🏪 Catálogo Completo\n\nEm breve você terá acesso ao nosso catálogo completo com mais produtos incríveis!\n\nPor enquanto, confira este produto em destaque.');
    console.log('Solicitação de catálogo registrada');
}

function configurarImagemFallback() {
    const img = document.getElementById('produto-img');
    if (img) {
        img.onerror = function() {
            this.src = produto.imagemFallback;
            this.alt = 'Imagem do produto não disponível';
        };
    }
}

function animarElementos() {
    const elementos = document.querySelectorAll('.produto-card, .produto-detalhes, .navegacao');
    
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

document.addEventListener('DOMContentLoaded', function() {
    console.log('Página comercial carregada');
    
    adicionarAnimacoes();
    
    configurarImagemFallback();
    
    setTimeout(animarElementos, 300);
    
    const btnComprar = document.getElementById('btn-comprar');
    const btnCarrinho = document.getElementById('btn-carrinho');
    const btnVoltar = document.getElementById('btn-voltar');
    const btnCatalogo = document.getElementById('btn-catalogo');
    
    if (btnComprar) {
        btnComprar.addEventListener('click', comprarProduto);
    }
    
    if (btnCarrinho) {
        btnCarrinho.addEventListener('click', adicionarAoCarrinho);
    }
    
    if (btnVoltar) {
        btnVoltar.addEventListener('click', voltarLogin);
    }
    
    if (btnCatalogo) {
        btnCatalogo.addEventListener('click', mostrarCatalogo);
    }
    
    console.log('Produto carregado:', produto);
    
    const botoes = document.querySelectorAll('button');
    botoes.forEach(botao => {
        botao.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        botao.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    setTimeout(() => {
        exibirNotificacao('Bem-vindo ao setor comercial! 🎉', 'sucesso');
    }, 1000);
});