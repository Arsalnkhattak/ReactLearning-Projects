import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import { createPortal } from 'react-dom';




function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
    return createPortal(

        <div className='fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center ' style={{ background: "rgba(0, 0, 0, 0.5)" }}>
            <div className=' text-black p-20 rounded-2xl bg-white' >
                {children}
                <button onClick={onClose}>Close</button>
            </div>

           
        </div>

       

    )

    document.body 
}


export default function Popup() {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <h1>Popup Message using portal</h1>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h2>Modal Content</h2>
                <p>This content is rendered outside the App component!</p>
            </Modal>
        </div>



    )
}