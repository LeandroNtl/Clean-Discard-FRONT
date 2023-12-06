import Container from "../../components/Container";
import GoogleMaps from "../../components/GoogleMap";
import Points from "../../components/GoogleMap/Points";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from "react";

interface UserLocation {
    loaded: boolean;
    coordinates: {
        lat: number;
        lng: number;
    }
}

const DiscardPoints = () => {

    const [userLocation, setUserLocation] = useState<UserLocation>({
        loaded: false,
        coordinates: {
            lat: 0,
            lng: 0
        }
    });

    const [error, setError] = useState<string | null>(null);

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
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    return (

        <Container $width="100%" $height="100%" $justify="space-between" $padding="0.5rem" $resposive={{ $direction: "column", $padding: "0.5rem", $gap: "0.5rem", $justify: "space-between", $width: "100vw" }}>
            <ToastContainer />
            <Container $width="74%" $height="100%" $border="2px solid #008000" $resposive={{ $width: "100%", $height: "60vh", $padding: "0.5rem", $border: "2px solid #008000" }}>
                <GoogleMaps />
            </Container>
            <Container $width="25%" $height="89vh" $border="2px solid #008000" $direction="column" $padding="0.5rem" $justify="space-between" $align="center" $overflowY='auto' $radius="0.5rem" $resposive={{ $width: "100vw", $direction: "row", $overflowX: "auto", $overflowY: "none", $padding: "0.5rem", $gap: "0.5rem", $justify: "flex-start", $align: "center" }}> 
                <Points userLocation={userLocation} />
            </Container>
        </Container>

    );

};

export default DiscardPoints;