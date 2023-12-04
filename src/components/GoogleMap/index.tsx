import { MapMarker, UserLocation } from './types';
import { useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { GoogleMap, useLoadScript, InfoWindowF, DirectionsRenderer } from '@react-google-maps/api';
import { TextContainer, EvaluationContainer, WasteIconContainer, WasteIcon, Button, ButtonContainer, WindowContainer } from './styles';

import Key from '../../../config';
import Container from '../Container';
import { Tooltip } from '@mui/material';

import Marks from './Marks';
import Evaluations from './Evaluations';

const GoogleMaps = () => {

    const {isLoaded, loadError} = useLoadScript({

        googleMapsApiKey: Key,
    
    });

    const mapCenter = useMemo(() => {

        return {lat: -10.435013, lng: -45.162846,}

    }, []);

    const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);

    const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
    const [userLocation, setUserLocation] = useState<UserLocation>({
        loaded: false,
        coordinates: {
            lat: 0,
            lng: 0
        }
    });

    const page = useLocation();
    const locations = [
        {
            pathname: '/',
            title: 'Home'
        },
        {
            pathname: '/discard-points',
            title: 'Discard Points'
        }
    ];

    const [error, setError] = useState<string | null>(null);
    const [showComments, setShowComments] = useState<boolean>(false);

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    const onSuccess = (location: any) => {
        setUserLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        })
    };

    const onError = (error: any) => {
        setError(error.message);
    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        } else {
            setError("A geolocalização não é suportada por este navegador.");
        }
    }, []);

    if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;
    if (!isLoaded) return <div>Loading...</div>;

    const directionsService = new google.maps.DirectionsService();

    const directionsCallback = (result: any, status: any) => {
        if (status === 'OK') {
            setDirections(result);
        } else {
            setError(`error fetching directions ${result}`);
        }
    };

    if (error) return <div>{error}</div>;

    return (
        <GoogleMap mapContainerStyle={{height: '100%', width: '100%'}} center={mapCenter} zoom={15}>

            <Marks setSelectedMarker={setSelectedMarker} />

            {selectedMarker ? (
                <InfoWindowF
                    position={{lat: selectedMarker.latitude, lng: selectedMarker.longitude}}
                    onCloseClick={() => setSelectedMarker(null)}
                >
                    <Container $width="250px">
                        <WindowContainer>
                            <TextContainer>
                                <h2>{selectedMarker.name}</h2>
                                <p>{selectedMarker.description}</p>
                            </TextContainer>
                            <EvaluationContainer>
                                <h3>{selectedMarker.evaluation}</h3>
                            </EvaluationContainer>
                            <Container $width="100%" $height="auto" $gap="0.5rem">
                                {page.pathname === locations[1].pathname ? (
                                    <ButtonContainer>
                                        <Button onClick={() => {
                                            directionsService.route({
                                                origin: new google.maps.LatLng(userLocation.coordinates.lat, userLocation.coordinates.lng),
                                                destination: new google.maps.LatLng(selectedMarker.latitude, selectedMarker.longitude),
                                                travelMode: google.maps.TravelMode.DRIVING
                                            }, directionsCallback);
                                        }}>Ir</Button>
                                    </ButtonContainer>
                                ) : null}
                                <ButtonContainer>
                                    <Button onClick={() => toggleComments()}>{showComments ? 'Esconder' : 'Ver'} comentários</Button>
                                </ButtonContainer>
                            </Container>
                            {showComments ? (
                                <Evaluations discard_point_id={selectedMarker.id} />
                            ) : null}
                            <WasteIconContainer>
                                {selectedMarker.wastes.length > 0 ? (
                                    selectedMarker.wastes.map(waste => (
                                        <Tooltip title={waste.name} placement="top" key={waste.id}>
                                            <WasteIcon src={`../../src/assets/icons/${waste.name}.png`} />
                                        </Tooltip>
                                    ))
                                ) : <p>Não há tipos registrados de resíduos neste ponto de descarte.</p>}
                            </WasteIconContainer>
                        </WindowContainer>  
                    </Container>
                </InfoWindowF>
            ) : null}

            {directions ? (
                <DirectionsRenderer
                    options={{
                        directions: directions
                    }}
                />
            ) : null}
        
        </GoogleMap> 
    );

};

export default GoogleMaps;