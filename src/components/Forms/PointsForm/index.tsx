import { Form, FormField, FormLabel, FormInput, FormButton  } from '../styles';
import api from '../../../services/api';
import { useState, useEffect } from 'react';
import Container from '../../Container';

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
        waste_id: number[];
        handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
                <Container $align='flex-start' $justify='flex-start' $wrap='wrap' $gap='0.5rem' $width='100%' $height='100%' $padding='0.5rem' $border='1px solid #ccc' $radius='0.5rem'>
                    {wastes.map(waste => (
                        <label key={waste.id}>
                            <input type="checkbox" name="waste_id" value={waste.id} onChange={props.$fields?.handleChange} />
                            {waste.name}
                        </label>
                    ))}
                </Container>
            </FormField>

            <FormButton type="submit">Register</FormButton>
        </Form>
    );

};

export default PointsForm;