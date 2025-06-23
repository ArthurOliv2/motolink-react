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
    background-color: rgba(0, 0, 0, 0.8);
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

    display: flex;
    justify-content: space-between;
    align-items: center;

    .brand {
        color: #ffa500;
        font-weight: bold;
        font-size: 1.8rem;
    }

    .login-button {
        color: #ffc107;
        border: 2px solid #ffc107;
        background-color: transparent;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        font-weight: bold;
        text-decoration: none;
        transition: 0.3s;

        &:hover {
            background-color: #ffc107;
            color: black;
        }
    }
`;

export const Content = styled.div`
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    color: white;

    h1 {
        margin-bottom: 1rem;
        font-size: 2.5rem;
        font-weight: bold;
    }

    h3 {
        max-width: 700px;
    }

    h5 {
        margin-top: 1.5rem;
        margin-bottom: 1rem;
    }
`;

export const Form = styled.form`
    display: flex;
    width: 100%;
    max-width: 600px;

    input {
        flex: 1;
        padding: 0.75rem;
        border: none;
        border-radius: 8px 0 0 8px;
        outline: none;
        font-size: 1rem;
    }

    button {
        background-color: #ffc107;
        color: black;
        font-weight: bold;
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 0 8px 8px 0;
        cursor: pointer;
        white-space: nowrap;
        transition: 0.3s;

        &:hover {
            background-color: #e0a800;
        }
    }

    @media (max-width: 767px) {
        flex-direction: column;

        input {
            border-radius: 6px;
            margin-bottom: 0.5rem;
        }

        button {
            border-radius: 6px;
        }
    }
`;
