import Form from "../../components/Forms";

const Register = () => {

    const title = "Cadastro";
    const fields = [
        {
            $label: "Nome",
            $type: "text",
            $id: "name",
            $name: "name",
            $placeholder: "Digite seu nome",
            $required: true,
            $autocomplete: "name"
        },
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
            $autocomplete: "new-password"
        },
        {
            $label: "Confirmar Senha",
            $type: "password",
            $id: "confirmPassword",
            $name: "confirmPassword",
            $placeholder: "Confirme sua senha",
            $required: true,
            $autocomplete: "new-password"
        }
    ];

    return (
        <Form $title={title} $fields={fields}/>
    );

};

export default Register;