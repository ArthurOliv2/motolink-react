import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to right, #0f0f0f, #1c1c1c);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    flex-direction: column;
    gap: 20px;
`;

export const Box = styled.div`
    background-color: rgba(0, 0, 0, 0.85);
    padding: 40px;
    border-radius: 12px;
    text-align: center;
    width: 100%;
    max-width: 500px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
`;

export const Title = styled.h1`
    margin-bottom: 10px;
    color: #facc15;
`;

export const Subtitle = styled.h3`
    margin-bottom: 20px;
    color: #d4d4d4;
`;

export const Button = styled.button`
    background-color: #facc15;
    color: #000;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
        background-color: #eab308;
    }
`;
