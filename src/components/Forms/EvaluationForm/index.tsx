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
            <FormField>
                <FormLabel htmlFor="score">Score</FormLabel>
                <FormInput type="number" id="score" name="score" placeholder="Digite sua nota" autoComplete="on" value={props.$fields?.score} onChange={props.$fields?.handleChange} required />
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