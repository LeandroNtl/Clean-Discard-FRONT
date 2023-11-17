import { styled } from 'styled-components';

interface FormProps {

    $area?: string;

};

const FormTitle = styled.h1`    

    margin-bottom: 20px;

`;

const StyledForm = styled.form<FormProps>`

    grid-area: ${props => props.$area};

    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const FormField = styled.div`

    width: 70%;
    margin-bottom: 20px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

`;

const FormLabel = styled.label`

    margin-bottom: 5px;

`;

const FormInput = styled.input`

    width: 100%;
    height: 30px;
    padding: 5px;

    border: 1px solid #008000;
    border-radius: 0.5rem;

`;

const FormButton = styled.button`

    width: 20%;
    height: 30px;
    padding: 5px;

    border: none;
    border-radius: 0.5rem;

    background-color: #008000;
    color: #fff;

    cursor: pointer;

`;

export { FormTitle, StyledForm, FormField, FormLabel, FormInput, FormButton };