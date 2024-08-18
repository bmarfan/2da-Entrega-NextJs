import React from 'react'
import styles from '../../styles.module.scss'

export default function TextBody({content}) {
  return (
    <div>
      <div
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}