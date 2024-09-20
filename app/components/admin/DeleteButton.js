'use client'
import React from 'react'
import Swal from 'sweetalert2'
import { Trash } from 'iconsax-react'
import { Toast } from '../UI/Modals'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/config/firebase'
import { useRouter } from 'next/navigation'

const DeleteButton = ({slug}) => {
    const router = useRouter();
    
    const handleDelete = () => {
        Swal.fire({
            title: 'Eliminar producto',
            text: '¿Estás seguro que deseas eliminarlo?',
            confirmButtonText: 'Confirmar',
            showCancelButton: true,
            confirmButtonColor: 'var(--accent)'
          }).then(async(v) => {
            if(v.isConfirmed){
                Toast.fire({
                    icon: "success",
                    title: "Producto eliminado"
                  });
                  

                try {
                    await deleteDoc(doc(db, "products", slug));
                    router.refresh()
                    
                } catch (error) {
                    console.error("Error deleting product:", error);
                }
            }
          })
    }


  return (
    <div>
            <button type='button' onClick={handleDelete}>
                <Trash size="22" color="var(--accent)" variant="Linear"/>
            </button>

    </div>
  )
}

export default DeleteButton
