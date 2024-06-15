import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { UserProvider } from './components/context'; // Ensure this import matches the exported name

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider> {/* Corrected from <Context> to <UserProvider> */}
      <App />
    </UserProvider>
  </React.StrictMode>,
);