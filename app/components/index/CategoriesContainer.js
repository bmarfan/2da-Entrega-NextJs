
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
    <div className='w-full flex justify-center p-5'>
        
        {categories.map((menu, index) => {
                return(
                    <div key={index} className={styles.boxContainer}>
                        <h2 className='text-center text-accent uppercase text-2xl font-extrabold pb-5 subtitle-line relative'>Categorias</h2>
                        {
                            menu.submenu ? (
                                <Categories items={menu.submenu}/>
                            ) : ('')
                        }
                    </div>
                )
            })}
      </div>
  )
}

export default CategoriesContainer
