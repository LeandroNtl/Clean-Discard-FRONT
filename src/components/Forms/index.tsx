import { FormTitle, StyledForm, FormField, FormLabel, FormInput, FormButton } from './styles';

interface FormProps {
    $title?: string;
    $onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    $onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    $fields: {
        $label: string;
        $type: string;
        $id: string;
        $name: string;
        $value?: string;
        $placeholder?: string;
        $required: boolean;
        $autocomplete?: string;
    }[];

}

const Form = ({ $title, $fields, $onSubmit }: FormProps) => {

    return (
        <StyledForm onSubmit={$onSubmit}>
            <FormTitle>{$title}</FormTitle>
            {$fields.map((field, index) => (
                <FormField key={index}>
                    <FormLabel htmlFor={field.$id}>{field.$label}</FormLabel>
                    <FormInput type={field.$type} id={field.$id} name={field.$name} value={field.$value} placeholder={field.$placeholder} required={field.$required} autoComplete={field.$autocomplete} />
                </FormField>
            ))}
            <FormButton type="submit">Enviar</FormButton>
        </StyledForm>
    );

};

export default Form;