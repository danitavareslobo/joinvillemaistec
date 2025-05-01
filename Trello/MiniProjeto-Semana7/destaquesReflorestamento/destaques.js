document.addEventListener('DOMContentLoaded', function() {
    const temaArmazenado = localStorage.getItem('temaReflorestamento');
    if (temaArmazenado) {
        document.body.className = temaArmazenado;
    }
    
    const usuariosFicticios = [
        {
            id: 'ana_silva',
            nome: 'Ana Silva',
            avatarArvore: 'pau-brasil',
            avatarImagemSrc: 'pau-brasil-avatar.svg',
            arvoresPlantadas: 1200,
            dataInicio: '2024-01-05'
        },
        {
            id: 'carlos_pereira',
            nome: 'Carlos Pereira',
            avatarArvore: 'castanheira',
            avatarImagemSrc: 'castanheira-avatar.svg',
            arvoresPlantadas: 850,
            dataInicio: '2024-01-10'
        },
        {
            id: 'mariana_santos',
            nome: 'Mariana Santos',
            avatarArvore: 'peroba-rosa',
            avatarImagemSrc: 'peroba-rosa-avatar.svg',
            arvoresPlantadas: 680,
            dataInicio: '2024-01-15'
        },
        {
            id: 'pedro_oliveira',
            nome: 'Pedro Oliveira',
            avatarArvore: 'pau-brasil',
            avatarImagemSrc: 'pau-brasil-avatar.svg',
            arvoresPlantadas: 450,
            dataInicio: '2024-02-01'
        },
        {
            id: 'julia_costa',
            nome: 'Julia Costa',
            avatarArvore: 'castanheira',
            avatarImagemSrc: 'castanheira-avatar.svg',
            arvoresPlantadas: 320,
            dataInicio: '2024-02-10'
        }
    ];

    const usuarioJSON = localStorage.getItem('usuarioReflorestamento');
    let todosUsuarios = [...usuariosFicticios];
    
    if (usuarioJSON) {
        const usuarioSalvo = JSON.parse(usuarioJSON);
        if (usuarioSalvo.arvoresPlantadas > 0) {
            todosUsuarios.push(usuarioSalvo);
        }
    }
    
    todosUsuarios.sort((a, b) => b.arvoresPlantadas - a.arvoresPlantadas);

    const destaques = todosUsuarios.slice(0, 3);
    
    const destaquesContainer = document.getElementById('destaques-container');
    destaquesContainer.innerHTML = '';
    
    destaques.forEach(usuario => {
        let estagio = 'plantada'; 
        
        if (usuario.arvoresPlantadas >= 1500) {
            estagio = 'madura';
        } else if (usuario.arvoresPlantadas >= 700) {
            estagio = 'jovem';
        } else if (usuario.arvoresPlantadas >= 300) {
            estagio = 'broto';
        } else if (usuario.arvoresPlantadas >= 100) {
            estagio = 'plantada';
        }
        
        const card = document.createElement('div');
        card.className = 'destaque-card';
        
        const dataInicio = new Date(usuario.dataInicio);
        const dataFormatada = dataInicio.toLocaleDateString('pt-BR');
        
        let avatarSrc = usuario.avatarImagemSrc;
        
        if (!avatarSrc) {
            if (usuario.avatarArvore === 'pau-brasil') {
                avatarSrc = 'pau-brasil-avatar.svg';
            } else if (usuario.avatarArvore === 'castanheira') {
                avatarSrc = 'castanheira-avatar.svg';
            } else if (usuario.avatarArvore === 'peroba-rosa') {
                avatarSrc = 'peroba-rosa-avatar.svg';
            } else {
                avatarSrc = '/api/placeholder/150/150';
            }
        }
        
        card.innerHTML = `
            <div class="avatar-container">
                <img src="${avatarSrc}" alt="Avatar de ${usuario.nome}" class="avatar-img">
            </div>
            <div class="destaque-nome">${usuario.nome}</div>
            <div class="destaque-info">
                <div class="arvores-plantadas">${usuario.arvoresPlantadas} árvores plantadas</div>
                <div>Membro desde ${dataFormatada}</div>
                <div class="badge">Árvore: ${usuario.avatarArvore} - ${estagio}</div>
            </div>
        `;
        
        destaquesContainer.appendChild(card);
    });
    
    const hamburger = document.getElementById('hamburger-menu');
    const menuList = document.getElementById('menu-list');
    
    hamburger.addEventListener('click', function() {
        menuList.classList.toggle('active');
    });
    
    const navUserName = document.getElementById('nav-user-name');
    const navAvatar = document.getElementById('nav-avatar');
    
    if (usuarioJSON) {
        const usuarioNav = JSON.parse(usuarioJSON);
        navUserName.textContent = usuarioNav.nome.split(' ')[0]; 
        
        if (usuarioNav.avatarImagemSrc) {
            navAvatar.src = usuarioNav.avatarImagemSrc;
        } else {
            if (usuarioNav.avatarArvore === 'pau-brasil') {
                navAvatar.src = 'pau-brasil-avatar.svg';
            } else if (usuarioNav.avatarArvore === 'castanheira') {
                navAvatar.src = 'castanheira-avatar.svg';
            } else if (usuarioNav.avatarArvore === 'peroba-rosa') {
                navAvatar.src = 'peroba-rosa-avatar.svg';
            }
        }
        
        navAvatar.alt = `Avatar de ${usuarioNav.nome}`;
    }
});