import { useEffect, useState } from 'react';
import api from '../../../services/api';
import Container from '../../Container';

interface EvaluationsProps {

    id: number;
    discard_point_id: number;
    user_id: number;
    score: number;
    comment: string;

}

interface UsersProps {
    
    id: number;
    name: string;
    email: string

}

const Evaluations = ({ discard_point_id }: any) => {

    const [evaluations, setEvaluations] = useState<EvaluationsProps[]>([]);
    const [users, setUsers] = useState<UsersProps[]>([]);

    useEffect(() => {

        api.get('/evaluations').then(response => {
            setEvaluations(response.data);
        });

        api.get('/users').then(response => {
            setUsers(response.data);
        });

    }, []);

    return (
        <Container $width="100%" $height="120px" $direction="column" $justify="flex-start" $align="flex-start" $gap="0.5rem" $overflowY="auto">
            {evaluations.map(evaluation => {
                if (evaluation.discard_point_id === discard_point_id) {
                    return (
                        <Container key={evaluation.id} $width="100%" $height="auto" $direction="column" $justify="flex-start" $align="flex-start" $border="1px solid #000" $radius="0.5rem" $padding="0.5rem" $gap="0.5rem">
                            <p>{users.map(user => {
                                if (user.id === evaluation.user_id) {
                                    return user.name;
                                }
                            })}, {evaluation.score}</p>
                            <p>{evaluation.comment}</p>
                        </Container>
                    )
                }
            })}
            <button>Adicionar comentário</button>
        </Container>
    )

};

export default Evaluations;