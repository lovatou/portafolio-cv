import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function CardEducation() {
    return (
        <>
            <CardGroup>
                <br />
                <Card border="warning" /* style={{ width: '18rem' }} */>
                    <Card.Header>Universidad Autónoma del Estado de México</Card.Header>
                    <Card.Body>
                        <Card.Title> Diplomado Superior en Desarrollo de Software Empresarial </Card.Title>
                        Enero 2023 – Septiembre 2023
                        <Card.Text>
                            Documento Obtenido: Certificado Total y Diploma
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card border="danger" /*  style={{ width: '18rem' }} */>
                    <Card.Header>Universidad Autónoma del Estado de México</Card.Header>
                    <Card.Title>Ingeniería en Computación</Card.Title>
                    Agosto 2015 – Diciembre 2020
                    <Card.Text>
                        Documento Obtenido: Título Profesional y Cedula profesional
                    </Card.Text>
                </Card>

                <Card border="success" /*  style={{ width: '18rem' }} */>
                    <Card.Header>Centro de Estudios Tecnológicos, Industriales y de
                            Servicios N° 153 </Card.Header>
                    <Card.Body>
                        <Card.Title>Soporte y Mantenimiento de Equipo de Cómputo</Card.Title>
                        Agosto 2012 – Julio 2015
                        <Card.Text>
                            Documento Obtenido: Certificado Total
                        </Card.Text>
                    </Card.Body>
                </Card>

            </CardGroup>
           
        </>
    );
}

export default CardEducation;