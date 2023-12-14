import api from '../../../services/api';
import { useState, useEffect, Fragment } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import tokenValidator from "../../../services/tokenValidator";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
import Table from '../../../components/Tables/styles';
import Container from '../../../components/Container';
import { Button } from '../../../components/GoogleMap/styles';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface DiscardPoint {
    id: number;
    status: string;
    name: string;
    description: string;
    latitude: number;
    longitude: number;
    evaluation: number;
}

const Solicitations = () => {

    const [discardPoints, setDiscardPoints] = useState<DiscardPoint[]>([]);
    const [cookies] = useCookies(['token']);
    const [mensagem, setMensagem] = useState('')
    const navigate = useNavigate();

    const handleAccept = async (id: number) => {
        try {
            const response = await api.put(`/discard-points/${id}`, { status: 'ativo' });
            toast.success(response.data.message);
            setMensagem("Solicitação aceita com sucesso!");
        } catch (error: any) {
            toast.error(error.response.data.message);
        }
    }

    const handleReject = async (id: number) => {
        try {
            const response = await api.put(`/discard-points/${id}`, { status: 'rejeitado' });
            toast.success(response.data.message);
            setMensagem("Solicitação rejeitada com sucesso!");
        } catch (error: any) {
            toast.error(error.response.data.message);
        }
    }

    useEffect(() => {

        api.get('/discard-points').then(response => {
            response.data = response.data.filter((discardPoint: DiscardPoint) => discardPoint.status !== 'ativo' && discardPoint.status !== 'rejeitado');
            setDiscardPoints(response.data);
        })

        const verifyToken = async () => {
                
            try {
                const token = cookies.token;
                
                if (!token) {
                    return;
                }

                const isValid = await tokenValidator(token);

                if (!isValid.valid) {
                    alert("Você não está logado!");
                    navigate('auth/login');
                }

                const isAdmin = isValid.role

                if (isAdmin !== 1) {
                    alert("Você não tem permissão para acessar esta página!");
                    navigate('/');
                }
                
            } catch (error) {
                return;
            }
        }

        verifyToken();

    }, [mensagem, cookies]);

    return (
        <Fragment>
            <Container $width="100%" $padding="1rem" $direction="column" $justify="center" $align="center">
                <h1>Solicitações</h1>
                <div>
                    <div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Descrição</th>
                                    <th>Latitude</th>
                                    <th>Longitude</th>
                                    <th>Avaliação</th>
                                    <th>Status</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    discardPoints.map(discardPoint => (
                                        <tr key={discardPoint.id}>
                                            <td>{discardPoint.name}</td>
                                            <td>{discardPoint.description}</td>
                                            <td>{discardPoint.latitude}</td>
                                            <td>{discardPoint.longitude}</td>
                                            <td>{discardPoint.evaluation}</td>
                                            <td>{discardPoint.status}</td>
                                            <td style={{ display: 'flex', justifyContent: 'space-around', gap: '1rem' }}>
                                                <Button onClick={() => handleAccept(discardPoint.id)} className="btn btn-success">Aceitar</Button>
                                                <Button onClick={() => handleReject(discardPoint.id)} className="btn btn-danger">Rejeitar</Button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Container>
            <ToastContainer />
        </Fragment>
    );
};

export default Solicitations;
