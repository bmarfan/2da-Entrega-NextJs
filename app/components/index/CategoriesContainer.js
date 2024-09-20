
import React from 'react'
import Categories from './Categories'
import styles from '../../styles.module.scss'

const CategoriesContainer = async () => {
    const data = await fetch('http://localhost:3000/api/menu',
        {cache: 'no-store'}
    ).then(r => r.json())

    let categories = data.filter(function(item) {
        return item.submenu
    })
    
  return (
    <div className='w-full p-5'>
        <h2 className={styles.titleColor}>categorías</h2>
        <div className={styles.contentContainer}>
        {categories.map((menu, index) => {
                return(
                    <>
                    
                        
                        {
                            menu.submenu ? (
                                <Categories key={index} items={menu.submenu}/>
                            ) : ('')
                        }
                    
                    </>
                )
            })}
      </div></div>
  )
}

export default CategoriesContainer
