import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ColorChanger from './components/colorChanger.jsx'
import Passgenerator from './components/passgenerator.jsx'
import CustomInputs from './components/inputs.jsx'
import CurrencyApp from './components/currencyapp.jsx'
import HandleForms from './components/handleForms.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App name="arslan" desc="this is descroption for card one" btn="click" />
    <App name="arslan" desc="this is descroption for card one" btn="click" />
    <App name="arslan" desc="this is descroption for card one" btn="click" />
    <App name="arslan" desc="this is descroption for card one" btn="click" /> */}

    {/* <ColorChanger/> */}

    {/* <Passgenerator /> */}

    {/* <CustomInputs/> */}

    {/* <CurrencyApp/> */}

    <HandleForms/>

  </StrictMode>,
)
