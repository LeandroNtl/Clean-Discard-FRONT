import { Waste, DiscardPoint, DiscardPointWaste, MapMarker } from '../types';
import { useEffect, useState } from 'react';

import api from '../../../services/api';
import Container from '../../Container';

interface UserLocation {
    loaded: boolean;
    coordinates: {
        lat: number;
        lng: number;
    }
}

interface MarksProps {
    userLocation: UserLocation;
}

const Points = ({ userLocation }: MarksProps) => {

    const [wastes, setWastes] = useState<Waste[]>([]);
    const [discardPoints, setDiscardPoints] = useState<DiscardPoint[]>([]);
    const [discardPointWastes, setDiscardPointWastes] = useState<DiscardPointWaste[]>([]);
    const [mapMarkers, setMapMarkers] = useState<MapMarker[]>([]);

    useEffect(() => {

        api.get('/wastes').then(response => {
            setWastes(response.data);
        });
        
        api.get('/discard-points').then(response => {
            setDiscardPoints(response.data);
        });

        api.get('/discard-point-wastes').then(response => {
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

            if (mapMarker.status === 'ativo') {
                mapMarkers.push(mapMarker);
            }

        });

        setMapMarkers(mapMarkers);

    };

    useEffect(() => {
        createMapMarkers();
    }, [wastes, discardPoints, discardPointWastes]);

    mapMarkers.sort((a, b) => {
        const distanceA = Math.sqrt(Math.pow(a.latitude - userLocation.coordinates.lat, 2) + Math.pow(a.longitude - userLocation.coordinates.lng, 2));
        const distanceB = Math.sqrt(Math.pow(b.latitude - userLocation.coordinates.lat, 2) + Math.pow(b.longitude - userLocation.coordinates.lng, 2));
        return distanceA - distanceB;
    });

    return (
        <>
            {mapMarkers.map(mapMarker => (
                <Container key={mapMarker.id} $width="100%" $border="2px solid #008000" $padding="0.5rem" $direction="column" $justify="space-between" $align="center" $radius="0.5rem" $margin="0.5rem" $gap="0.2rem" $resposive={{ $width: "100%", $padding:"0.5rem", $height: "100%", $border:"2px solid #008000",  $radius:"0.5rem" }}>
                    <h2>{mapMarker.name}</h2>
                    <p style={{ textAlign: "justify" }}>{mapMarker.description}</p>
                    <h3>Avaliação Geral: {mapMarker.evaluation}</h3>
                    <Container $width="100%" $direction="row" $justify="center" $align="center" $padding="0.5rem" $wrap="wrap" $resposive={{ $direction: "row", $justify: "center", $align: "center", $wrap: "wrap" }}>
                        {mapMarker.wastes.map(waste => (
                            <Container key={waste.id} $border="1px solid #008000" $padding="0.5rem" $direction="column" $justify="space-between" $align="center" $radius="0.5rem" $width='auto' $margin="0.2rem" $resposive={{ $width: "auto", $padding: "0.5rem", $margin: "0.2rem", $border:"1px solid #008000", $radius:"0.5rem" }}>
                                <Container $width="auto" $height="100%" $direction="column" $justify="center" $align="center">
                                    <p>{waste.name}</p>
                                </Container>
                            </Container>
                        ))}
                    </Container>
                </Container>
            ))}
        </>
    );

};

export default Points;