import React from 'react'
import MenuList from './MenuList'
import { collection, getDocs, query, where} from "firebase/firestore";
import { db } from "@/config/firebase";

const Menu = async() => {
    const menuRef = collection(db, 'menu')
    const querySnapshot = await getDocs(menuRef)

    const docs = querySnapshot.docs.map(doc => doc.data())
    const data = docs

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
