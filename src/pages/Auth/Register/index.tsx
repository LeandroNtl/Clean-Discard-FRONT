import { RegisterForm } from "../../../components/Forms";
import api from "../../../services/api";
import { Fragment, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';

interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Register = () => {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [isRegistered, setIsRegistered] = useState(false);
    const [error, setError] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await api.post('/register', formData);
            setIsRegistered(true);
            toast.success(response.data.message);
        } catch (error: any) {
            toast.error(error.response.data.error);
            setError(error.response.data.error)
        }
    }

    if (isRegistered) {
        return <Navigate to="/auth/login" />
    }

    return (
        <Fragment>
            <ToastContainer />
            <RegisterForm $onSubmit={handleRegister} $fields={{ ...formData, handleChange }} $children={error ? <p>{error}</p> : null} />
        </Fragment>
    );

};

export default Register;