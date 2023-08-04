import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/productContext.jsx'
import { FilterContextProvider } from './context/filterContext.jsx'
// import './api/mirageMock.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <FilterContextProvider>
      <App />
      </FilterContextProvider>
    </AppProvider>
  </React.StrictMode>,
)
