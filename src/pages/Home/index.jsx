import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import {
    Container,
    Overlay,
    NavBar,
    Content,
    Form
} from './styles';

function Home() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleStart = () => {
        if (email.trim() !== '') {
            navigate(`/cadastro?email=${encodeURIComponent(email)}`);
        }
    };

    return (
        <Container>
            <Overlay />

            <NavBar>
                <div className="brand">MOTOLINK</div>
                <Link to="/login" className="login-button">
                    Login
                </Link>
            </NavBar>

            <Content>
                <h1>
                    Conectamos motoboys e estabelecimentos de forma rápida e organizada
                </h1>
                <h3>
                    Acabe com a bagunça do WhatsApp. Simplifique sua logística com a plataforma Motolink
                </h3>
                <h5>
                    Pronto para começar? Digite seu e-mail para criar ou acessar sua conta.
                </h5>

                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleStart();
                    }}
                >
                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">
                        Começar agora
                    </button>
                </Form>
            </Content>
        </Container>
    );
}

export default Home;
