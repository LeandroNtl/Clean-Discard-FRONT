import { Form, FormField, FormLabel, FormInput, FormButton  } from '../styles';

interface LoginFormProps {
    $onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    $fields?: {
        email: string;
        password: string;
        handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    };
}

const LoginForm = (props: LoginFormProps) => {

    return (
        <Form onSubmit={props.$onSubmit}>
            <h2>Login</h2>
            <FormField>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput type="email" id="email" name="email" placeholder="Digite seu email" autoComplete="on" value={props.$fields?.email} onChange={props.$fields?.handleChange} required />
            </FormField>
            <FormField>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput type="password" id="password" name="password" placeholder="Digite sua senha" autoComplete="on" value={props.$fields?.password} onChange={props.$fields?.handleChange} required/>
            </FormField>
            <FormButton type="submit">Login</FormButton>
        </Form>
    );

};

export default LoginForm;