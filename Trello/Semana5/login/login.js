function togglePassword() {
    const senhaInput = document.getElementById('senha');
    const toggleButton = document.querySelector('.toggle-password');
    
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        toggleButton.textContent = '🙈';
    } else {
        senhaInput.type = 'password';
        toggleButton.textContent = '👁️';
    }
}

const credenciais = {
    comercial: {
        usuario: 'CMCL12',
        senha: 'Com&c1@l'
    },
    rh: {
        usuario: '98HR',
        senha: 'RH!@2025'
    },
    ti: {
        usuario: 'DEV4567TI',
        senha: 'IT&&||==2025'
    }
};

function validarCredenciais(usuario, setor, senha) {
    if (!credenciais[setor]) {
        return {
            valido: false,
            mensagem: 'Setor não encontrado!'
        };
    }
    
    const credencialSetor = credenciais[setor];
    
    if (credencialSetor.usuario === usuario && credencialSetor.senha === senha) {
        return {
            valido: true,
            mensagem: `Acesso autorizado para o setor ${setor.toUpperCase()}!`
        };
    } else {
        return {
            valido: false,
            mensagem: `Usuário ou senha incorretos para o setor ${setor.toUpperCase()}!`
        };
    }
}

function exibirMensagem(mensagem, tipo) {
    const mensagemAnterior = document.querySelector('.mensagem-login');
    if (mensagemAnterior) {
        mensagemAnterior.remove();
    }
    
    const divMensagem = document.createElement('div');
    divMensagem.className = `mensagem-login ${tipo}`;
    divMensagem.textContent = mensagem;
    
    const botao = document.querySelector('.login-button');
    botao.parentNode.insertBefore(divMensagem, botao);
    
    setTimeout(() => {
        if (document.contains(divMensagem)) {
            divMensagem.remove();
        }
    }, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const usuario = document.getElementById('usuario').value.trim();
        const setor = document.getElementById('setor').value;
        const senha = document.getElementById('senha').value;
        
        if (!usuario || !setor || !senha) {
            exibirMensagem('Por favor, preencha todos os campos!', 'erro');
            return;
        }
        
        const resultado = validarCredenciais(usuario, setor, senha);
        
        if (resultado.valido) {
            exibirMensagem(resultado.mensagem, 'sucesso');
            console.log('Login realizado com sucesso:', { usuario, setor });
            
            if (setor === 'comercial') {
                setTimeout(() => {
                    window.location.href = '../comercial/comercial.html';
                }, 1500);
            } else if (setor === 'rh') {
                setTimeout(() => {
                    window.location.href = '../rh/rh.html';
                }, 1500);
            } else if (setor === 'ti') {
                setTimeout(() => {
                    window.location.href = '../ti/ti.html';
                }, 1500);
            } else {
                setTimeout(() => {
                    alert(`Bem-vindo ao setor ${setor.toUpperCase()}!`);
                }, 2000);
            }
            
        } else {
            exibirMensagem(resultado.mensagem, 'erro');
            console.log('Tentativa de login falhada:', { usuario, setor });
        }
    });

    document.querySelectorAll('input, select').forEach(field => {
        field.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        field.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
});