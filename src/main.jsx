import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import ApiContext from "./context/ApiContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiContext>
      <Router>
          <App />
        </Router>
    </ApiContext>
  </React.StrictMode>,
)
