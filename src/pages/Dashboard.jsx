import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [tipoConta, setTipoConta] = useState('');

    useEffect(() => {
        const nomeSalvo = localStorage.getItem('nome');
        const tipoSalvo = localStorage.getItem('tipoConta');
        if (!nomeSalvo || !tipoSalvo) {
            navigate('/');
        } else {
            setNome(nomeSalvo);
            setTipoConta(tipoSalvo);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#121212', color: '#fff' }}>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#000', padding: '1rem 2rem' }}>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <span className="navbar-brand mb-0 h1" style={{ color: '#FFA500', fontWeight: 'bold' }}>
                        MOTOLINK
                    </span>
                    <button className="btn btn-outline-light fw-bold" onClick={handleLogout}>
                        Sair
                    </button>
                </div>
            </nav>

            {/* Boas-vindas */}
            <div className="container mt-5">
                <h2 className="fw-bold">Olá, {nome}!</h2>
                <p className="text-muted">Você está logado como <span className="text-warning">{tipoConta}</span>.</p>

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
                    <h4>Lista de {tipoConta === 'motoboy' ? 'Entregas' : 'Pedidos'}</h4>
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
                                    <td><span className="badge bg-warning text-dark">Em trânsito</span></td>
                                    <td>14:20</td>
                                </tr>
                                <tr>
                                    <td>002</td>
                                    <td>Avenida Brasil, 456</td>
                                    <td><span className="badge bg-success">Entregue</span></td>
                                    <td>12:10</td>
                                </tr>
                                <tr>
                                    <td>003</td>
                                    <td>Travessa Central, 789</td>
                                    <td><span className="badge bg-danger">Pendente</span></td>
                                    <td>15:45</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;