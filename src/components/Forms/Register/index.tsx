import { Form, FormField, FormLabel, FormInput, FormButton  } from '../styles';

interface IRegisterFormProps {
    $onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const RegisterForm = (props: IRegisterFormProps) => {

    return (
        <Form onSubmit={props.$onSubmit}>
            <h2>Register</h2>
            <FormField>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormInput type="text" id="name" name="name" placeholder="Digite seu nome" autoComplete="on" required />
            </FormField>
            <FormField>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput type="email" id="email" name="email" placeholder="Digite seu email" autoComplete="on" required />
            </FormField>
            <FormField>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput type="password" id="password" name="password" placeholder="Digite sua senha" required />
            </FormField>
            <FormField>
                <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                <FormInput type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirme sua senha" required />
            </FormField>
            <FormButton type="submit">Register</FormButton>
        </Form>
    );

};

export default RegisterForm;