document.addEventListener('DOMContentLoaded', function() {
    const temaArmazenado = localStorage.getItem('temaReflorestamento');
    if (temaArmazenado) {
        document.body.className = temaArmazenado;
    }
    
    let usuario = {
        nome: 'Usuário Exemplo',
        email: 'exemplo@email.com',
        usuario: 'usuario_exemplo',
        avatarArvore: temaArmazenado || 'pau-brasil',
        avatarImagemSrc: temaArmazenado === 'pau-brasil' ? 'pau-brasil-avatar.svg' : 
                        temaArmazenado === 'castanheira' ? 'castanheira-avatar.svg' : 
                        'peroba-rosa-avatar.svg',
        arvoresPlantadas: 250,
        bio: 'Esta é uma biografia de demonstração para o perfil do usuário.',
        dataCadastro: '2024-01-15'
    };
    
    const usuarioJSON = localStorage.getItem('usuarioReflorestamento');
    if (usuarioJSON) {
        const usuarioSalvo = JSON.parse(usuarioJSON);
        usuario = {...usuario, ...usuarioSalvo};
    }
    
    document.getElementById('nome-usuario').textContent = usuario.nome;
    document.getElementById('email-usuario').textContent = usuario.email;
    document.getElementById('arvores-plantadas').textContent = usuario.arvoresPlantadas;
    
    const dataCadastro = new Date(usuario.dataCadastro);
    const dataFormatada = dataCadastro.toLocaleDateString('pt-BR');
    document.getElementById('data-cadastro').textContent = dataFormatada;
    
    if (usuario.bio) {
        document.getElementById('bio-atual').textContent = usuario.bio;
        document.getElementById('bio-input').value = usuario.bio;
    }
    
    atualizarProgresso(usuario.arvoresPlantadas);
    
    document.getElementById('salvar-bio').addEventListener('click', function() {
        const novaBio = document.getElementById('bio-input').value;
        document.getElementById('bio-atual').textContent = novaBio;

        usuario.bio = novaBio;
        localStorage.setItem('usuarioReflorestamento', JSON.stringify(usuario));
        
        alert('Biografia atualizada com sucesso!');
    });
    

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
        }
        navAvatar.alt = `Avatar de ${usuarioNav.nome}`;
    }
    
    function atualizarProgresso(arvoresPlantadas) {
        const maxArvores = 1500;
        const porcentagem = Math.min((arvoresPlantadas / maxArvores) * 100, 100);
        
        document.getElementById('barra-progresso').style.width = porcentagem + '%';
        document.getElementById('progresso-info').textContent = `${arvoresPlantadas} de 1500+ árvores plantadas`;
        
        const marcos = [0, 100, 300, 700, 1500];
        marcos.forEach(marco => {
            const elemento = document.getElementById(`milestone-${marco}`);
            if (arvoresPlantadas >= marco) {
                elemento.classList.add('reached');
            } else {
                elemento.classList.remove('reached');
            }
        });
        
        let estagio = 'plantada';
        
        if (arvoresPlantadas >= 1500) {
            estagio = 'madura';
        } else if (arvoresPlantadas >= 700) {
            estagio = 'jovem';
        } else if (arvoresPlantadas >= 300) {
            estagio = 'broto';
        } else if (arvoresPlantadas >= 100) {
            estagio = 'plantada';
        }
        
        const avatarImg = document.getElementById('avatar-img');
        
        if (usuario.avatarImagemSrc) {
            avatarImg.src = usuario.avatarImagemSrc;
        }
        
        avatarImg.alt = `Avatar ${usuario.avatarArvore} - Estágio: ${estagio}`;
    }
});