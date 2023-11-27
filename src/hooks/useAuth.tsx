import { createContext, useCallback, useState, useContext, useEffect } from "react";
import api from "../services/api";

// retorno da api
// return { "token": create_access_token(identity=user, fresh=True), "user": user }

interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
    user: object;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
    loading: boolean;
}   

interface AuthState {
    token: string;
    user: object;
}

interface User {
    id: string;
    username: string;
    email: string;
}

interface Response {
    token: string;
    user: User;
}

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [data, setData] = useState<AuthState>({} as AuthState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const token = localStorage.getItem('@Auth:token');
            const user = localStorage.getItem('@Auth:user');

            if (token && user) {
                setData({ token, user: JSON.parse(user) });
            }

            setLoading(false);
        }

        loadStorageData();
    }, []);

    const signIn = useCallback(async ({ username, password }: SignInCredentials) => {
        const response = await api.post<Response>('/users/login', {
            username,
            password
        });

        const { token, user } = response.data;

        localStorage.setItem('@Auth:token', token);
        localStorage.setItem('@Auth:user', JSON.stringify(user));

        setData({ token, user });
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('@Auth:token');
        localStorage.removeItem('@Auth:user');

        setData({} as AuthState);
    }, []);

    return (
        <AuthContext.Provider value={{ user: data.user, signIn, signOut, loading }}>
            {children}
        </AuthContext.Provider>
    )
};

const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};

export { AuthProvider, useAuth, AuthContext };

// para usar o useAuth, basta importar o hook e chamar a função

// para usar o AuthProvider, basta importar o componente e colocar ele por volta dos componentes que precisam de autenticação