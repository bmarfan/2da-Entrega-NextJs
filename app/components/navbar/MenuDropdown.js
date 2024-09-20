import React from 'react'
import Link from 'next/link'

const MenuDropdown = ({submenus, open}) => {
  return (
    <div>
        <div className='fixed bg-accent-light top-[79px] left-0 w-full z-50'>
            <ul className={`${open ? 'block' : 'hidden'} p-5 flex w-full border border-black/05 justify-start`}>
                {submenus.map((submenu, index) => (
                    <li key={index} className='px-2 py-1 transition ease-in-out hover:text-accent'>
                        <Link href={submenu.href}>{submenu.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default MenuDropdown
