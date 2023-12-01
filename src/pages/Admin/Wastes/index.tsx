import { useState, useEffect } from "react";
import api from "../../../services/api";
import { useCookies } from "react-cookie";

interface Waste {
    name: string;
    description: string;
}

const Wastes = () => {

    const [cookies] = useCookies(['token']);

    const [waste, setWaste] = useState<Waste>({
        name: '',
        description: ''
    });

    const [wastes, setWastes] = useState<Waste[]>([]);

    useEffect(() => {
        api.get('/wastes', {
            headers: {
                Authorization: `Bearer ${cookies.token}`
            }
        }).then(response => {
            setWastes(response.data);
        });
    }), [];
    
    const handleCreateWaste = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            name: waste.name,
            description: waste.description
        }

        api.post('/wastes', data, {
            headers: {
                Authorization: `Bearer ${cookies.token}`
            }
        }).then(response => {
            setWastes([...wastes, response.data]);
        });
    }

    return (
        <div>
            <h1>Resíduos cadastrados</h1>
            <ul>
                {wastes.map(waste => (
                    <li key={waste.name}>
                        <span>{waste.name}</span>
                        <span>{waste.description}</span>
                    </li>
                ))}
            </ul>
            <h1>Cadastro</h1>
            <form onSubmit={handleCreateWaste}>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Nome do resíduo"
                    onChange={e => setWaste({...waste, name: e.target.value})}
                />
                <input 
                    type="text" 
                    name="description" 
                    id="description" 
                    placeholder="Descrição do resíduo"
                    onChange={e => setWaste({...waste, description: e.target.value})}
                />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
    
};

export default Wastes;