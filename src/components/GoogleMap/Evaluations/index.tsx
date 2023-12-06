import { useEffect, useState, Fragment } from 'react';
import api from '../../../services/api';
import Container from '../../Container';
import { useCookies } from "react-cookie";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EvaluationForm } from "../../../components/Forms";
import tokenValidator from "../../../services/tokenValidator";
import { Button } from '../styles';

interface FormData {

    user_id: number;
    discard_point_id: number;
    score: number;
    comment: string;

}

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
    const [formData, setFormData] = useState<FormData>({
        user_id: 0,
        discard_point_id: 0,
        score: 0,
        comment: '',
    });

    const [cookies] = useCookies(['token', 'point']);
    const [user_id, setUser_id] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {

        api.get('/evaluations').then(response => {
            setEvaluations(response.data);
        });

        api.get('/users').then(response => {
            setUsers(response.data);
        });

        const verifyToken = async () => {
            try {

                const token = cookies.token;
                
                if (!token) {
                    return;
                }

                const isValid = await tokenValidator(token);

                if (!isValid.valid) {
                    return;
                }
                setUser_id(isValid.id);

            } catch (error) {
                return;
            }
        }

        verifyToken();

        setFormData((prevState) => ({
            ...prevState,
            user_id: user_id,
            discard_point_id: cookies.point
        }));

    }, [cookies.token, cookies.point, user_id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        const { name, value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {

            const response = await api.post('/evaluations', formData, {
                headers: {
                    Authorization: `Bearer ${cookies.token}`
                }
            });

            toast.success(response.data.message);

            setFormData((prevState) => ({
                ...prevState,
                score: 0,
                comment: ''
            }));

        } catch (error: any) {

            toast.error(error.response.data.error);

        }

    }

    return (
        <Fragment>
            
            <Container $width="95%" $height="120px" $direction="column" $justify="flex-start" $align="flex-start" $gap="0.5rem" $padding="0.5rem" $overflowY="auto">

                <Button onClick={() => setIsClicked(!isClicked)}>Avaliar</Button>

                {isClicked && 
                <Container $width="100%" $direction="column" $shadow="0 0.1rem 0.5rem #008000" $radius="0.5rem" $padding="0.5rem">
                    {user_id !== 0 ? (
                        <EvaluationForm $onSubmit={handleRegister} $fields={{...formData, handleChange: handleChange }} />
                    ) : (
                        <p>Faça login para avaliar</p>
                    )}
                </Container>
                }

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
            </Container>
            
        </Fragment>
    )

};

export default Evaluations;