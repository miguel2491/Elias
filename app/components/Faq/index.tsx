"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

interface faqdata {
    heading: string;
    subheading: string;
}


const faqdata: faqdata[] = [
    {
        heading: "1. What is cryptocurrency?",
        subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into'
    },
    {
        heading: "2. Can cryptocurrency be converted to cash?",
        subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into'
    },
    {
        heading: "3. How long should you hold cryptocurrency?",
        subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into'
    },

]

const Faq: React.FC = () => {
    const [token, setToken] = useState('');
    const [nombreTxt, setNombre] = useState('');
    const [correoTxt, setCorreo] = useState('');
    const [asuntoTxt, setAsunto] = useState('');

    const manejarEnvio = (e: React.FormEvent) => {
        e.preventDefault();
        // Manejar el envío de los datos
        sendCorreo();
    };
    async function sendCorreo()
    {
        console.log({ nombreTxt, correoTxt, asuntoTxt });
        const fData = 
        {
            nombre: nombreTxt,
            correo: correoTxt,
            mensaje: asuntoTxt
        }
        try {
            // Obtener el token
            const loginResponse = await fetch('https://pro_catsa.catsaconcretos.mx:2540/api/ApiCatsa/Login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                userName: 'pagina_web',
                password: '.$2024Catsa'
              })
            });
            const loginData = await loginResponse.json();
            setToken(loginData);
      
            // Enviar el formulario
            const response = await fetch('https://pro_catsa.catsaconcretos.mx:2540/api/ApiCatsa/sendCorreo', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + loginData
              },
              body: JSON.stringify(fData)
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <div className="my-20 px-6" id="faq-section">
            {/* <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">Frequently Asked And Question</h3>
            <p className="text-center lg:text-lg font-normal text-bluish">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br /> been the industry standard dummy text ever since the 1500s,</p> */}

            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-1">
                    {/* Column-1 */}
                    <div className="mt-32">
                        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-blue">
                        <div className="grid lg:grid-cols-2">
                            <div>
                                <Image src={'/images/contact.JPG'} alt="macBook-image" width={787} height={512} />
                            </div>
                            <div>
                                <form onSubmit={manejarEnvio} className="max-w-md mx-auto">
                                <div className="mb-4">
                                    <label htmlFor="nombre" className="block text-sm font-medium text-white mt-4">Nombre Completo</label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        value={nombreTxt}
                                        onChange={(e)=>setNombre(e.target.value)}
                                        className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-white mt-4">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={correoTxt}
                                        onChange={(e)=>setCorreo(e.target.value)}
                                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-white mt-4">Asunto</label>
                                    <textarea
                                        id="asunto"
                                        value={asuntoTxt}
                                        onChange={(e)=>setAsunto(e.target.value)}
                                        className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200"
                                >
                                    Enviar
                                </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Faq;
