// /src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Set var type
declare var process : {
  env: {
    REACT_APP_AUTH0_DOMAIN: string,
    REACT_APP_AUTH0_CLIENT_ID: string
  }
}

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

root.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);