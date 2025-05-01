document.addEventListener('DOMContentLoaded', function() {
    const temaArmazenado = localStorage.getItem('temaReflorestamento');
    if (temaArmazenado) {
        document.body.className = temaArmazenado;
    }
    
    const dadosFicticios = [
        {
            idUsuario: 'maria_silva',
            nomeUsuario: 'Maria Silva',
            quantidade: 50,
            especie: 'ipe',
            especieFormatada: 'Ipê',
            data: '2024-04-15',
            local: 'Parque Municipal',
            dataCadastro: '2024-04-16T10:30:00Z'
        },
        {
            idUsuario: 'joao_santos',
            nomeUsuario: 'João Santos',
            quantidade: 30,
            especie: 'angico',
            especieFormatada: 'Angico',
            data: '2024-04-10',
            local: 'Margem do Rio Verde',
            dataCadastro: '2024-04-11T08:45:00Z'
        },
        {
            idUsuario: 'ana_oliveira',
            nomeUsuario: 'Ana Oliveira',
            quantidade: 100,
            especie: 'aroeira',
            especieFormatada: 'Aroeira',
            data: '2024-04-05',
            local: 'Área de Preservação',
            dataCadastro: '2024-04-05T14:20:00Z'
        },
        {
            idUsuario: 'carlos_ferreira',
            nomeUsuario: 'Carlos Ferreira',
            quantidade: 25,
            especie: 'jequitiba',
            especieFormatada: 'Jequitibá',
            data: '2024-04-01',
            local: 'Fazenda Esperança',
            dataCadastro: '2024-04-01T16:15:00Z'
        },
        {
            idUsuario: 'maria_silva',
            nomeUsuario: 'Maria Silva',
            quantidade: 40,
            especie: 'peroba-campo',
            especieFormatada: 'Peroba do Campo',
            data: '2024-03-28',
            local: 'Serra do Sol',
            dataCadastro: '2024-03-29T09:10:00Z'
        },
        {
            idUsuario: 'ana_oliveira',
            nomeUsuario: 'Ana Oliveira',
            quantidade: 60,
            especie: 'ipe',
            especieFormatada: 'Ipê',
            data: '2024-03-25',
            local: 'Escola Municipal',
            dataCadastro: '2024-03-25T11:35:00Z'
        },
        {
            idUsuario: 'pedro_santos',
            nomeUsuario: 'Pedro Santos',
            quantidade: 35,
            especie: 'angico',
            especieFormatada: 'Angico',
            data: '2024-03-20',
            local: 'Reserva Florestal',
            dataCadastro: '2024-03-21T13:45:00Z'
        },
        {
            idUsuario: 'lucia_costa',
            nomeUsuario: 'Lucia Costa',
            quantidade: 75,
            especie: 'aroeira',
            especieFormatada: 'Aroeira',
            data: '2024-03-15',
            local: 'Nascente do Córrego',
            dataCadastro: '2024-03-16T10:25:00Z'
        }
    ];

    const acoesSalvas = JSON.parse(localStorage.getItem('acoesReflorestamento')) || [];
    
    let todasAcoes = [...dadosFicticios];
    
    if (acoesSalvas.length > 0) {
        const acoesFormatadas = acoesSalvas.map(acao => {
            let especieFormatada = 'Desconhecida';
            
            switch(acao.especie) {
                case 'ipe': especieFormatada = 'Ipê'; break;
                case 'angico': especieFormatada = 'Angico'; break;
                case 'aroeira': especieFormatada = 'Aroeira'; break;
                case 'jequitiba': especieFormatada = 'Jequitibá'; break;
                case 'peroba-campo': especieFormatada = 'Peroba do Campo'; break;
            }
            
            const usuarioSalvo = JSON.parse(localStorage.getItem('usuarioReflorestamento')) || {};
            const nomeUsuario = usuarioSalvo.nome || 'Usuário';
            
            return {...acao, especieFormatada, nomeUsuario};
        });
        
        todasAcoes = [...todasAcoes, ...acoesFormatadas];
    }
    
    const searchForm = document.getElementById('search-form');
    const resultsBody = document.getElementById('results-body');
    const resultsSummary = document.getElementById('results-summary');
    const noResults = document.getElementById('no-results');
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const usuarioBusca = document.getElementById('usuario').value.toLowerCase();
        const especieBusca = document.getElementById('especie').value;
        
        const resultados = todasAcoes.filter(acao => {
            const usuarioMatch = usuarioBusca === '' || 
                                acao.nomeUsuario.toLowerCase().includes(usuarioBusca) || 
                                (acao.idUsuario && acao.idUsuario.toLowerCase().includes(usuarioBusca));
            
            const especieMatch = especieBusca === '' || acao.especie === especieBusca;
            
            return usuarioMatch && especieMatch;
        });
        
        mostrarResultados(resultados);
    });
    
    function mostrarResultados(resultados) {
        resultsBody.innerHTML = '';
        
        if (resultados.length === 0) {
            noResults.style.display = 'block';
            resultsSummary.textContent = 'Nenhum resultado encontrado para os filtros selecionados.';
            return;
        }
        
        noResults.style.display = 'none';
        
        resultados.forEach(acao => {
            const row = document.createElement('tr');
            
            const dataPlantio = new Date(acao.data);
            const dataFormatada = dataPlantio.toLocaleDateString('pt-BR');
            
            row.innerHTML = `
                <td>${acao.nomeUsuario || 'Usuário'}</td>
                <td>${acao.especieFormatada}</td>
                <td>${acao.quantidade}</td>
                <td>${acao.local}</td>
                <td>${dataFormatada}</td>
            `;
            
            resultsBody.appendChild(row);
        });
        
        const totalArvores = resultados.reduce((total, acao) => total + acao.quantidade, 0);
        resultsSummary.textContent = `Encontrados ${resultados.length} registros, totalizando ${totalArvores} árvores plantadas.`;
    }
     
    const navUserName = document.getElementById('nav-user-name');
    const navAvatar = document.getElementById('nav-avatar');
    
    const usuarioSalvo = localStorage.getItem('usuarioReflorestamento');
    
    if (usuarioSalvo) {
        const usuario = JSON.parse(usuarioSalvo);
        navUserName.textContent = usuario.nome.split(' ')[0]; 
        navAvatar.alt = `Avatar de ${usuario.nome}`;
    }
});