import { Form, FormField, FormLabel, FormInput, FormButton  } from '../styles';

interface EvaluationFormProps {
    $children?: React.ReactNode;
    $onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    $fields?: {
        score: number;
        comment: string;
        handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    }
    $discard_point_id?: number;
    $user_id?: number;
}

const EvaluationForm = (props: EvaluationFormProps) => {

    return (
        <Form onSubmit={props.$onSubmit}>
            <FormField $isRadio>
                <FormLabel htmlFor="score">Score</FormLabel>
                <FormInput type="radio" id="score" name="score" value={1} onChange={props.$fields?.handleChange} required /> 1
                <FormInput type="radio" id="score" name="score" value={2} onChange={props.$fields?.handleChange} required /> 2
                <FormInput type="radio" id="score" name="score" value={3} onChange={props.$fields?.handleChange} required /> 3
                <FormInput type="radio" id="score" name="score" value={4} onChange={props.$fields?.handleChange} required /> 4
                <FormInput type="radio" id="score" name="score" value={5} onChange={props.$fields?.handleChange} required /> 5
            </FormField>
            <FormField>
                <FormLabel htmlFor="comment">Comment</FormLabel>
                <FormInput type="text" id="comment" name="comment" placeholder="Digite seu comentário" autoComplete="on" value={props.$fields?.comment} onChange={props.$fields?.handleChange} required />
            </FormField>
            <FormButton type="submit">Enviar</FormButton>
        </Form>
    );

};

export default EvaluationForm;