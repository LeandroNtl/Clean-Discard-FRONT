import api from '../../../services/api';
import { useState, useEffect, Fragment } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const [mensagem, setMensagem] = useState('')

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
            setDiscardPoints(response.data);
        })
    }, [mensagem]);

    return (
        <Fragment>
            <div className="container">
                <h1>Solicitações</h1>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped">
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
                                            <td>
                                                <button onClick={() => handleAccept(discardPoint.id)} className="btn btn-success">Aceitar</button>
                                                <button onClick={() => handleReject(discardPoint.id)} className="btn btn-danger">Rejeitar</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </Fragment>
    );
};

export default Solicitations;
