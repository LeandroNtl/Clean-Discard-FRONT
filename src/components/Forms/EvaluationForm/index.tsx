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
            <FormLabel htmlFor="score">Pontos</FormLabel>
            <FormField $isRadio>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', alignItems: 'center' }}>
                    <FormInput type="radio" id="score" name="score" value={1} onChange={props.$fields?.handleChange} required /> 1
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', alignItems: 'center' }}>
                <FormInput type="radio" id="score" name="score" value={2} onChange={props.$fields?.handleChange} required /> 2
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', alignItems: 'center' }}>
                <FormInput type="radio" id="score" name="score" value={3} onChange={props.$fields?.handleChange} required /> 3
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', alignItems: 'center' }}>
                <FormInput type="radio" id="score" name="score" value={4} onChange={props.$fields?.handleChange} required /> 4
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', alignItems: 'center' }}>
                <FormInput type="radio" id="score" name="score" value={5} onChange={props.$fields?.handleChange} required /> 5
                </div>
            </FormField>
            <FormField>
                <FormLabel htmlFor="comment">Comentário</FormLabel>
                <FormInput type="text" id="comment" name="comment" placeholder="Digite seu comentário" autoComplete="on" value={props.$fields?.comment} onChange={props.$fields?.handleChange} required />
            </FormField>
            <FormButton type="submit">Enviar</FormButton>
        </Form>
    );

};

export default EvaluationForm;