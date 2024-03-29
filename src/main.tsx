import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Layout from './Layout.tsx';
import { GlobalStyle } from './presentation/theme/global.style.tsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/fonts/Starjedi.ttf';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <GlobalStyle />
      <App />
    </Layout>
  </React.StrictMode>
);
