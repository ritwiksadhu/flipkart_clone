import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ContextProvider from './context/ContextProvider';
import StyleProvider from './context/StyleProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <StyleProvider>
        <App />
      </StyleProvider>

    </ContextProvider>
  </React.StrictMode>
);

