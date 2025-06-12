import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

function App () {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    );
}

export default App;         

     