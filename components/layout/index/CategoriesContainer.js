import React from 'react'
import Categories from './Categories'
import styles from '../../../styles/styles.module.scss'

const CategoriesContainer = async () => {
    const baseUrl = process.env.VERCEL_URL
    ? `${process.env.VERCEL_URL}`
    : 'http://localhost:3000'
    const data = await fetch(`${baseUrl}/api/menu`,
        { cache: 'no-store' }
    ).then(r => r.json())

    let categories = data.filter(function (item) {
        return item.submenu
    })

    return (
        <section className='w-full p-5'>
            <h2 className={styles.titleColor}>Categorías</h2>
            <div className={styles.contentContainer}>
                {categories.map((menu, index) => {
                    return (
                        <section key={index}>
                            {
                                menu.submenu ? (
                                    <Categories items={menu.submenu} />
                                ) : ('')
                            }
                        </section>
                    )
                })}
            </div>
        </section>
    )
}

export default CategoriesContainer
