import React from 'react'
import styles from '../style'
import Button from './Button'
import { contacto } from '../assets'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className={`sm:ml-0 ml-0`}>
      <img
        src={contacto}
        alt="F1"
        className={`w-[480px] h-[342px]`}
      />
      </div>
      <div className='flex-1 flex flex-col ml-3'>
        <h2 className={styles.heading2}>Contactanos</h2>
        
        <Button/>
      </div>
    </section>
  )
}

export default CTA
