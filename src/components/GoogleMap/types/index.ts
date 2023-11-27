
export interface Waste {
    id: number,
    name: string,
    description: string,
    icon: string
}

export interface Marks {

    id: number,
    name: string,
    status: number,
    description: string,
    latitude: number,
    longitude: number,
    evaluation: number,
    wastes: Waste[],
    icon: string

}
