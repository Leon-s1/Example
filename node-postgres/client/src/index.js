import React from 'react';
// import ReactDOM from 'react-dom/client';
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
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