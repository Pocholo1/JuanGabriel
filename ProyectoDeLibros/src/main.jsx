import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../src/componentes/body/data.jsx'
import '../src/componentes/body/CardList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <data/>
    <App />
  </React.StrictMode>,
)
