import { Form, FormField, FormLabel, FormInput, FormButton  } from '../styles';

interface ILoginFormProps {
    $onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm = (props: ILoginFormProps) => {

    return (
        <Form onSubmit={props.$onSubmit}>
            <h2>Login</h2>
            <FormField>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput type="email" id="email" name="email" placeholder="Digite seu email" autoComplete="on" required />
            </FormField>
            <FormField>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput type="password" id="password" name="password" placeholder="Digite sua senha" required />
            </FormField>
            <FormButton type="submit">Login</FormButton>
        </Form>
    );

};

export default LoginForm;