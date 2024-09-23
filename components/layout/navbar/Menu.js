import React from 'react'
import MenuList from './MenuList'

const Menu = async() => {
    const data = await fetch('http://localhost:3000/api/menu',
        {cache: 'no-store'}
    ).then(r => r.json())

    const depthLevel = 0;

    return (
      
      <nav className='flex gap-3 mr-10'>
        {data.sort(((a, b) => a.value - b.value)).map((menu, index) => {
            return <MenuList key={index} item={menu} depthLevel={depthLevel}/>
        })}
      </nav>
      
    )
}

export default Menu
