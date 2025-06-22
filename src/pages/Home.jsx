import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import fundoHome from '../images/fundoHome.webp';

// Styled Components

const TelaHome = styled.div`
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
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

const ConteudoCentral = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

const InputEmail = styled.input`
  flex: 1;
  font-size: 1.25rem;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border-radius: 0;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border: 1px solid #ced4da;
  outline: none;

  &::placeholder {
    color: #999;
  }

  @media(min-width: 768px) {
    margin-bottom: 0;
  }
`;

const BotaoComecar = styled.button`
  white-space: nowrap;
  font-size: 1.25rem;
  padding: 0.5rem 1.5rem;
  background-color: #ffc107; /* Bootstrap warning color */
  border: none;
  color: #212529;
  cursor: pointer;
  border-radius: 0;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;

  &:hover {
    background-color: #e0a800;
  }
`;

function Home() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleStart = () => {
    if (email.trim() !== '') {
      navigate(`/cadastro?email=${encodeURIComponent(email)}`);
    }
  };

  return (
    <TelaHome>
      <OverlayEscuro />

      <NavbarStyled className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Brand className="navbar-brand mb-0 h1">MOTOLINK</Brand>
          <Link to="/login" className="btn btn-outline-warning fw-bold">
            Login
          </Link>
        </div>
      </NavbarStyled>

      <ConteudoCentral>
        <h1 className="mb-3 display-4 fw-bold">
          Conectamos motoboys e estabelecimentos de forma rápida e organizada
        </h1>
        <h3>
          Acabe com a bagunça do Whatsapp. Simplifique sua logística com a plataforma Motolink
        </h3>
        <h5 className="mt-4 mb-3">
          Pronto para começar? Digite seu e-mail para criar ou acessar sua conta.
        </h5>

        <Formulario
          onSubmit={(e) => {
            e.preventDefault();
            handleStart();
          }}
        >
          <InputEmail
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <BotaoComecar type="submit">
            Começar agora
          </BotaoComecar>
        </Formulario>
      </ConteudoCentral>
    </TelaHome>
  );
}

export default Home;
