import React from 'react'
import styles from '../../styles.module.scss'

const Select = ({title, value}) => {
  if(title != ''){
    return (
        <>
            <select className={styles.select} required>
                <option value=''>Selecciona una opción</option>
                {
                    value?.map((value, index) => {
                                    return <option key={index} value={value}>{value}</option>
                    })
                }
            </select>
        </>
      )
  }
}

export default Select