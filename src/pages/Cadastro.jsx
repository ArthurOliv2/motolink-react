import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import fundoHome from '../images/fundoHome.webp';

// Styled Components

const TelaCadastro = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${fundoHome});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
`;

const OverlayEscuro = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const NavbarStyled = styled.nav`
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  background: transparent;
  z-index: 3;
  padding: 1rem 2rem;
`;

const Brand = styled.span`
  color: #FFA500;
  font-weight: bold;
`;

const FormWrapper = styled.div`
  height: 100%;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormBox = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: rgba(0,0,0,0.85);
  color: white;
  padding: 1rem 2rem 2rem;
  border-radius: 0.5rem;
`;

const StyledForm = styled.form`
  /* já que usa bootstrap, deixa a estrutura intacta */
`;

const StyledButton = styled.button`
  width: 100%;
  font-weight: bold;
`;

const StyledLabel = styled.label`
  color: #fff !important;
`;

const StyledSelect = styled.select`
  background-color: transparent !important;
  color: white !important;
  border-color: #f8f9fa !important;
`;

const StyledInput = styled.input`
  background-color: transparent !important;
  color: white !important;
  border-color: #f8f9fa !important;
`;

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
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Tipo de conta:', tipoConta);

    localStorage.setItem('nome', nome);
    localStorage.setItem('tipoConta', tipoConta);

    navigate('/dashboard');
  };

  return (
    <TelaCadastro>
      <OverlayEscuro />
      <NavbarStyled className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Brand className="navbar-brand mb-0 h1">MOTOLINK</Brand>
        </div>
      </NavbarStyled>

      <FormWrapper>
        <FormBox>
          <h2 className="mb-4">Criar Conta</h2>
          <StyledForm onSubmit={handleCadastro}>
            <div className="form-floating mb-3">
              <StyledInput
                type="text"
                id="nome"
                placeholder="Nome Completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                className="form-control bg-transparent text-white border border-light"
              />
              <StyledLabel htmlFor="nome">Nome completo</StyledLabel>
            </div>

            <div className="form-floating mb-3">
              <StyledInput
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-control bg-transparent text-white border border-light"
              />
              <StyledLabel htmlFor="email">Email</StyledLabel>
            </div>

            <div className="form-floating mb-3">
              <StyledInput
                type="password"
                id="senha"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                className="form-control bg-transparent text-white border border-light"
              />
              <StyledLabel htmlFor="senha">Senha</StyledLabel>
            </div>

            <div className="mb-4">
              <StyledLabel htmlFor="tipoConta" className="form-label">
                Tipo de conta
              </StyledLabel>
              <StyledSelect
                id="tipoConta"
                value={tipoConta}
                onChange={(e) => setTipoConta(e.target.value)}
                required
                className="form-select bg-transparent text-white border-light"
              >
                <option value="">Selecione</option>
                <option value="estabelecimento">Estabelecimento</option>
                <option value="motoboy">Motoboy</option>
              </StyledSelect>
            </div>

            <StyledButton type="submit" className="btn btn-warning">
              Cadastrar
            </StyledButton>
          </StyledForm>

          <div className="mt-3 text-center">
            <small>
              Já tem uma conta?{' '}
              <Link to="/login" className="text-warning">
                Fazer login
              </Link>
            </small>
          </div>
        </FormBox>
      </FormWrapper>
    </TelaCadastro>
  );
}

export default Cadastro;
