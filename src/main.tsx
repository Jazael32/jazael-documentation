import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { JazaApp } from './JazaApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JazaApp />
  </StrictMode>,
)
