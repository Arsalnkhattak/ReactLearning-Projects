import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ColorChanger from './components/colorChanger.jsx'
import Passgenerator from './components/passgenerator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App name="arslan" desc="this is descroption for card one" btn="click" />
    <App name="arslan" desc="this is descroption for card one" btn="click" />
    <App name="arslan" desc="this is descroption for card one" btn="click" />
    <App name="arslan" desc="this is descroption for card one" btn="click" /> */}

    {/* <ColorChanger/> */}

    <Passgenerator />

  </StrictMode>,
)
