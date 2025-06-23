import styled from 'styled-components';
import fundoHome from '../../images/fundoHome.webp';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${fundoHome});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
`;

export const NavBar = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: transparent;
    z-index: 3;
    padding: 1rem 2rem;

    .brand {
        color: #ffa500;
        font-weight: bold;
        font-size: 1.5rem;
    }
`;

export const FormContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
`;

export const FormBox = styled.div`
    width: 100%;
    max-width: 400px;
    background-color: rgba(0, 0, 0, 0.85);
    color: white;
    padding: 2rem;
    border-radius: 8px;

    h2 {
        margin-bottom: 1.5rem;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    label {
        color: white;
        margin-bottom: 0.5rem;
    }

    input {
        background-color: transparent;
        color: white;
        border: 1px solid white;
        padding: 0.75rem;
        border-radius: 6px;
        margin-bottom: 1rem;
    }

    input::placeholder {
        color: rgba(255, 255, 255, 0.7);
    }

    button {
        background-color: #ffc107;
        color: black;
        font-weight: bold;
        padding: 0.75rem;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            background-color: #e0a800;
        }
    }

    .footer {
        margin-top: 1rem;
        text-align: center;

        a {
            color: #ffc107;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;
