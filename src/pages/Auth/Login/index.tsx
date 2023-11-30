import { LoginForm } from '../../../components/Forms';
import api from '../../../services/api';
import { Fragment, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';

interface FormData {
    email: string;
    password: string;
}

const Login = () => {

    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: ''
    });

    const [token, setToken] = useState('')
    const [error, setError] = useState('')

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
            setToken(response.data.token)
        } catch (error: any) {
            toast.error(error.response.data.error);
            setError(error.response.data.error)
        }
    }

    if (token) {

        return <Navigate to="/" />

    }

    return (
        <Fragment>
            <ToastContainer />
            <LoginForm $onSubmit={handleLogin} $fields={{ ...formData, handleChange }} $children={error ? <p>{error}</p> : null} />
        </Fragment>  
    );

}

export default Login;