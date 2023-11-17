import { createBrowserRouter } from 'react-router-dom';
import Page from './pages/Page';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import DiscardPoints from './pages/DiscardPoints';
import { Login, Register } from './pages/Auth';


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