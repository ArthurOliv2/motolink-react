import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import fundoHome from '../images/fundoHome.webp' 

function Home() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleStart = () => {
        if (email.trim() !== '') {
            navigate(`/cadastro?email=${encodeURIComponent(email)}`);
        }
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
            {/* Overlay escuro por cima da imagem */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    zIndex: 1
                }}
            ></div>

            {/* Overlay escuro por cima da imagem */}
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
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <span className="navbar-brand mb-0 h1"
                    style={{ color: '#FFA500', fontWeight: 'bold'}}>
                        MOTOLINK
                    </span>
                    <Link to="/login" className="btn btn-outline-warning fw-bold">
                        Login
                    </Link>
                </div>       
            </nav>

            {/* Conteúdo centralizado */}
            <div
                className="text-white d-flex flex-column justify-content-center align-items-center text-center"
                style={{
                    position: 'relative',
                    zIndex: 2,
                    height: '100%',
                    padding: '20px'
                }}
            >
                <h1 className="mb-3 display-4 fw-bold">Conectamos motoboys e estabelecimentos de forma rápida e organizada</h1>
                <h3>Acabe com a bagunça do Whatsapp. Simplifique sua logistica com a plataforma Motolink</h3>
                <h5 className="mt-4 mb-3">
                    Pronto para começar? Digite seu e-mail para criar ou acessar sua conta.
                </h5>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (email.trim() !== '') {
                            navigate(`/cadastro?email=${encodeURIComponent(email)}`);
                        }
                    }}
                    className="d-flex flex-column flex-md-row w-100"
                    style={{ maxWidth: '600px' }}
                >
                    <input
                        type="email"
                        className="form-control form-control-lg mb-3 mb-md-0 rounded-0 rounded-start"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="btn btn-warning btn-lg rounded-0 rounded-end"
                        style={{ whiteSpace: 'nowrap' }}
                    >
                        Começar agora
                    </button>
                </form>

                
            </div>

            {/* Formulario semelhante ao da Netflix */}
            
        </div>
    );
}

export default Home;