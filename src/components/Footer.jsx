import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia, letrasTexto } from '../constants'


const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
        
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          
          <div id="fullpage">
            {
              letrasTexto.map((letters, index) =>(      
                  <div className="section">{letters.texto}</div>
              ))}         
          </div>
          </p>
        </div>
        {/* <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((link) => (
            <div key={link.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                {link.title}
              </h4>
              <ul className='list-none mt-4'>
                {link.links.map((item, index) => (
                  <li 
                    key={item.name} 
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== link.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
      </div>      
      <div className='w-full flex justify-center my-5 md:flex-row flex-col pt-6 border-t-[6px] border-t-[#3F3E45]'>
          {socialMedia.map((social, index) => (
            <img
              src={social.icon}
              key={social.id}
              alt={social.id}
              className={`w-[42px] h-[42px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
            />
          ))}
      </div>

      <div>
      <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>AVISO DE PRIVACIDAD</p>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
          COPYRIGHT 2024 CATSA.<br />
          TODOS LOS DERECHOS RESERVADOS
        </p>
      </div>
    </section>
  )
}

export default Footer
