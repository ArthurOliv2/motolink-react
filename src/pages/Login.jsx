import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import fundoHome from '../images/fundoHome.webp';

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        
        navigate('/dashboard');
    };

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                backgroundImage: `url(${fundoHome})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Overlay escuro */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    zIndex: 1
                }}
            ></div>

            {/* Navbar */}
            <nav
                className="navbar navbar-expand-lg"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    background: 'transparent',
                    zIndex: 3,
                    padding: '1rem 2rem'
                }}
            >
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1" style={{ color: '#FFA500', fontWeight: 'bold' }}>
                        MOTOLINK
                    </span>
                </div>
            </nav>

            {/* Formulário */}
            <div
                className="d-flex justify-content-center align-items-center"
                style={{
                    height: '100%',
                    position: 'relative',
                    zIndex: 2
                }}
            >
                <div
                    className="p-4 rounded"
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        backgroundColor: 'rgba(0, 0, 0, 0.85)',
                        color: 'white'
                    }}
                >
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
                </div>
            </div>
        </div>
    );
}

export default Login;