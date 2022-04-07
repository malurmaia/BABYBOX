import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';
// Importa CSS do bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { BrowserRouter } from "react-router-dom";

 

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
<React.StrictMode>
  <BrowserRouter>
  <App />
  </BrowserRouter>
</React.StrictMode>);