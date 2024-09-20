import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


function pie() {
  return (
    <Container fluid>
      <Row>
        <Col xs={4} md={4}>
            
        </Col>
        <Col xs={4} md={4} className='text-center'>
            <FaFacebook size={42} />
            <FaInstagram size={42} />
            <FaLinkedin size={42}/>
        </Col>
        <Col xs={4} md={4}>
            
        </Col>
      </Row>
      <Row>
        <col></col>
        <col></col>
        <col></col>
      </Row>
      <Row>
        <div className='text-center'>
            AVISO DE PRIVACIDAD
        </div>
      </Row>
      <Row>
        <div className='text-center'>
            Copyright © CATSA 2024 Todos los derechos reservados.
        </div>
      </Row>
    </Container>
  );
}

export default pie;