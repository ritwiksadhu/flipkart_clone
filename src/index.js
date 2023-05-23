import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import ContextProvider from './context/ContextProvider';
import StyleProvider from './context/StyleProvider';
import AuthProvider from './context/AuthProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <StyleProvider>
        <AuthProvider>
            <App />
        </AuthProvider>
      </StyleProvider>
    </ContextProvider>
  </React.StrictMode>
);

