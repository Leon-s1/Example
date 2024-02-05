import React from 'react';
// import ReactDOM from 'react-dom/client';
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import {AppContextProvider} from "./components/AppContex.js";
import AppRouter from "./components/AppRouter";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <React.StrictMode>

            <AppContextProvider>
              <App />
            </AppContextProvider>

     </React.StrictMode>
);

// ReactDOM.render(<App />, document.getElementById('root'));

// import React from "react";
// import { createRoot } from 'react-dom/client';
// import App from "./App";
// const container = document.getElementById('root');
// const root = createRoot(container);
//
// root.render(<App/>);



// import ReactDOM from 'react-dom';




// ReactDOM.render(<App />, document.getElementById('root'));