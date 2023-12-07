import api from "../../services/api";
import { PointsForm } from "../../components/Forms";

import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate  } from 'react-router-dom';
import Key from "../../../config";
import { useState, useEffect } from 'react';
import Container from "../../components/Container";
import { toast, ToastContainer } from 'react-toastify';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

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

    const {isLoaded, loadError} = useLoadScript({

        googleMapsApiKey: Key,
    
    });

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

    if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;
    if (!isLoaded) return <div>Loading...</div>;

    const clickHandler = (e: any) => {
        setFormData((prevState) => ({
            ...prevState,
            latitude: e.latLng.lat(),
            longitude: e.latLng.lng()
        }));
    }

    return (
        <Container $width="80vw" $height="80vh" $align="center" $justify="center" $padding="0.5rem" $resposive={{ $direction: "column", $padding: "0.5rem", $gap: "0.5rem", $justify: "center", $width: "100vw" }}>

            <ToastContainer />

            <Container $width="60%" $height="100%" $justify="space-between" $padding="0.5rem" $resposive={{ $direction: "column", $padding: "0.5rem", $gap: "0.5rem", $justify: "space-between", $width: "100vw", $height:"30vh" }}>
                <GoogleMap mapContainerStyle={{height: '100%', width: '100%'}} center={{ lat: userLocation.coordinates.lat, lng: userLocation.coordinates.lng }} zoom={15} onClick={clickHandler} />
            </Container>

            <Container $width="40%" $height="100%" $direction="column" $padding="3rem" $justify="flex-start" $align="center" $overflowY='auto' $radius="0.5rem" $shadow="0 0.5rem 1rem #008000" $resposive={{ $width: "100vw", $direction: "row", $overflowX: "auto", $overflowY: "none", $padding: "0.5rem", $gap: "0.5rem", $justify: "flex-start", $align: "center" }}>
                <PointsForm $onSubmit={handleRegister} $fields={{ ...formData, handleChange }} $children={mensagem ? mensagem : ''} />
            </Container>

        </Container> 
    );

};

export default DiscardPointRegister;