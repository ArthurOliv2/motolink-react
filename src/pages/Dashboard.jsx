import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TelaDashboard = styled.div`
  min-height: 100vh;
  background-color: #121212;
  color: #fff;
`;

const NavbarStyled = styled.nav`
  background-color: #000;
  padding: 1rem 2rem;
`;

const Brand = styled.span`
  color: #FFA500;
  font-weight: bold;
`;

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <TelaDashboard>
      <NavbarStyled className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Brand className="navbar-brand mb-0 h1">MOTOLINK</Brand>
          <button className="btn btn-outline-light fw-bold" onClick={handleLogout}>
            Sair
          </button>
        </div>
      </NavbarStyled>

      <div className="container mt-5">
        <h2 className="fw-bold">Olá, Lucas!</h2>
        <p className="text-muted">
          Você está logado como <span className="text-warning">motoboy</span>.
        </p>

        {/* Cards de status */}
        <div className="row mt-4">
          <div className="col-md-4 mb-3">
            <div className="card text-white bg-dark h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Entregas em andamento</h5>
                <p className="display-6">4</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card text-white bg-dark h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Concluídas</h5>
                <p className="display-6">15</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card text-white bg-dark h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Pendentes</h5>
                <p className="display-6">2</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabela simulada */}
        <div className="mt-5">
          <h4>Lista de Entregas</h4>
          <div className="table-responsive">
            <table className="table table-dark table-striped mt-3">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Destinatário</th>
                  <th>Status</th>
                  <th>Horário</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>Rua das Flores, 123</td>
                  <td>
                    <span className="badge bg-warning text-dark">Em trânsito</span>
                  </td>
                  <td>14:20</td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>Avenida Brasil, 456</td>
                  <td>
                    <span className="badge bg-success">Entregue</span>
                  </td>
                  <td>12:10</td>
                </tr>
                <tr>
                  <td>003</td>
                  <td>Travessa Central, 789</td>
                  <td>
                    <span className="badge bg-danger">Pendente</span>
                  </td>
                  <td>15:45</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </TelaDashboard>
  );
}

export default Dashboard;
