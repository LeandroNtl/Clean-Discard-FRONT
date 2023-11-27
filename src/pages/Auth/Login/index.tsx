import Form from "../../../components/Forms";

const Login = () => {

    const title = "Login";
    const fields = [
        {
            $label: "Username",
            $type: "text",
            $id: "username",
            $name: "username",
            $placeholder: "Digite seu nome de usuário",
            $required: true,
            $autocomplete: "username"
        },
        {
            $label: "Senha",
            $type: "password",
            $id: "password",
            $name: "password",
            $placeholder: "Digite sua senha",
            $required: true,
            $autocomplete: "current-password"
        }
    ];
    
    return (
        <Form $title={title} $fields={fields} />
    );

};

export default Login;