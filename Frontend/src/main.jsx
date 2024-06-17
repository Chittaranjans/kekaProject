import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { UserProvider } from './components/context'; // Ensure this import matches the exported name

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider> {/* Corrected from <Context> to <UserProvider> */}
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
);