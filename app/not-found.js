import {EmojiSad } from "iconsax-react"
import Link from "next/link"

export default function NotFound(){
    return(
        <div className="h-full">
            <div className='p-10 flex justify-center h-full items-center'>
            <div className='w-10/12 bg-white p-7 rounded-xl text-center relative md:w-6/12 border border-black/10'>
            
               <div className="relative flex flex-col items-end">
                    <div className="subtitle">
                        <h2>Error</h2>
                    </div>
                    
                    <div className="py-3 text-justify mb-5">La página que estás buscando no existe, sin embargo, te invitamos a seguir mirando nuestros productos y servicios</div>
                    <Link href={'/'} className='boton hvr-sweep-to-right'>Volver a la página de inicio</Link>
               </div>
                
            </div>
        </div>
        </div>
    )
}