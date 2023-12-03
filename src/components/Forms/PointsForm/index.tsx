import { Form, FormField, FormLabel, FormInput, FormButton  } from '../styles';
import api from '../../../services/api';
import { useState, useEffect } from 'react';

type Waste = {
    id: number;
    name: string;
}
interface PointsFormProps {
    $children?: React.ReactNode;
    $onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    $fields?: {
        name: string;
        description: string;
        latitude: number;
        longitude: number;
        waste_id: number;
        handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    }
}

const PointsForm = (props: PointsFormProps) => {

    const [wastes, setWastes] = useState<Waste[]>([]);

    useEffect(() => {
        api.get('wastes').then(response => {
            setWastes(response.data);
        });
    }, []);

    return (
        <Form onSubmit={props.$onSubmit}>
            <h2>Register Point</h2>
            {props.$children}
            <FormField>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormInput type="text" id="name" name="name" placeholder="Digite o nome do ponto" autoComplete="on" value={props.$fields?.name} onChange={props.$fields?.handleChange} required />
            </FormField>
            <FormField>
                <FormLabel htmlFor="description">Description</FormLabel>
                <FormInput type="text" id="description" name="description" placeholder="Digite a descrição do ponto" autoComplete="on" value={props.$fields?.description} onChange={props.$fields?.handleChange} required />
            </FormField>
            <FormField>
                <FormLabel htmlFor="latitude">Latitude</FormLabel>
                <FormInput type="number" id="latitude" name="latitude" placeholder="Digite a latitude do ponto" autoComplete="on" value={props.$fields?.latitude} onChange={props.$fields?.handleChange} required />
            </FormField>
            <FormField>
                <FormLabel htmlFor="longitude">Longitude</FormLabel>
                <FormInput type="number" id="longitude" name="longitude" placeholder="Digite a longitude do ponto" autoComplete="on" value={props.$fields?.longitude} onChange={props.$fields?.handleChange} required />
            </FormField>
            <FormField>
                <FormLabel htmlFor="wastes">Wastes</FormLabel>
                <select name="waste_id" id="wastes" value={props.$fields?.waste_id} onChange={props.$fields?.handleChange} required>
                    <option value="">Selecione um resíduo</option>
                    {wastes.map(waste => (
                        <option key={waste.id} value={waste.id}>{waste.name}</option>
                    ))}
                </select>
            </FormField>

            <FormButton type="submit">Register</FormButton>
        </Form>
    );

};

export default PointsForm;