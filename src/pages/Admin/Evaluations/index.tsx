import { useState, useEffect, Fragment } from "react";
import api from "../../../services/api";
import { useCookies } from "react-cookie";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EvaluationForm } from "../../../components/Forms";
import tokenValidator from "../../../services/tokenValidator";

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

    const [cookies] = useCookies(['token', 'point']);
    const [user_id, setUser_id] = useState(0);

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

            setFormData((prevState) => ({
                ...prevState,
                score: 0,
                comment: ''
            }));

            setTimeout(() => {
                window.location.href = '/discard-points';
            }, 3000);
        } catch (error: any) {
            toast.error(error.response.data.error);
        }
    }

    useEffect(() => {

        const verifyToken = async () => {
            try {

                const token = cookies.token;
                
                if (!token) {
                    return;
                }

                const isValid = await tokenValidator(token);

                if (!isValid.valid) {
                    return;
                }
                setUser_id(isValid.id);

            } catch (error) {
                return;
            }
        }

        verifyToken();

        setFormData((prevState) => ({
            ...prevState,
            user_id: user_id,
            discard_point_id: cookies.point
        }));

    }, []);

    return (
        <Fragment>
            <ToastContainer />
            <EvaluationForm $onSubmit={handleRegister} $fields={{ ...formData, handleChange }} />
        </Fragment>
    );

};

export default Evaluations;