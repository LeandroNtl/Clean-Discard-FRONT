import { Form, FormField, FormLabel, FormInput, FormButton  } from '../styles';

interface PointsFormProps {
    $children?: React.ReactNode;
    $onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    $fields?: {
        name: string;
        description: string;
        latitude: number;
        longitude: number;
        handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    }
}

const PointsForm = (props: PointsFormProps) => {

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
            <FormButton type="submit">Register</FormButton>
        </Form>
    );

};

export default PointsForm;