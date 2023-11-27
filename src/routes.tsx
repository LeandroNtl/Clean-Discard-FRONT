import { createBrowserRouter } from 'react-router-dom';

import Page from './pages/Page';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import DiscardPoints from './pages/DiscardPoints';
import Auth from './pages/Auth';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Admin from './pages/Admin';

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
                element: <Admin />
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