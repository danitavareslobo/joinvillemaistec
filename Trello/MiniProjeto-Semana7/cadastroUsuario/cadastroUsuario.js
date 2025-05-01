document.addEventListener('DOMContentLoaded', function() {
    const treeOptions = document.querySelectorAll('.tree-option');
    let selectedTree = null;

    treeOptions.forEach(option => {
        option.addEventListener('click', function() {
            treeOptions.forEach(opt => opt.classList.remove('selected'));
            
            this.classList.add('selected');
            
            selectedTree = this.getAttribute('data-tree');
            
            document.body.className = selectedTree;
        });
    });

    const cadastroForm = document.getElementById('cadastroForm');
    
    cadastroForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!selectedTree) {
            alert('Por favor, selecione uma árvore para seu avatar.');
            return;
        }
        
        const senha = document.getElementById('senha').value;
        const confirmarSenha = document.getElementById('confirmarSenha').value;
        
        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem. Por favor, verifique.');
            return;
        }
        
        const usuario = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            usuario: document.getElementById('usuario').value,
            senha: senha, 
            avatarArvore: selectedTree,
            arvoresPlantadas: 0, 
            bio: '', 
            dataCadastro: new Date().toISOString()
        };
        
        
        localStorage.setItem('usuarioReflorestamento', JSON.stringify(usuario));
        localStorage.setItem('temaReflorestamento', selectedTree);
        
        alert('Cadastro realizado com sucesso!');
        console.log('Objeto de usuário criado:', usuario);
        
    });
});