import api from "../../services/api";
import { PointsForm } from "../../components/Forms";

import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate  } from 'react-router-dom';
import { Fragment, useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

interface FormData {
    name: string;
    description: string;
    latitude: number;
    longitude: number;
    waste_id: number[];
}

interface UserLocation {
    loaded: boolean;
    coordinates: {
        lat: number;
        lng: number;
    }
}

const DiscardPointRegister = () => {

    const [userLocation, setUserLocation] = useState<UserLocation>({
        loaded: false,
        coordinates: {
            lat: 0,
            lng: 0
        }
    });

    const [formData, setFormData] = useState<FormData>({
        name: '',
        description: '',
        latitude: 0,
        longitude: 0,
        waste_id: []
    });

    const [mensagem, setMensagem] = useState('')
    const [error, setError] = useState<string | null>(null);

    // const navigate = useNavigate();

    const onSuccess = (location: any) => {
        setUserLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        })
    }

    const onError = (error: any) => {
        setError(error.message);
    }

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            setError("Geolocation is not supported by your browser");
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);

        setFormData((prevState) => ({
            ...prevState,
            latitude: userLocation.coordinates.lat,
            longitude: userLocation.coordinates.lng
        }));    

    }, [userLocation]);

    if (error) {
        return <p>{error}</p>;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value, checked, type } = e.target;

        if (type === 'checkbox') {
            setFormData((prevState) => ({
                ...prevState,
                [name]: checked
                ? [...prevState.waste_id || [], Number(value)]
                : (prevState.waste_id || []).filter((waste) => waste !== Number(value))
            }));

        } else {

            setFormData((prevState) => ({
                ...prevState,
                [name]: value
            }));
        
        }
    }

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await api.post('/discard-points', formData);
            toast.success(response.data.message);
            setMensagem("Ponto registrado com sucesso!");

            const id = response.data.id;
            const wastes = formData.waste_id;

            for (let i = 0; i < wastes.length; i++) {
                const waste = wastes[i];
                await api.post(`/discard-point-wastes`, { discard_point_id: id, waste_id: waste });
            }

            setFormData({
                name: '',
                description: '',
                latitude: 0,
                longitude: 0,
                waste_id: []
            });

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

export default DiscardPointRegister;