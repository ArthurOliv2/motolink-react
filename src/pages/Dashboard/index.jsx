import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
        if (!usuarioLogado) {
            navigate('/login');
        } else {
            setUsuario(usuarioLogado);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('usuarioLogado');
        navigate('/login');
    };

    if (!usuario) return null;

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Bem-vindo, {usuario.nome}!</h1>
            <h3>Você está logado como: {usuario.tipoConta}</h3>
            <button onClick={handleLogout}>Sair</button>
        </div>
    );
}

export default Dashboard;
