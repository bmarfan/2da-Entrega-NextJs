import React from 'react'
import MenuList from './MenuList'

const Menu = async() => {
    const baseUrl = process.env.VERCEL_URL
    ? `http://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'
    const data = await fetch(`https://${baseUrl}/api/menu`,
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
