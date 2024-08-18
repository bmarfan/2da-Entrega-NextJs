import React from 'react'
import { dataMenu } from '@/app/dataMenu';
import MenuList from './MenuList';

const Menu = async () => {
    const data = await fetch('http://localhost:3000/api/menu',
        {cache: 'no-store'}
    ).then(r => r.json())

    const depthLevel = 0;

    return (
      
      <nav className='flex gap-3 mr-10'>
        {data.map((menu, index) => {
            return <MenuList key={index} item={menu} depthLevel={depthLevel}/>
        })}
      </nav>
      
    )
}

export default Menu
