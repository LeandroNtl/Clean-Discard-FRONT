import { styled } from 'styled-components';

const Form = styled.form`

    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 1rem 0;

`;

const FormField = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

const FormLabel = styled.label`

    width: 100%;
    margin: 0.5rem 0;
    
`;

const FormInput = styled.input`

    width: 100%;
    padding: 1rem 0.5rem;
    margin: 0.5rem 0;

    border: 1px solid #000000;
    border-radius: 0.5rem;

    font-size: 1.2rem;
    font-weight: 600;

    outline: none;

    &:focus {
        border: 1px solid #000800;
    }
    
`;

const FormButton = styled.button`

    width: 50%;
    padding: 1rem 0.5rem;
    margin: 0.5rem 0;

    border: 1px solid #000000;
    border-radius: 0.5rem;

    font-size: 1.2rem;
    font-weight: 600;

    outline: none;

    &:hover {
        background-color: #008000;
        color: #ffffff;
    }
    
`;

export { Form, FormField, FormLabel, FormInput, FormButton };