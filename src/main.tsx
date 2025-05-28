import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { StagewiseDevToolbar } from './stagewise-toolbar'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)

if (process.env.NODE_ENV === 'development') {
  const toolbarDiv = document.createElement('div')
  document.body.appendChild(toolbarDiv)
  createRoot(toolbarDiv).render(<StagewiseDevToolbar />)
}
