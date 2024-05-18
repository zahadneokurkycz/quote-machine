import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, Themes, Source } from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
	<Themes />
	<Source />
  </React.StrictMode>,
)
