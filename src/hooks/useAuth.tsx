import { useEffect, useState } from "react";
import api from "../services/api";

interface User {
  id: string;
  username: string;
  email: string;
}

const useAuth = () => {

    const [user, setUser] = useState<User | null>(null);
    
    useEffect(() => {
        const storagedUser = localStorage.getItem("@Auth:user");
        const storagedToken = localStorage.getItem("@Auth:token");
    
        if (storagedUser && storagedToken) {
        api.defaults.headers["Authorization"] = `Bearer ${storagedToken}`;
        setUser(JSON.parse(storagedUser));
        }
    }, []);
    
    const signIn = async (username: string, password: string) => {

        console.log("Entrou no signIn")

        const response = await api.post("/users/login", {
            username,
            password,
        });

        console.log(response)
    
        setUser(response.data.user);
    
        api.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;
    
        localStorage.setItem("@Auth:user", JSON.stringify(response.data.user));
        localStorage.setItem("@Auth:token", response.data.token);

    };
    
    const signOut = () => {
        localStorage.clear();
        setUser(null);
    };
    
    return { signed: !!user, user, signIn, signOut };
    };

export { useAuth };