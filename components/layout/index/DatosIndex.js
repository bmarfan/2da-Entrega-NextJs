import React from 'react'

const DatosIndex = ({icon, texto}) => {
    return (
        <article className='flex justify-center items-center bg-white p-3 rounded-md border border-black/10'>
            {icon}
            <span className='p-3 text-sm text-gray-500'>{texto}</span>
        </article>
    )
}

export default DatosIndex
