import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ColorChanger from './components/colorChanger.jsx'
import Passgenerator from './components/passgenerator.jsx'
import CustomInputs from './components/inputs.jsx'
 
import HandleForms from './components/handleForms.jsx'
import Popup from './components/portals.jsx'
import TaskList from './components/Task1/TestList.jsx'

import Navbar from './components/Task1/navbar.jsx'
import Task1 from './components/Task1/Task1.jsx'

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

    {/* <HandleForms/> */}

    {/* <Popup/> */}
    {/* <Navbar/> */}
     <Task1/> 

  </StrictMode>,
)
