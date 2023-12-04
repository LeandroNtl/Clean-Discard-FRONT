import { useState, useEffect } from "react";
import api from "../../../services/api";
import { useCookies } from "react-cookie";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EvaluationForm } from "../../../components/Forms";

interface FormData {

    user_id: number;
    discard_point_id: number;
    score: number;
    comment: string;

}

const Evaluations = () => {

    const [formData, setFormData] = useState<FormData>({
        user_id: 0,
        discard_point_id: 0,
        score: 0,
        comment: '',
    });

    const [cookies] = useCookies(['token', 'user', 'point']);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        const { name, value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await api.post('/evaluations', formData, {
                headers: {
                    Authorization: `Bearer ${cookies.token}`
                }
            });
            toast.success(response.data.message);
        } catch (error: any) {
            toast.error(error.response.data.error);
        }
    }

    useEffect(() => {
        setFormData((prevState) => ({
            ...prevState,
            user_id: cookies.user,
            discard_point_id: cookies.point
        }));
    }, []);

    return (
        <>
            <ToastContainer />
            <EvaluationForm $onSubmit={handleRegister} $fields={{ ...formData, handleChange }} />
        </>
    );

};

export default Evaluations;