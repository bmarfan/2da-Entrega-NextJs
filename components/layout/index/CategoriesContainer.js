import React from 'react'
import Categories from './Categories'
import styles from '../../../styles/styles.module.scss'
import { collection, getDocs} from "firebase/firestore";
import { db } from "@/config/firebase";

const CategoriesContainer = async () => {
    const menuRef = collection(db, 'menu')
    const querySnapshot = await getDocs(menuRef)

    const docs = querySnapshot.docs.map(doc => doc.data())
    const data = docs

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
