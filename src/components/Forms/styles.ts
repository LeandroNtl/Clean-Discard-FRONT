import { styled } from 'styled-components';

const FormTitle = styled.h1`    

    margin-bottom: 20px;

`;

const StyledForm = styled.form`

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

const SelectFormField = styled.div`
    
    width: 70%;
    margin-bottom: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const SelectFormLabel = styled.label`

    margin-bottom: 5px;

`;

const SelectForm = styled.select`
    
    width: 100%;
    height: 30px;
    padding: 5px;

    border: 1px solid #008000;
    border-radius: 0.5rem;

`;

const SelectFormOption = styled.option`

    width: 100%;
    height: 30px;
    padding: 5px;

`;

const FormFieldSet = styled.fieldset`
    
    width: 70%;
    margin-bottom: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const Legend = styled.legend` 
    
    margin-bottom: 5px;

`;

const CheckboxFormField = styled.div`

    display: flex;
    align-items: center;
    margin-bottom: 16px;

    flex-direction: row;
    justify-content: center;

    padding: 0.5rem;

`;

const CheckboxLabel = styled.label`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const CheckboxInput = styled.input`

    margin-right: 10px;

    width: 20px;
    height: 20px;

    cursor: pointer;

    border: 1px solid #008000;

    border-radius: 0.5rem;

    &:checked {
        background-color: #008000;
    }

`;


export { FormTitle, StyledForm, FormField, FormLabel, FormInput, FormButton, SelectFormField, SelectFormLabel, SelectForm, SelectFormOption, CheckboxFormField, CheckboxLabel, CheckboxInput, FormFieldSet, Legend };

