import React from 'react'

const Button = ({children, className='', ...args}) => {
  return (
    <button className={`hvr-sweep-to-right bg-gradient-to-r from-accent to-accent-light py-2 px-5 text-white rounded-md overflow-hidden uppercase font-bold text-[12px] h-fit ${className}`}{...args}>
        {children}
    </button>
  )
}

export default Button
