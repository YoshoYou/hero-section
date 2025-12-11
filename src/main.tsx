import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MoodContextProvider } from './components/nav/useContext/MoodContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
          <MoodContextProvider>
             <App />
          </MoodContextProvider>

  </StrictMode>,
)
