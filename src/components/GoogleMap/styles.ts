import { styled } from 'styled-components';

const WindowContainer = styled.div`
        
    max-width: 300px;
    height: 100%;

    margin-right: 0.8rem;

    gap: 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const TextContainer = styled.div`

    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        text-align: center;
    }

    p {
        text-align: justify;
    }

`;

const EvaluationContainer = styled.div`

    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h4 {
        width: 100%;
        text-align: center;
    }

`;

const EvaluationStars = styled.div`

    width: 100%;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0.5rem;

`;

const WasteIconContainer = styled.div`
    
    width: 100%;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    gap: 0.5rem;
    padding: 0.5rem;

    border-top: 1px solid #008000;

`;

const WasteIcon = styled.img`

    width: 30px;
    height: 30px;

`;

const Button = styled.button`
    
    width: auto;
    height: 30px;

    border: 1px solid #008000;
    border-radius: 5px;

    padding: 0.5rem;

    text-align: center;

    background-color: #008000;
    color: #FFF;

    cursor: pointer;

    &:hover {
        background-color: #FFF;
        color: #008000;
    }

`;

export { TextContainer, EvaluationContainer, EvaluationStars, WasteIconContainer, WasteIcon, Button, WindowContainer };