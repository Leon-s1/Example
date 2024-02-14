import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import {AppContextProvider} from "./components/AppContex.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppContextProvider>
            <App/>
        </AppContextProvider>
    </React.StrictMode>
);
