import React from 'react'
import { Box } from 'iconsax-react'

const DatosIndex = ({icon, texto}) => {
  return (
    <div className='flex justify-center items-center bg-white p-3 rounded-md border border-black/10'>
      {icon}
      <span className='p-3 text-sm text-gray-500'>{texto}</span>
    </div>
  )
}

export default DatosIndex