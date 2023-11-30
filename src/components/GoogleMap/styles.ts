import { styled } from 'styled-components';

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

    width: 20px;
    height: 20px;

`;

const ButtonContainer = styled.div`
    
    width: 80%;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0.5rem;

    button {
        width: 100%;
    }

`;

const Button = styled.button`
    
    width: 100%;
    height: 30px;

    border: 1px solid #008000;
    border-radius: 5px;

    text-align: center;

    background-color: #008000;
    color: #FFF;

    cursor: pointer;

    &:hover {
        background-color: #FFF;
        color: #008000;
    }

`;

export { TextContainer, EvaluationContainer, EvaluationStars, WasteIconContainer, WasteIcon, ButtonContainer, Button };