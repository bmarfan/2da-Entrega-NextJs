'use client'
import React, { useState } from 'react'
import { updateDoc, doc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { db, storage } from '@/config/firebase'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import styles from '../../styles/styles.module.scss'
import {
    TextInput,
    Textarea,
    FileInput,
    NumberInput
} from '../ui/forms'
import { Button } from '../ui/buttons'
import { ProgressBar } from '../ui/progress'


const updateProduct = async (id, values, file) => {
    const docRef = doc(db, 'products', id)
    return updateDoc(docRef, {
        name: values.name,
        description: values.description,
        price: values.price,
        stock: values.stock,
        type: values.type,
        ...file
    })
}

const EditForm = ({ item }) => {
    const router = useRouter()
    const { name, description, price, stock, type, image } = item
    const [values, setValues] = useState({
        name,
        description,
        price,
        stock,
        type,
        image
    })
    const [file, setFile] = useState(null);
    const [fileProgress, setFileProgress] = useState()
    const [fileUrl, setFileUrl] = useState()

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

        const storageRef = ref(storage, 'products/' + values.type + '/' + item.slug)
        const fileSnapshot = uploadBytesResumable(storageRef, e.target.files[0], metadata)

        fileSnapshot.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setFileProgress(progress)
                switch (snapshot.state) {
                    case 'paused':
                        break;
                    case 'running':
                        break;
                }
            },
            (error) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        break;
                    case 'storage/canceled':
                        break;
                    case 'storage/unknown':
                        break;
                }
            },
            () => {
                getDownloadURL(fileSnapshot.snapshot.ref).then((downloadURL) => {
                    setFile({ image: downloadURL })
                    setFileUrl(downloadURL)
                });
            }
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateProduct(item.slug, values, file)
        router.push('/admin')
    }

    return (
        <div className='container my-10'>
            <h1 className={styles.titleColor}>editar producto</h1>
            <form onSubmit={handleSubmit} className={styles.contentContainer}>
                <TextInput
                    label='Nombre'
                    labelText='Nombre visible del producto'
                    value={values.name}
                    onChange={handleChange}
                    name='name'
                />
                <TextInput
                    label='Categoría'
                    labelText='Categoría a la que pertenece el producto'
                    value={values.type}
                    onChange={handleChange}
                    name='type'
                />
                <section className='flex gap-4'>
                    <NumberInput
                        label='Precio'
                        labelText='Precio para el producto, sin puntos ni comas.'
                        value={values.price}
                        onChange={handleChange}
                        name='price'
                    />
                    <NumberInput
                        label='Stock'
                        labelText='Cantidad disponibles del producto.'
                        value={values.stock}
                        onChange={handleChange}
                        name='stock'
                    />
                </section>
                <Textarea
                    label='Descripción'
                    labelText='Descripción del artículo'
                    value={values.description}
                    onChange={handleChange}
                    name='description'
                />
                <FileInput
                    label='Imagen'
                    labelText='Imagen del producto'
                    onChange={handleImageChange}
                    alt={values.name}
                    name='image'
                >
                    {
                        fileUrl ? (
                            <Image
                                src={fileUrl}
                                width={300}
                                height={300}
                                alt={values.name}
                                className='mb-3'
                            />
                        ) : (
                            <Image
                                src={values.image}
                                width={300}
                                height={300}
                                alt={values.name}
                                className='mb-3'
                            />
                        )
                    }
                </FileInput>
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
                <section>
                    <div className='flex justify-end'>
                        <Button type='submit'>
                            Editar
                        </Button>
                    </div>
                </section>
            </form>

        </div>
    )
}

export default EditForm
