import React from 'react'
import FooterInfo from './FooterInfo'
import Rrss from './Rrss'

const FooterContainer = () => {
  return (
    <footer className='bg-white border-t border-black/10 py-3 px-20 flex justify-between items-center'>
        <Rrss/>
        <FooterInfo/>
    </footer>
  )
}

export default FooterContainer
