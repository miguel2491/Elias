import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Bar from './views/barra';
import Tabs from './views/Tabs';
import Ainicio from './views/Ainicio';
import Carru from './views/Carru';
import Contacto from './views/Contacto';
import Mapa from './views/mapa';
import Pie from './views/pie';
import Panel from './views/panel';
import Letras from './views/letras';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs">
      <Bar />
      <Row>
        <Ainicio id="inicio"/>
      </Row> 
      <Row style={{ paddingTop: '50%', margin:'8%'}} id="sobre-nosotros">
        <div className='text-center' style={{ fontSize:'1.5rem'}}>
          En <span style={{ color: '#e62a43' }}>CATSA</span>, además de encontrar el mejor concreto; también encuentras el camino hacia tus sueños. La calidad de nuestros productos, construyen y son fuente de <span style={{ color: '#e62a43' }}>Cimientos Fuertes, Soluciones Reales y Futuros Brillantes.</span>
        </div>
      </Row>
      <Row style={{margin:'5%'}}>  
        <Panel />
      </Row>
      
      <Row style={{paddingTop:'5%'}}>
      <Tabs id="productos"/>
      </Row>
      <Row style={{paddingTop:'20%'}}>
        <Carru />
      </Row>
      <Container>
        <Row style={{ paddingTop: '10%'}} id="clientes">
          <div className='text-center' style={{ fontSize:'1.4rem'}}>
            Miles de profesionales de la construcción confían en nosotros para la realización de los proyectos <span style={{ color: '#e62a43' }}>más desafiantes.</span> Así como ellos, <span style={{ color: '#e62a43' }}>únete a la Alta Tecnología</span> y comprueba porque nuestros valores agregados, <span style={{ color: '#e62a43' }}>hacen la diferencia.</span>
          </div>
        </Row>        
      </Container>
      <Row>
        <Mapa />
      </Row>
      <Row>
      <Contacto />
      </Row> 
      <Letras/>
      <Pie id="contacto"/>
      </ThemeProvider>
  );
}

export default App;
