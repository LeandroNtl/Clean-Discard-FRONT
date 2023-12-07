import { Waste, DiscardPoint, DiscardPointWaste, MapMarker } from '../types';
import { MarkerF } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { useCookies } from "react-cookie";
import api from '../../../services/api';

interface MarksProps {
    setSelectedMarker: (marker: MapMarker | null) => void;
}

const Marks = ({ setSelectedMarker }: MarksProps) => {

    const [wastes, setWastes] = useState<Waste[]>([]);
    const [discardPoints, setDiscardPoints] = useState<DiscardPoint[]>([]);
    const [discardPointWastes, setDiscardPointWastes] = useState<DiscardPointWaste[]>([]);
    const [mapMarkers, setMapMarkers] = useState<MapMarker[]>([]);
    const [cookies, setCookies] = useCookies(['point']);
    cookies

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

            mapMarkers.push(mapMarker);

        });

        setMapMarkers(mapMarkers);

    };

    useEffect(() => {
        createMapMarkers();
    }, [wastes, discardPoints, discardPointWastes]);

    return (
        <>
            {mapMarkers.map(mapMarker => (
                <MarkerF
                    key={mapMarker.id}
                    position={{ lat: mapMarker.latitude, lng: mapMarker.longitude }}
                    onClick={() => {
                        setSelectedMarker(mapMarker);
                        setCookies('point', mapMarker.id, { path: '/' });
                    }}
                />
            ))}

            
        </>
    );

};

export default Marks;