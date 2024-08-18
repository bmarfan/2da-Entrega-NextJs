import React from 'react'
import DatosIndex from './DatosIndex'
import styles from '../../styles.module.scss'
import { Box, CallCalling, CardTick1, ReceiptDisscount, RecoveryConvert } from 'iconsax-react'

const Header = () => {
  return (
    <>
    <div className='bg-[url("/header.png")] w-full h-[400px] bg-cover bg-center bg-fixed relative filter-image'></div>
    <div className='w-full px-5 pt-6'>
        <div className={styles.boxContainerFlex}>
            <DatosIndex icon={<Box size="32" color="var(--accent)" variant="Outline"/>} texto={'Envio gratis'}/>
            <DatosIndex icon={<CallCalling size="32" color="var(--accent)" variant="Outline"/>} texto={'Atención al cliente'}/>
            <DatosIndex icon={<CardTick1 size="32" color="var(--accent)" variant="Outline"/>} texto={'Pago seguro'}/>
            <DatosIndex icon={<RecoveryConvert size="32" color="var(--accent)" variant="Outline"/>} texto={'30 días de garantía'}/>
        </div>
    </div>
    </>
  )
}

export default Header
