import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {StoreProvider} from "./app/Providers/StoreProvider";
import App from "./App";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
)
