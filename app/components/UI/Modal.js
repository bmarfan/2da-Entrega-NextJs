'use client'
import React, { useState } from 'react'
import Button from './Button';

const Modal = ({children, modalText}) => {

    const [open, setOpen] = useState(false);
    const [callback, setCallback] = useState(null);

    const show = callback => e => {
        e.preventDefault()
        setOpen(true)
        e = {
            ...e,
        target: { ...e.target, value: e.target.value }
        }
        setCallback({
        run: () =>
            callback(e)
        });
    }

  const hide = () => {
    setCallback(null);
    setOpen(false);
  }
  const confirm = () => {
    console.log("confirm");
    callback.run();
    hide();
  };



  return (
    <>
    {children(show)}
    {open  && (
        <div>
            <p>{modalText}</p>
            <Button onClick={hide}>
                Cancelar
            </Button>
            <Button onClick={hide}>
                Confirmar
            </Button>
        </div>
    )}
    </>
  )
}

export default Modal
