'use client'
import React, {useState} from 'react'
import style from '../../styles.module.scss'
import Button from '../UI/Button'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { db, storage } from '@/config/firebase'
import { adminNavegation } from '../utilities/actions'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { useRouter } from 'next/navigation'
import ProgressBar from '../utilities/ProgressBar'
import Image from 'next/image'

const createProduct = async (values, file) => {
    
    
    const docRef = doc(db, 'products', values.slug)
    return setDoc(docRef, {
        ...values,
        ...file
    })
}

const CreateForm = () => {
    const router = useRouter()
    const [values, setValues] = useState({
        slug: '',
        name: '',
        description: '',
        price: 0,
        type: '',
        stock: 0,
    })
    const [file, setFile] = useState(null)
    const [fileProgress, setFileProgress] = useState()

    //esta función maneja los inputs del formulario
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleImageChange = (e) => {
        const metadata = {
            contentType: 'image/jpeg'
          };
    
          
        const storageRef = ref(storage, 'products/' + values.type + '/' + values.slug)
        const fileSnapshot = uploadBytesResumable(storageRef, e.target.files[0], metadata)
    
        fileSnapshot.on('state_changed',
            (snapshot) => {
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
              setFileProgress(progress)
              switch (snapshot.state) {
                case 'paused':
                  console.log('Upload is paused');
                  break;
                case 'running':
                  console.log('Upload is running');
                  break;
              }
            }, 
            (error) => {
              switch (error.code) {
                case 'storage/unauthorized':
                  // User doesn't have permission to access the object
                  break;
                case 'storage/canceled':
                  // User canceled the upload
                  break;
          
                // ...
          
                case 'storage/unknown':
                  // Unknown error occurred, inspect error.serverResponse
                  break;
              }
            }, 
            () => {
              // Upload completed successfully, now we can get the download URL
              getDownloadURL(fileSnapshot.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                setFile({image: downloadURL})
                setValues({...values, image: downloadURL})
              });
            }
          );

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await createProduct(values, file)
        router.push('/admin')
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
                    
                    className={style.textarea}
                    name='description'
                    onChange={handleChange}
                />
            </div>

           
            <div className='flex flex-col mb-3'>
                <label className={style.labelForm}>
                    Imagen
                    <span>
                        Imagen del producto
                    </span>
                </label>

                {
                    values.image ? (
                        <img
                            src={values.image} 
                            width={300} 
                            height={300} 
                            alt={values.name}
                            className='mb-3'
                        />
                    ) : ('')
                }

                <input
                        type='file'
                        alt={values.name}
                        name='image'
                        onChange={handleImageChange}
                />
                

            </div>
            
           {
            fileProgress ? (
                <>
                    <span className=''>
                        Progreso {fileProgress}%
                    </span>
                    <ProgressBar label={'file-update'} currentValue={fileProgress} maxValue={100} />


                    

                </>
            ) : ('')
           }
           
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
