import React from 'react'
import styles from '../../styles.module.scss'
import Rrss from './Rrss'
import FooterInfo from './FooterInfo'

const FooterContainer = () => {
  return (
    <div className='bg-white border-t border-black/10 py-3 px-20 flex justify-between items-center'>
        <Rrss/>
        <FooterInfo/>
    </div>
  )
}

export default FooterContainer
