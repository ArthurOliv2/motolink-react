import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
    Container,
    Overlay,
    NavBar,
    FormContainer,
    FormBox
} from './styles';

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = (e) => {
    e.preventDefault();

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuario = usuarios.find(
        (user) => user.email === email && user.senha === senha
    );

    if (usuario) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        navigate('/dashboard');
    } else {
        alert('Email ou senha inválidos');
    }
    };


    return (
        <Container>
            <Overlay />

            <NavBar>
                <div className="brand">MOTOLINK</div>
            </NavBar>

            <FormContainer>
                <FormBox>
                    <h2>Entrar</h2>
                    <form onSubmit={handleLogin}>
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

                        <button type="submit">Entrar</button>
                    </form>

                    <div className="footer">
                        <small>
                            Ainda não tem conta?{' '}
                            <Link to="/cadastro">
                                Cadastre-se agora
                            </Link>
                        </small>
                    </div>
                </FormBox>
            </FormContainer>
        </Container>
    );
}

export default Login;
