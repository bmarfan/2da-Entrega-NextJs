import React from 'react'
import MenuList from './MenuList'

const Menu = async() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    const data = await fetch(`${apiUrl}/api/menu`,
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
