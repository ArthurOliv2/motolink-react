import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

import {
    Container,
    Overlay,
    NavBar,
    FormContainer,
    FormBox
} from './styles';

function Cadastro() {
    
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const emailPreenchido = queryParams.get('email') || '';

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [tipoConta, setTipoConta] = useState('');

    useEffect(() => {
        setEmail(emailPreenchido);
    }, [emailPreenchido]);

    const handleCadastro = (e) => {
    e.preventDefault();

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    const existe = usuarios.find((user) => user.email === email);
    if (existe) {
        alert('Este email já está cadastrado!');
        return;
    }

    const novoUsuario = { nome, email, senha, tipoConta };
    usuarios.push(novoUsuario);

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    localStorage.setItem('usuarioLogado', JSON.stringify(novoUsuario));

    navigate('/dashboard');
};


    return (
        <Container>
            <Overlay />

            <NavBar>
                <div className="brand">MOTOLINK</div>
            </NavBar>

            <FormContainer>
                <FormBox>
                    <h2>Criar Conta</h2>
                    <form onSubmit={handleCadastro}>
                        <label htmlFor="nome">Nome completo</label>
                        <input
                            type="text"
                            id="nome"
                            placeholder="Nome completo"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            placeholder="Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />

                        <label htmlFor="tipoConta">Tipo de conta</label>
                        <select
                            id="tipoConta"
                            value={tipoConta}
                            onChange={(e) => setTipoConta(e.target.value)}
                            required
                        >
                            <option value="">Selecione</option>
                            <option value="estabelecimento">Estabelecimento</option>
                            <option value="motoboy">Motoboy</option>
                        </select>

                        <button type="submit">Cadastrar</button>
                    </form>

                    <div className="footer">
                        <small>
                            Já tem uma conta?{' '}
                            <Link to="/login">
                                Fazer login
                            </Link>
                        </small>
                    </div>
                </FormBox>
            </FormContainer>
        </Container>
    );
}

export default Cadastro;
