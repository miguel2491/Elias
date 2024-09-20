import React, {useState} from 'react';
import '../styles/Tabs.css';
import bombeoImage from '../images/Productos/Bombeo.jpeg';
import concretoImage from '../images/Productos/CopiaConcretoPremezclado.png';
import laboratorioImage from '../images/Productos/Laboratorio.jpeg';
import agregadosImage from '../images/Productos/Agregados.jpeg';
import asesoriaImage from '../images/Productos/Asesoria.png';

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    { id: 0, label: 'Concreto Premezclado', content: 'Con nuestras 12 familias de concretos, y miles de diseños, garantizamos que encuentras el producto ideal para tu proyecto.', image: concretoImage},
    { id: 1, label: 'Bombeo', content: 'En cada una de nuestras plantas, cuentas con la confianza de que tu producto fue probado y aprobado en nuestros laboratorios certificados por la EMA (Entidad Mexicana de Acreitación A.C.). Para nosotros, la calidad de tu concreto es innegociable.', image: bombeoImage},
    { id: 2, label: 'Laboratoro', content: 'En cada una de nuestras plantas, cuentas con la confianza de que tu producto fue probado y aprobado en nuestros laboratorios certificados por la EMA (Entidad Mexicana de Acreitación A.C.). Para nosotros, la calidad de tu concreto es innegociable.', image: laboratorioImage},
    { id: 3, label: 'Agregados y Aditivos', content: 'Tu satisfacción lo es todo para nosotros. Es por esto que en la elaboración de nuestros productos, utilizamos los mejores agregados y aditivos. Tu concreto cumple con las Normas Oficiales Mexicanas para el concreto premezclado, así como con la norma NMX-C-155.', image: agregadosImage},
    { id: 4, label: 'Asesoría', content: 'Nuestro compromiso contigo es total. El mejor equipo de profesionales te asesora, asegurando la correcta aplicación de tu concreto y la ejecución de tu obra.', image: asesoriaImage},
  ]
  return (

    <div className="my-custom-tabs" id="plans">
    <div className="tabs">
        {tabsData.map(tab => (
            <li key={tab.id}
                className={activeTab === tab.id ? 'active' : ''}
                onClick={() => setActiveTab(tab.id)}
            >
                {tab.label}
            </li>
        ))}
    </div>
    <div className="contents">
        {tabsData.map(tab => (
            <div key={tab.id} className={`box ${activeTab === tab.id ? 'show' : 'hide'}`}>
              <img src={tabsData.find(tab => tab.id === activeTab).image} atlt="Descripcion"/>
                <div>
                    <h3>{tab.label}</h3>
                    <p>{tab.content}</p>
                </div>
            </div>
        ))}
    </div>
</div>
);
}

export default Tabs;