import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function ContainerFluidExample() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });
  const [token, setToken] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <Image src="contact.JPG" rounded fluid />
        </Col>
        <Col xs={12} md={6} lg={7}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control 
                type="text" 
                name="nombre" 
                value={formData.nombre} 
                onChange={handleChange} 
                rows={1}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCorreo">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control 
                type="email" 
                name="correo" 
                placeholder="nombre@ejemplo.com" 
                value={formData.correo} 
                onChange={handleChange} 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMensaje">
              <Form.Label>Asunto</Form.Label>
              <Form.Control 
                as="textarea" 
                name="mensaje" 
                value={formData.mensaje} 
                onChange={handleChange} 
                rows={6} 
              />
            </Form.Group>
            <Button variant="primary" type="submit">Enviar</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerFluidExample;
