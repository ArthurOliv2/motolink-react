import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import fundoHome from '../images/fundoHome.webp';

const TelaLogin = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${fundoHome});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  z-index: 1;
`;

const NavbarStyled = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  z-index: 3;
  padding: 1rem 2rem;
`;

const Brand = styled.span`
  color: #FFA500;
  font-weight: bold;
`;

const FormularioWrapper = styled.div`
  height: 100%;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormularioContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: rgba(0,0,0,0.85);
  color: white;
  padding: 1rem;
  border-radius: 0.25rem;
`;

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <TelaLogin>
      <Overlay />
      
      <NavbarStyled className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Brand className="navbar-brand mb-0 h1">MOTOLINK</Brand>
        </div>
      </NavbarStyled>

      <FormularioWrapper>
        <FormularioContainer className="p-4 rounded">
          <h2 className="mb-4">Entrar</h2>
          <form onSubmit={handleLogin}>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control bg-transparent text-white border border-light"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="email" className="text-light">Email</label>
            </div>

            <div className="form-floating mb-4">
              <input
                type="password"
                className="form-control bg-transparent text-white border border-light"
                id="senha"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
              <label htmlFor="senha" className="text-light">Senha</label>
            </div>

            <button type="submit" className="btn btn-warning w-100 fw-bold">
              Entrar
            </button>
          </form>

          <div className="mt-3 text-center">
            <small>
              Ainda não tem conta?{' '}
              <Link to="/cadastro" className="text-warning">
                Cadastre-se agora
              </Link>
            </small>
          </div>
        </FormularioContainer>
      </FormularioWrapper>
    </TelaLogin>
  );
}

export default Login;
