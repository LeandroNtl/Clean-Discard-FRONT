
export interface Waste {
    
    id: number,
    name: string,
    description: string

}

export interface DiscardPoint {

    id: number,
    name: string,
    status: string,
    description: string,
    latitude: number,
    longitude: number,
    evaluation: number,

}

export interface DiscardPointWaste {

    id: number,
    discard_point_id: number,
    waste_id: number,

}

export interface MapMarker {
    
    id: number,
    name: string,
    status: string,
    description: string,
    latitude: number,
    longitude: number,
    evaluation: number,
    wastes: Waste[]

}

export interface UserLocation {

    loaded: boolean,
    coordinates: {
        lat: number,
        lng: number
    }
    
} 