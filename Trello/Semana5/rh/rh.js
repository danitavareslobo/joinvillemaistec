const funcionarios = [
    {
        nome: "Ana Silva Santos",
        setor: "Comercial",
        cargo: "Gerente de Vendas",
        salario: 8500.00
    },
    {
        nome: "Carlos Eduardo Lima",
        setor: "TI",
        cargo: "Desenvolvedor Senior",
        salario: 9200.00
    },
    {
        nome: "Mariana Costa Oliveira",
        setor: "RH",
        cargo: "Analista de Recursos Humanos",
        salario: 6500.00
    },
    {
        nome: "Rafael Pereira",
        setor: "Financeiro",
        cargo: "Contador",
        salario: 7800.00
    },
    {
        nome: "Juliana Fernandes",
        setor: "Marketing",
        cargo: "Coordenadora de Marketing",
        salario: 7200.00
    },
    {
        nome: "Pedro Henrique Alves",
        setor: "TI",
        cargo: "Analista de Sistemas",
        salario: 6800.00
    },
    {
        nome: "Letícia Rodrigues",
        setor: "Comercial",
        cargo: "Vendedora",
        salario: 4500.00
    },
    {
        nome: "Bruno Machado",
        setor: "TI",
        cargo: "Técnico em TI",
        salario: 5200.00
    },
    {
        nome: "Camila Sousa",
        setor: "RH",
        cargo: "Assistente de RH",
        salario: 3800.00
    },
    {
        nome: "Ricardo Santos",
        setor: "Financeiro",
        cargo: "Analista Financeiro",
        salario: 6200.00
    },
    {
        nome: "Fernanda Ribeiro",
        setor: "Marketing",
        cargo: "Designer Gráfico",
        salario: 5500.00
    },
    {
        nome: "João Paulo Costa",
        setor: "Comercial",
        cargo: "Supervisor de Vendas",
        salario: 6800.00
    },
    {
        nome: "Priscila Martins",
        setor: "RH",
        cargo: "Gerente de RH",
        salario: 9500.00
    },
    {
        nome: "Diego Almeida",
        setor: "TI",
        cargo: "Coordenador de TI",
        salario: 10200.00
    },
    {
        nome: "Tatiana Gonçalves",
        setor: "Marketing",
        cargo: "Analista de Marketing Digital",
        salario: 5800.00
    }
];

let funcionariosFiltrados = [...funcionarios];
let tabelaVisivel = false;

function formatarSalario(salario) {
    return `R$ ${salario.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function obterClasseSetor(setor) {
    const classes = {
        'Comercial': 'setor-comercial',
        'RH': 'setor-rh',
        'TI': 'setor-ti',
        'Financeiro': 'setor-financeiro',
        'Marketing': 'setor-marketing'
    };
    return classes[setor] || 'setor-default';
}

function renderizarTabela(dados = funcionariosFiltrados) {
    const tbody = document.getElementById('tbody-funcionarios');
    
    if (dados.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 30px; color: #666;">
                    <em>Nenhum funcionário encontrado com os filtros aplicados.</em>
                </td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = dados.map((funcionario, index) => `
        <tr style="animation: fadeInRow 0.3s ease-out ${index * 0.1}s both;">
            <td><strong>${funcionario.nome}</strong></td>
            <td>
                <span class="setor-badge ${obterClasseSetor(funcionario.setor)}">
                    ${funcionario.setor}
                </span>
            </td>
            <td class="cargo">${funcionario.cargo}</td>
            <td class="salario">${formatarSalario(funcionario.salario)}</td>
            <td>
                <button class="btn-acao" onclick="verDetalhes('${funcionario.nome}')">
                    Ver Detalhes
                </button>
            </td>
        </tr>
    `).join('');
    
    if (!document.querySelector('#fadeInRowStyle')) {
        const style = document.createElement('style');
        style.id = 'fadeInRowStyle';
        style.textContent = `
            @keyframes fadeInRow {
                from { opacity: 0; transform: translateX(-20px); }
                to { opacity: 1; transform: translateX(0); }
            }
        `;
        document.head.appendChild(style);
    }
}

function calcularEstatisticas(dados = funcionariosFiltrados) {
    const totalFuncionarios = dados.length;
    const mediaSalarial = dados.length > 0 
        ? dados.reduce((acc, func) => acc + func.salario, 0) / dados.length 
        : 0;
    const setoresUnicos = [...new Set(dados.map(func => func.setor))].length;
    
    document.getElementById('total-funcionarios').textContent = totalFuncionarios;
    document.getElementById('media-salarial').textContent = formatarSalario(mediaSalarial);
    document.getElementById('setores-ativos').textContent = setoresUnicos;
}

function filtrarDados() {
    const filtroSetor = document.getElementById('filtro-setor').value;
    const buscaNome = document.getElementById('busca-nome').value.toLowerCase();
    
    funcionariosFiltrados = funcionarios.filter(funcionario => {
        const matchSetor = !filtroSetor || funcionario.setor === filtroSetor;
        const matchNome = !buscaNome || funcionario.nome.toLowerCase().includes(buscaNome);
        return matchSetor && matchNome;
    });
    
    renderizarTabela(funcionariosFiltrados);
    calcularEstatisticas(funcionariosFiltrados);
}

function mostrarTabela() {
    const tabelaSection = document.getElementById('tabela-section');
    const btnOcultar = document.getElementById('btn-ocultar');
    const btnVerCargos = document.getElementById('btn-ver-cargos');
    
    tabelaSection.style.display = 'block';
    btnOcultar.style.display = 'inline-block';
    btnVerCargos.textContent = '📊 Tabela Carregada';
    btnVerCargos.disabled = true;
    btnVerCargos.style.opacity = '0.7';
    
    tabelaVisivel = true;
    
    funcionariosFiltrados = [...funcionarios];
    renderizarTabela();
    calcularEstatisticas();
    
    setTimeout(() => {
        tabelaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
    
    exibirNotificacao('Tabela de funcionários carregada com sucesso! 📋', 'sucesso');
}

function ocultarTabela() {
    const tabelaSection = document.getElementById('tabela-section');
    const btnOcultar = document.getElementById('btn-ocultar');
    const btnVerCargos = document.getElementById('btn-ver-cargos');
    
    tabelaSection.style.display = 'none';
    btnOcultar.style.display = 'none';
    btnVerCargos.textContent = '👥 Ver Cargos e Salários';
    btnVerCargos.disabled = false;
    btnVerCargos.style.opacity = '1';
    
    tabelaVisivel = false;
    
    document.getElementById('filtro-setor').value = '';
    document.getElementById('busca-nome').value = '';
    
    exibirNotificacao('Tabela ocultada.', 'info');
}

function verDetalhes(nome) {
    const funcionario = funcionarios.find(f => f.nome === nome);
    if (funcionario) {
        alert(`📋 Detalhes do Funcionário

Nome: ${funcionario.nome}
Setor: ${funcionario.setor}
Cargo: ${funcionario.cargo}
Salário: ${formatarSalario(funcionario.salario)}

💼 Informações adicionais seriam exibidas em um modal ou página específica.`);
    }
}

function gerarRelatorios() {
    const relatorio = `📊 RELATÓRIO GERAL DE RH

👥 Total de Funcionários: ${funcionarios.length}

💰 Estatísticas Salariais:
• Maior salário: ${formatarSalario(Math.max(...funcionarios.map(f => f.salario)))}
• Menor salário: ${formatarSalario(Math.min(...funcionarios.map(f => f.salario)))}
• Média salarial: ${formatarSalario(funcionarios.reduce((acc, f) => acc + f.salario, 0) / funcionarios.length)}

🏢 Distribuição por Setor:
${[...new Set(funcionarios.map(f => f.setor))]
    .map(setor => {
        const count = funcionarios.filter(f => f.setor === setor).length;
        return `• ${setor}: ${count} funcionário(s)`;
    }).join('\n')}

📈 Em um sistema real, este relatório seria exportado em PDF ou Excel.`;

    alert(relatorio);
    exibirNotificacao('Relatório gerado! 📊', 'sucesso');
}

function voltarLogin() {
    if (confirm('Deseja realmente voltar à tela de login?')) {
        window.location.href = 'index.html';
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
            <span class="notificacao-icon">${tipo === 'sucesso' ? '✓' : tipo === 'info' ? 'ℹ️' : '!'}</span>
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
    const elementos = document.querySelectorAll('.welcome-card, .navegacao');
    
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
    console.log('Página RH carregada');
    console.log(`Total de funcionários cadastrados: ${funcionarios.length}`);
    
    adicionarAnimacoes();
    
    setTimeout(animarElementos, 300);
    
    const btnVerCargos = document.getElementById('btn-ver-cargos');
    const btnRelatorios = document.getElementById('btn-relatorios');
    const btnVoltar = document.getElementById('btn-voltar');
    const btnOcultar = document.getElementById('btn-ocultar');
    
    if (btnVerCargos) {
        btnVerCargos.addEventListener('click', mostrarTabela);
    }
    
    if (btnRelatorios) {
        btnRelatorios.addEventListener('click', gerarRelatorios);
    }
    
    if (btnVoltar) {
        btnVoltar.addEventListener('click', voltarLogin);
    }
    
    if (btnOcultar) {
        btnOcultar.addEventListener('click', ocultarTabela);
    }
    
    const filtroSetor = document.getElementById('filtro-setor');
    const buscaNome = document.getElementById('busca-nome');
    
    if (filtroSetor) {
        filtroSetor.addEventListener('change', filtrarDados);
    }
    
    if (buscaNome) {
        buscaNome.addEventListener('input', function() {
            clearTimeout(this.timeoutId);
            this.timeoutId = setTimeout(filtrarDados, 300);
        });
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
    
    setTimeout(() => {
        exibirNotificacao('Bem-vindo ao Portal de Recursos Humanos! 👋', 'sucesso');
    }, 1000);
    
    console.log('Estatísticas iniciais:', {
        totalFuncionarios: funcionarios.length,
        setores: [...new Set(funcionarios.map(f => f.setor))],
        mediaSalarial: funcionarios.reduce((acc, f) => acc + f.salario, 0) / funcionarios.length
    });
});