import { LoginForm } from '../../../components/Forms';
import api from '../../../services/api';
import { Fragment, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

interface FormData {
    email: string;
    password: string;
}

const Login = () => {

    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: ''
    });

    const [mensagem, setMensagem] = useState('')
    const [cookies, setCookie] = useCookies(['token']);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await api.post('/auth/login', formData);
            setCookie('token', response.data.token, { path: '/' });

            if (cookies.token) {
                toast.success('Login realizado com sucesso!');
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            }

        } catch (error: any) {
            toast.error(error.response.data.error);
            setMensagem("Erro ao realizar login!");
        }
    }

    return (
        <Fragment>
            <ToastContainer />
            <LoginForm $onSubmit={handleLogin} $fields={{ ...formData, handleChange }} $children={mensagem ? mensagem : ''} />
        </Fragment>  
    );

}

export default Login;