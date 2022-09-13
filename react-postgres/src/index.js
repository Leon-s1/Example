// import React from "react";
import { createRoot } from 'react-dom/client';
import * as ReactDOMClient from 'react-dom/client';

import ReactDOM from 'react-dom'
import App from './App'




 // ReactDOM.render(<App>, document.getElementById('root');</App>)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );


const container = document.getElementById('App');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);