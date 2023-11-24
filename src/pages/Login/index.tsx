import { useState } from "react";
import Form from "../../components/Forms";
import api from "../../services/api";

// como está o login no backend
// @staticmethod
// def login(data):
//     """ Realiza o login de um usuário. """
//     try:
//         user = User.query.filter_by(username=data['username']).first()

//         if user is None:
//             return { 'message': 'Erro: Usuário não encontrado.'}

//         if check_password_hash(user.password, data['password']) is not True:
//             return { 'message': 'Erro: Senha incorreta.'}

//         return user, 200

//     except Exception as e:
//         return { 'message': f'Error: {e}'}

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

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await api.post("/users/login", {
            username,
            password
        });
        console.log(response);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === "username") {
            setUsername(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    return (
        <Form $title={title} $fields={fields} $onSubmit={handleSubmit} $onChange={handleChange} />
    );

};

export default Login;