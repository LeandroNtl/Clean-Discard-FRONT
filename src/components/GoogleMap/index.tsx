import { Waste, DiscardPoint, DiscardPointWaste, MapMarker, UserLocation } from './types';
import { useEffect, useState, useMemo } from 'react';
import api from '../../services/api';
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF, DirectionsRenderer } from '@react-google-maps/api';
import { TextContainer, EvaluationContainer, WasteIconContainer, WasteIcon, Button, ButtonContainer } from './styles';
import Key from '../../../config';
import { Tooltip } from '@mui/material';
import Container from '../Container';
import { useLocation } from 'react-router-dom';

const GoogleMaps = () => {

    const {isLoaded, loadError} = useLoadScript({

        googleMapsApiKey: Key,
    
    });

    const mapCenter = useMemo(() => {

        return {lat: -10.435013, lng: -45.162846,}

    }, []);

    const [wastes, setWastes] = useState<Waste[]>([]);
    const [discardPoints, setDiscardPoints] = useState<DiscardPoint[]>([]);
    const [discardPointWastes, setDiscardPointWastes] = useState<DiscardPointWaste[]>([]);
    const [mapMarkers, setMapMarkers] = useState<MapMarker[]>([]);

    const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);

    const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
    const [userLocation, setUserLocation] = useState<UserLocation>({
        loaded: false,
        coordinates: {
            lat: 0,
            lng: 0
        }
    });

    // VERIFICA SE A PÁGINA ATUAL É A DE LOCAIS DE DESCARTE
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

    useEffect(() => {

        api.get('/wastes').then(response => {
            setWastes(response.data);
        });
        
        api.get('/discard_points').then(response => {
            setDiscardPoints(response.data);
        });

        api.get('/discard_point_wastes').then(response => {
            setDiscardPointWastes(response.data);
        });

    }, []);

    const createMapMarkers = () => {

        const mapMarkers: MapMarker[] = [];

        discardPoints.forEach(discardPoint => {
            const mapMarker: MapMarker = {
                id: discardPoint.id,
                name: discardPoint.name,
                latitude: discardPoint.latitude,
                longitude: discardPoint.longitude,
                status: discardPoint.status,
                description: discardPoint.description,
                evaluation: discardPoint.evaluation,
                wastes: []
            };

            discardPointWastes.forEach(discardPointWaste => {
                if (discardPointWaste.discard_point_id === discardPoint.id) {
                    wastes.forEach(waste => {
                        if (waste.id === discardPointWaste.waste_id) {
                            mapMarker.wastes.push(waste);
                        }
                    });
                }
            });

            mapMarkers.push(mapMarker);

        });

        setMapMarkers(mapMarkers);

    };

    useEffect(() => {
        createMapMarkers();
    }, [wastes, discardPoints, discardPointWastes]);

    // DIRECTIONS
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
        <GoogleMap mapContainerStyle={{height: '100%', width: '100%' }} center={mapCenter} zoom={15}>

            {mapMarkers.map((marker) => (
                <MarkerF
                    key={marker.id}
                    position={{lat: marker.latitude, lng: marker.longitude}}
                    onClick={() => {
                        setSelectedMarker(marker);
                    }}
                />
            ))}

            {selectedMarker ? (
                <InfoWindowF
                    position={{lat: selectedMarker.latitude, lng: selectedMarker.longitude}}
                    onCloseClick={() => setSelectedMarker(null)}
                >
                    <Container $width="95%" $gap="0.5rem" $direction="column">
                        <TextContainer>
                            <h2>{selectedMarker.name}</h2>
                            <p>{selectedMarker.description}</p>
                        </TextContainer>
                        <EvaluationContainer>
                            <h3>{selectedMarker.evaluation}</h3>
                        </EvaluationContainer>
                        {page.pathname === locations[1].pathname ? (
                            <ButtonContainer>
                                <Button onClick={() => {
                                    directionsService.route({
                                        origin: new google.maps.LatLng(userLocation.coordinates.lat, userLocation.coordinates.lng),
                                        destination: new google.maps.LatLng(selectedMarker.latitude, selectedMarker.longitude),
                                        travelMode: google.maps.TravelMode.DRIVING
                                    }, directionsCallback);
                                }}>Directions</Button>
                            </ButtonContainer>
                        ) : null}
                        <WasteIconContainer>
                            {selectedMarker.wastes.map(waste => (
                                <Tooltip title={waste.name} placement="top" key={waste.id}>
                                    <WasteIcon src={`../../src/assets/icons/${waste.name}.png`} />
                                </Tooltip>
                            ))}
                        </WasteIconContainer>
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