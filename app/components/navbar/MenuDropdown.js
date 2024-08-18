import React from 'react'

const MenuDropdown = ({submenus, open}) => {
  return (
    <div className={`${open ? 'opacity-100 fixed inset-x-0 bg-black/50 z-40 h-full top-20' : 'opacity-0 md:opacity-100'}`}>
        <div className='fixed bg-white top-20 h-full right-0'>
            <ul className={`${open ? 'block' : 'hidden'} p-5 flex flex-col w-80`}>
                {submenus.map((submenu, index) => (
                    <li key={index} className='px-2 py-1 transition ease-in-out hover:text-accent'>
                        <a href={submenu.href}>{submenu.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default MenuDropdown
