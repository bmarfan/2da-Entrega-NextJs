import React from 'react'
import style from '../../styles.module.scss'

const ProgressBar = ({currentValue, maxValue, label}) => {
  return (
    <div>
        <progress 
            value={currentValue} 
            max={maxValue} 
            aria-label={label}
            className={style.progressBar}
        >

            {currentValue}%

        </progress>
    </div>
  )
}

export default ProgressBar
