document.addEventListener('DOMContentLoaded', function() {
    const temaArmazenado = localStorage.getItem('temaReflorestamento');
    if (temaArmazenado) {
        document.body.className = temaArmazenado;
    }
    
    const acaoForm = document.getElementById('acaoForm');
    const confirmacao = document.getElementById('confirmacao');
    
    acaoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const usuarioJSON = localStorage.getItem('usuarioReflorestamento');
        let idUsuario = null;
        
        if (usuarioJSON) {
            const usuario = JSON.parse(usuarioJSON);
            idUsuario = usuario.usuario;
            
            usuario.arvoresPlantadas += parseInt(document.getElementById('quantidade').value);
            localStorage.setItem('usuarioReflorestamento', JSON.stringify(usuario));
        }
        
        const acao = {
            idUsuario: idUsuario, 
            quantidade: parseInt(document.getElementById('quantidade').value),
            especie: document.getElementById('especie').value,
            data: document.getElementById('data').value,
            local: document.getElementById('local').value,
            dataCadastro: new Date().toISOString()
        };
        
        let acoes = JSON.parse(localStorage.getItem('acoesReflorestamento')) || [];
        acoes.push(acao);
        
        localStorage.setItem('acoesReflorestamento', JSON.stringify(acoes));
        
        confirmacao.style.display = 'block';
        console.log('Ação de reflorestamento registrada:', acao);
        
        acaoForm.reset();
        
        setTimeout(() => {
            confirmacao.style.display = 'none';
        }, 3000);
    });
    
    const menuList = document.getElementById('menu-list');
    
    hamburger.addEventListener('click', function() {
        menuList.classList.toggle('active');
    });
    
    const navUserName = document.getElementById('nav-user-name');
    const navAvatar = document.getElementById('nav-avatar');
    
    const usuarioJSON = localStorage.getItem('usuarioReflorestamento');
    if (usuarioJSON) {
        const usuario = JSON.parse(usuarioJSON);
        navUserName.textContent = usuario.nome.split(' ')[0]; 
        
        if (usuario.avatarImagemSrc) {
            navAvatar.src = usuario.avatarImagemSrc;
        } else {
            if (usuario.avatarArvore === 'pau-brasil') {
                navAvatar.src = 'pau-brasil-avatar.svg';
            } else if (usuario.avatarArvore === 'castanheira') {
                navAvatar.src = 'castanheira-avatar.svg';
            } else if (usuario.avatarArvore === 'peroba-rosa') {
                navAvatar.src = 'peroba-rosa-avatar.svg';
            }
        }
        
        navAvatar.alt = `Avatar de ${usuario.nome}`;
    }
});