import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CommonDataProvider from './applications/CommonContext/CommonDataProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CommonDataProvider>
    <App />
    </CommonDataProvider>
  </StrictMode>,
)
