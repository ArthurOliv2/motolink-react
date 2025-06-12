import React from 'react';

function Dashboard() {
    return (
        <div
            className="d-flex justify-content-center align-items-center text-center"
            style={{
                height: '100vh',
                backgroundColor: '#121212',
                color: '#FFA500',
                flexDirection: 'column'
            }}
        >
            <h1 className="mb-4">Bem-vindo à Plataforma Motolink!</h1>
            <p>Simulação de painel após login.</p>
        </div>
    );
}

export default Dashboard;