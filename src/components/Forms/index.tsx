import { FormTitle, StyledForm, FormField, FormLabel, FormInput, FormButton, SelectFormField, SelectFormLabel, SelectForm, SelectFormOption, CheckboxFormField, CheckboxLabel, CheckboxInput, FormFieldSet, Legend } from './styles';

interface FormProps {
    $title?: string;
    $onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    $onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    $fields: {
        $label: string;
        $type: string;
        $id: string;
        $name: string;
        $value?: string;
        $placeholder?: string;
        $required?: boolean;
        $autocomplete?: string;
        $options?: {
            id: number;
            value: string;
            label: string;
        }[] | any;
    }[];

}

const Form = ({ $title, $fields, $onSubmit }: FormProps) => {

    return (
        <StyledForm onSubmit={$onSubmit}>
            <FormTitle>{$title}</FormTitle>
            {$fields.map((field, index) => {
                if (field.$type === 'select') {
                    return (
                        <SelectFormField key={index}>
                            <SelectFormLabel htmlFor={field.$id}>{field.$label}</SelectFormLabel>
                            <SelectForm id={field.$id} name={field.$name} required={field.$required}>
                                {field.$options.map((option: any, index: any) => (
                                    <SelectFormOption key={index} value={option.value}>{option.label}</SelectFormOption>
                                ))}
                            </SelectForm>
                        </SelectFormField>
                    );
                } else if (field.$type === 'checkbox') {
                    return (
                        <FormFieldSet key={index}>
                            <Legend>{field.$label}</Legend>
                            <CheckboxFormField>
                                {field.$options.map((option: any, index: any) => (
                                    <CheckboxLabel key={index} htmlFor={option.value}>
                                        <CheckboxInput type="checkbox" id={option.value} name={option.value} value={option.value} />
                                        {option.label}
                                    </CheckboxLabel>
                                ))}
                            </CheckboxFormField>
                        </FormFieldSet>
                    );
                } else {
                    return (
                        <FormField key={index}>
                            <FormLabel htmlFor={field.$id}>{field.$label}</FormLabel>
                            <FormInput type={field.$type} id={field.$id} name={field.$name} value={field.$value} placeholder={field.$placeholder} required={field.$required} autoComplete={field.$autocomplete} />
                        </FormField>
                    );
                }
            })}
            <FormButton type="submit">Enviar</FormButton>
        </StyledForm>
    );

};

export default Form;