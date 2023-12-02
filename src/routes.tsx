import { createBrowserRouter, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Page from './pages/Page';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import DiscardPoints from './pages/DiscardPoints';
import Auth from './pages/Auth';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import { Wastes, Admin, Points } from './pages/Admin';
import Cookies from 'universal-cookie';
import tokenValidator from './services/tokenValidator';

const cookies = new Cookies();

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute = (props : ProtectedRouteProps) => {
    
    const navigate = useNavigate();

    useEffect(() => {

        const token = cookies.get('token');

        if (!token) {
            navigate('/auth/login');
            return;
        }

        tokenValidator(token)
            .then(() => {
                return;
            })
            .catch(() => {
                navigate('/auth/login');
                return;
            });

    }, [navigate]);

    return (
        <>
            {props.children}
        </>
    );

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
                element: <Wastes />
            },
            {
                path: '/admin/discard-points',
                element: <Points />
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