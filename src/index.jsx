import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TranslationsProvider } from './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TranslationsProvider>
      <App />
    </TranslationsProvider>
  </React.StrictMode>
);
