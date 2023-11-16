import { createBrowserRouter } from 'react-router-dom';
import Page from './pages/Page';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import DiscardPoints from './pages/DiscardPoints';


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
                path: '*',
                element: <NotFound />
            }
        ]
    }

]);

export default BrowserRouter;