import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate} from 'react-router-dom';
import fundoHome from '../images/fundoHome.webp';

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
                        maxWidth: '500px',
                        backgroundColor: 'rgba(0, 0, 0, 0.85)',
                        color: 'white'
                    }}
                >
                    <h2 className="mb-4">Criar Conta</h2>
                    <form onSubmit={handleCadastro}>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control bg-transparent text-white border border-light"
                                id="nome"
                                placeholder="Nome Completo"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                            <label htmlFor="nome" className="text-light">Nome completo</label>
                        </div>

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

                        <div className="form-floating mb-3">
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

                        <div className="mb-4">
                            <label htmlFor="tipoConta" className="form-label text-light">Tipo de conta</label>
                            <select
                                className="form-select bg-transparent text-white border-light"
                                id="tipoConta"
                                value={tipoConta}
                                onChange={(e) => setTipoConta(e.target.value)}
                                required
                            >
                                <option value="">Selecione</option>
                                <option value="estabelecimento">Estabelecimento</option>
                                <option value="motoboy">Motoboy</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-warning w-100 fw-bold">
                            Cadastrar
                        </button>
                    </form>

                    <div className="mt-3 text-center">
                        <small>
                            Já tem uma conta?{' '}
                            <Link to="/login" className="text-warning">
                                Fazer login
                            </Link>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;