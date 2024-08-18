'use client'
import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { ArrowSquareDown } from 'iconsax-react';
import MenuDropdown from './MenuDropdown';

const MenuList = ({item, depthLevel}) => {
    const [open, setOpen] = useState(false);
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (open && ref.current && !ref.current.contains(event.target)){
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        }
    }, [open])
  return (
    <div>
        {item.submenu ?  (
            <>
                <button 
                    type='button' 
                    aria-haspopup='menu'
                    aria-expanded={open ?  'true' : 'false'}
                    onClick={() => setOpen((prev) => !prev)}
                    className='flex items-center'
                >
                    {item.name}{''}
                    {depthLevel > 0 ? <span>&raquo;</span> : <span className='pl-1'><ArrowSquareDown size={13}/></span>}
                </button>
                <MenuDropdown 
                    submenus={item.submenu}
                    open={open}
                    depthLevel={depthLevel}
                />
            </>
        ) : (
            <a href={item.href}>{item.name}</a>
        )}
      
    </div>
  )
}

export default MenuList
