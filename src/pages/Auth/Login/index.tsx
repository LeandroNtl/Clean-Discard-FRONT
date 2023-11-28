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
        },
        {
            $label: "Tipo de usuário",
            $type: "select",
            $id: "userType",
            $name: "userType",
            $required: true,
            $options: [
                {
                    value: "admin",
                    label: "Administrador"
                },
                {
                    value: "user",
                    label: "Usuário"
                },
                {
                    value: "guest",
                    label: "Convidado"
                },
                {
                    value: "other",
                    label: "Outro"

                }
            ]
        },
        {
            $label: "Nota",
            $type: "checkbox",
            $id: "nota",
            $name: "nota",
            $required: true,
            $options: [
                {
                    value: "1",
                    label: "1"
                },
                {
                    value: "2",
                    label: "2"
                },
                {
                    value: "3",
                    label: "3"
                },
                {
                    value: "4",
                    label: "4"
                },
                {
                    value: "5",
                    label: "5"
                }
            ]
        }
    ];
    
    return (
        <Form $title={title} $fields={fields} />
    );

};

export default Login;