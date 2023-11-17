import Form from "../../components/Forms";

const Login = () => {

    const title = "Login";
    const fields = [
        {
            $label: "Email",
            $type: "email",
            $id: "email",
            $name: "email",
            $placeholder: "Digite seu email",
            $required: true,
            $autocomplete: "email"
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