import { PointsForm } from '../../../components/Forms';
import api from '../../../services/api';
import { Fragment, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
    name: string;
    description: string;
    latitude: number;
    longitude: number;
    waste_id: number;
}

const Points = () => {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        description: '',
        latitude: 0,
        longitude: 0,
        waste_id: 0,
    });

    const [mensagem, setMensagem] = useState('')

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
            console.log(formData);
            const response = await api.post('/discard-points', formData);
            toast.success(response.data.message);
            setMensagem("Ponto registrado com sucesso!");

            const id = response.data.id;
            const waste = Number(formData.waste_id)
           
            try {
                const response = await api.post(`/discard-point-wastes`, { discard_point_id: id, waste_id: waste });
                toast.success(response.data.message);
                setMensagem("Ponto registrado com sucesso!");
            } catch (error: any) {
                toast.error(error.response.data.error);
                setMensagem("Erro ao registrar ponto!");
            }
            

        } catch (error: any) {
            toast.error(error.response.data.error);
            setMensagem("Erro ao registrar ponto!");
        }
    }

    return (
        <Fragment>
            <ToastContainer />
            <PointsForm $onSubmit={handleRegister} $fields={{ ...formData, handleChange }} $children={mensagem ? mensagem : ''} />
        </Fragment>  
    );

};

export default Points;
