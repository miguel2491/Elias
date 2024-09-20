"use client"; 
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Companies from './../Companies/letras';
// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface Social {
  imgsrc: string,
  href: string,
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Menú",
    link: ['Inicio', 'Nosotros', 'Productos y Servicios', 'Contactanos'],
  }
]

const socialLinks: Social[] = [
  { imgsrc: '/images/Footer/instagram.png', href: "https://instagram.com/" },
  { imgsrc: '/images/Footer/facebook.png', href: "https://youtube.com/" },
  { imgsrc: '/images/Footer/Indeed.png', href: "https://youtube.com/" },
]


const footer = () => {
  return (
    <div className=" relative">
      <div className="radial-bg hidden lg:block"></div>
      <div className="mx-auto max-w-2xl mt-12 pb-6 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* COLUMN-1 */}

        <div className='col-span-12'>
            <Companies />
            <div className='flex gap-8'>
              {socialLinks.map((items, i) => (
                <Link href={items.href} key={i} style={{paddingLeft:'20%'}}><img src={items.imgsrc} alt={items.imgsrc} width={48} className='footer-icons' /></Link>
              ))}
            </div>
          </div>

        <div className="mt-24 grid grid-cols-2 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

          {/* CLOUMN-2/3 */}

          {products.map((product) => (
            <div key={product.id} className="group relative col-span-6">
              <p className="text-white text-xl font-medium mb-9">{product.section}</p>
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className='mb-5'>
                    <Link href="/" className="text-offwhite  text-sm font-normal mb-6 space-links">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-4">
            <h3 className="text-white text-xl font-medium mb-9">Contacto</h3>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/number.svg'} alt="number-icon" width={20} height={20} />(+52) 221-183-5652</h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/email.svg'} alt="email-icon" width={20} height={20} />servicioalcliente@catsaconcretos.mx</h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/address.svg'} alt="address-icon" width={20} height={20} />Carretera Federal Puebla-Atlixco Km.9, #8703 72810 Puebla de Zaragoza, México</h4>
          </div>

        </div>
      </div>

      {/* All Rights Reserved */}

      <div className='py-8 px-4 border-t border-t-lightblue'>
        <h3 className='text-center text-offwhite'><Link href="https://adminmart.com/" target="_blank"> AVISO DE PRIVACIDAD</Link></h3>
        <h3 className='text-center text-offwhite'>COPYRIGHT CATSA @2024<br />
          Todos los derechos reservados</h3>
      </div>

    </div>
  )
}

export default footer;
