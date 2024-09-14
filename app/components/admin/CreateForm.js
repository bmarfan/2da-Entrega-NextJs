'use client'
import React, {useState} from 'react'
import style from '../../styles.module.scss'
import Button from '../UI/Button'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { db } from '@/config/firebase'
import { adminNavegation } from '../utilities/actions'

const createProduct = async (values) => {
    const docRef = doc(db, 'products', values.slug)
    return setDoc(docRef, {...values})
    .then(() => 
        adminNavegation()
    )
}

const CreateForm = () => {
    const [values, setValues] = useState({
        slug: '',
        name: '',
        description: '',
        price: 0,
        type: '',
        stock: 0,
    })

    //esta función maneja los inputs del formulario
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createProduct(values)
    }

  return (
    <div className='container my-10'>
        <h1 className={style.titleColor}>Crear Producto</h1>
        <form onSubmit={handleSubmit} className={style.contentContainer}>
            <div className='flex flex-col mb-3'>
                <label className={style.labelForm}>
                    Slug
                    <span>
                        Nombre único del producto. No puede contener espacios, símbolos, o tildes
                    </span>
                </label>
                <input
                    type='text'
                    value={values.slug}
                    required
                    className={style.textInput}
                    name='slug'
                    onChange={handleChange}
                />
            </div>

            <div className='flex flex-col mb-3'>
                <label className={style.labelForm}>
                    Nombre
                    <span>
                        Nombre visible del producto
                    </span>
                </label>
                <input
                    type='text'
                    value={values.name}
                    required
                    className={style.textInput}
                    name='name'
                    onChange={handleChange}
                />
            </div>

            <div className='flex flex-col mb-3'>
                <label className={style.labelForm}>
                    Categoría
                    <span>
                        Categoría a la que pertenece el producto
                    </span>
                </label>
                <input
                    type='text'
                    value={values.type}
                    required
                    className={style.textInput}
                    name='type'
                    onChange={handleChange}
                />
            </div>

            <div className='flex gap-2'>
                <div className='flex flex-col mb-3 w-full'>
                    <label className={style.labelForm}>
                        Precio
                        <span>
                            Precio para el producto, sin puntos ni comas.
                        </span>
                    </label>
                    <input
                        type='number'
                        value={values.price}
                        required
                        className={style.textInput}
                        name='price'
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-col mb-3 w-full'>
                    <label className={style.labelForm}>
                        Stock
                        <span>
                            Cantidad disponibles.
                        </span>
                    </label>
                    <input
                        type='number'
                        value={values.stock}
                        required
                        className={style.textInput}
                        name='stock'
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className='flex flex-col mb-3'>
                <label className={style.labelForm}>
                    Descripción
                    <span>
                        Descripción del artículo
                    </span>
                </label>
                <textarea
                    value={values.description}
                    required
                    className={style.textarea}
                    name='description'
                    onChange={handleChange}
                />
            </div>

            <div className='flex justify-end'>
                <Button type='submit'>
                    Crear Producto
                </Button>
            </div>

      </form>
    </div>
  )
}

export default CreateForm
