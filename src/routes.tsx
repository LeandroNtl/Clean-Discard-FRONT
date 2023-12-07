import { createBrowserRouter, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Page from './pages/Page';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import DiscardPoints from './pages/DiscardPoints';
import Auth from './pages/Auth';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import { Wastes, Admin } from './pages/Admin';
import Cookies from 'universal-cookie';
import tokenValidator from './services/tokenValidator';
// import Evaluations from './pages/Admin/Evaluations';
import DiscardPointRegister from './pages/DiscardPointRegister';
import Solicitations from './pages/Admin/Solicitations';

const cookies = new Cookies();

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute = (props : ProtectedRouteProps) => {
    
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const verifyToken = async () => {

            try {
                const token = cookies.get('token');
                
                if (!token) {
                    navigate('/auth/login');
                    return;
                }

                const isValid = await tokenValidator(token);

                if (!isValid.valid) {
                    navigate('/auth/login');
                    return;
                }
            } catch (error) {
                navigate('/auth/login');
                return;
            } finally {
                setIsLoading(false);
            }
        }
    
        verifyToken();  

    }, [navigate]);

    if (isLoading) {
        return (
            <div>Carregando...</div>
        )
    } return (
        <div>
            {props.children}
        </div>
    )

};

const BrowserRouter = createBrowserRouter([

    {
        path: '/',
        element: <Page />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/discard-points',
                element: <DiscardPoints />
            },
            {
                path: '/admin',
                element: <ProtectedRoute><Admin /></ProtectedRoute>
            },
            {
                path: '/admin/wastes',
                element: <ProtectedRoute><Wastes /></ProtectedRoute>
            },
            {
                path: '/discard-point-register',
                element: (
                    <ProtectedRoute>
                        <DiscardPointRegister />
                    </ProtectedRoute>
                )
            },
            {
                path: '/admin/solicitations',
                element: (
                    <ProtectedRoute>
                        <Solicitations />
                    </ProtectedRoute>
                )
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    },
    {
        path: '/auth/',
        element: <Auth />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/register',
                element: <Register />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]);

export default BrowserRouter;