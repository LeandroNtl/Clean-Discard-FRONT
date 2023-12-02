import { Form, FormField, FormLabel, FormInput, FormButton  } from '../styles';

interface RegisterFormProps {
    $children?: React.ReactNode;
    $onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    $fields?: {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
        handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    }
}

const RegisterForm = (props: RegisterFormProps) => {

    return (
        <Form onSubmit={props.$onSubmit}>
            <h2>Register</h2>
            {props.$children}
            <FormField>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormInput type="text" id="name" name="name" placeholder="Digite seu nome" autoComplete="on" value={props.$fields?.name} onChange={props.$fields?.handleChange} required />
            </FormField>
            <FormField>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput type="email" id="email" name="email" placeholder="Digite seu email" autoComplete="on" value={props.$fields?.email} onChange={props.$fields?.handleChange} required />
            </FormField>
            <FormField>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput type="password" id="password" name="password" placeholder="Digite sua senha" autoComplete="on" value={props.$fields?.password} onChange={props.$fields?.handleChange} required/>
            </FormField>
            <FormField>
                <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                <FormInput type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirme sua senha" autoComplete="on" value={props.$fields?.confirmPassword} onChange={props.$fields?.handleChange} required/>
            </FormField>
            <FormButton type="submit">Register</FormButton>
        </Form>
    );

};

export default RegisterForm;