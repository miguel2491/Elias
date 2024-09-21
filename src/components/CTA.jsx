import React, {useState} from 'react'
import styles from '../style'
import Button from './Button'
import { contacto } from '../assets'

const CTA = () => {
  const [Tnombre, setNombre] = useState(''); 
  const [Tcorreo, setCorreo] = useState(''); 
  const [Tasunto, setAsunto] = useState(''); 
  const [token, setToken] = useState('');
  const [showModal, setShowModal] = React.useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === "nombre")
    {
      setNombre(value);  
    }
    if(name === "correo")
    {
      setCorreo(value);  
    }
    if(name === "asunto")
    {
      setAsunto(value);  
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let formData = {
      nombre:Tnombre,
      correo:Tcorreo,
      asunto:Tasunto
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
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
      setShowModal(true);
    } catch (error) {
      console.error('Error:', error);
    }
    setNombre("");
    setCorreo("");
    setAsunto("");
  };

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
        <form className="rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
              NOMBRE COMPLETO
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="nombre" 
              name='nombre'
              type="text" 
              onChange={handleChange}
              value={Tnombre}  
              placeholder="Nombre"
              autoComplete='nombre' />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              CORREO ELECTRÓNICO
            </label>
            <input 
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              id="correo" 
              name='correo' 
              type="email" 
              value={Tcorreo} 
              onChange={handleChange}
              placeholder='mail@mail.com'
              autoComplete='correo' />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              ASUNTO
            </label>
            <textarea 
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              id="asunto" 
              name='asunto' 
              type="text" 
              value={Tasunto} 
              onChange={handleChange} 
              placeholder="******************" />
          </div>
          <div className="flex items-center justify-between">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              type="submit">
              ENVIAR
            </button>
            {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    ÉXITO
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Se envio correctamente, en breve recibiras contacto por parte de nuestro personal
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
          </div>
        </form>
      </div>
    </section>
  )
}

export default CTA
