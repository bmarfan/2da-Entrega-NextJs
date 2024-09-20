'use client'
import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { ArrowSquareDown, Menu, More } from 'iconsax-react';
import MenuDropdown from './MenuDropdown';
import Link from 'next/link';

const MenuList = ({item, depthLevel}) => {
    const [open, setOpen] = useState(false);
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (open && ref.current && !ref.current.contains(event.target)){
                setOpen(false)
            }
        }
       
    }, [open])
    const onMouseEnter = () => {
        setOpen(true);
       };
       
       const onMouseLeave = () => {
        setOpen(false);
       };

  return (
    <>
    <div>
        {item.submenu ?  (
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='h-20 flex items-center relative'>
                <button 
                    type='button' 
                    aria-haspopup='menu'
                    aria-expanded={open ?  'true' : 'false'}
                    onClick={() => setOpen((prev) => !prev)}
                    className='flex items-center bg-accent p-2 rounded-md text-white font-bold uppercase text-[11px]'
                >
                    {item.name}{''}
                    {depthLevel > 0 ? <span>&raquo;</span> : <span className='pl-1'><More size="15" variant="Bold"/></span>}
                </button>
                <MenuDropdown 
                    submenus={item.submenu}
                    open={open}
                    depthLevel={depthLevel}

                />
            </div>
        ) : (
            <Link href={item.href} className='h-20 flex items-center'>{item.name}</Link>
        )}
    </div>
    <div className={`${open ? 'opacity-100 fixed inset-x-0 bg-black/50 h-full' : 'opacity-0 md:opacity-100 fixed'}  h-full z-30 fixed top-20`}></div>
    </>
  )
}

export default MenuList
