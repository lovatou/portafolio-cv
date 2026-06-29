import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function CardAbout() {
    return (
        <>
            <Row xs={1} md={2} className="g-4">
                <br />
                <Card border="warning" /* style={{ width: '18rem' }} */>
                    <Card.Header>The Cocktail America</Card.Header>
                    <Card.Body>
                        <Card.Title>Rol: Architect Solutions - Core Bancario </Card.Title>
                        Jul. 2025 - Nov. 2025
                        <Card.Text>
                            Funciones:
                            • Análisis de requerimientos de negocio Bancoppel
                            • Diseño de solución en arquitectura general enfocado en integración con
                            Mulesoft
                            • Diseño de solución en seguridad para autenticación y cifrado en transito y
                            cifrado en reposo.
                            •
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card border="danger" /*  style={{ width: '18rem' }} */>
                    <Card.Header>IDS Comercial</Card.Header>
                    <Card.Title>Rol: Architect Solutions - Core Bancario </Card.Title>
                    Dic. 2024 - Jun. 2025
                    <Card.Text>
                        Funciones:
                        • Análisis de requerimientos de negocio Banamex
                        • Diseño de solución en arquitectura general enfocado en integración con
                        Mulesoft
                        • Diseño de solución en seguridad para autenticación y cifrado en transito y
                        cifrado en reposo.
                        •
                    </Card.Text>
                </Card>

                <Card border="success" /*  style={{ width: '18rem' }} */>
                    <Card.Header>Multimedia Corporativa</Card.Header>
                    <Card.Body>
                        <Card.Title>Rol: Desarrollador Full Stack </Card.Title>
                        Jun. 2024 - Nov. 2024
                        <Card.Text>
                            Funciones:
                            WEB (Cyclops) para el cliente Promoespacio, aplicación la cual permite
                            captar la atención del público, en la parte del Front-End se desarrolló en
                            React Js con TypeScript.
                            •  Mantenimiento y correcciones del funcionamiento al código en el
                            Back-End en Nest Js con TypeScript
                            • Dar soporte a los diferentes sistemas que maneja multimedia
                            corporativa, así como la configuración de servidores para el alojamiento de
                            dichos proyectos
                            • Crear documentación de usuario, diagramas de flujo tanto de la Api,
                            como de la parte Web, de todo su funcionamiento.
                            • Plantear soluciones optimas y se puedan implementar de forma
                            correcta, y detectar posibles problemas de seguridad.

                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card border="secondary" /* style={{ width: '18rem' }} */>
                    <Card.Header>Badak Soluciones</Card.Header>
                    <Card.Body>
                        <Card.Title>Rol: Desarrollador Full Stack | Analista Funcional </Card.Title>
                        Ago. 2021 - Mar. 2024
                        <Card.Text>
                            Funciones:
                            • Análisis de requerimientos del cliente para GNP seguros  y  UACh
                            (Universidad Autónoma de Chapingo)
                            • Realización de estimaciones con tiempos y complejidades para el
                            desarrollo.
                            • Implementación de segunda fase de desarrollo en Back-End y Front
                            End.
                            • Despliegues a ambientes de desarrollo, QA y Producción tanto en
                            Back-end, como en Front-end.
                            • Administrador de infraestructura Cloud (GCP) y Git-Lab
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </>
    );
}

export default CardAbout;