import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Layout from './presentation/components/layout.tsx';
import { GlobalStyle } from './presentation/theme/global.style.tsx';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa la hoja de estilo de Font Awesome

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <GlobalStyle />
      <App />
    </Layout>
  </React.StrictMode>
);
