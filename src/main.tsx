import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';

import GlobalStyle from './styles/global.ts';
import BrowserRouter from './routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>,
)
