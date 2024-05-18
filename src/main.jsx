import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, Themes } from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
	<Themes />
  </React.StrictMode>,
)
