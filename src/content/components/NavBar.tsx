import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navb from 'react-bootstrap/Navbar';
import { Button, NavDropdown } from 'react-bootstrap';

export const Navbar: React.FC = () => {

    return (

        <Navb expand="md" className="bg-body-tertiary navbar-dark bg-dark  p-1" data-bs-theme="dark">
            <Container>
                <Navb.Brand href="/dashboard">
                    Daniel C. Lobato
                    {/* <img
                            className="logo"
                            src={logo}
                            width={"45"}
                            alt="Cyclops IX" /> */}
                    <span style={{ marginLeft: '10px' }}></span>
                </Navb.Brand>
                <Navb.Toggle aria-controls="basic-navbar-nav" />
                <Navb.Collapse id="basic-navbar-nav " className="justify-content-end">
                    <Nav   >
                        <Nav.Link href="/dashboard">
                            Dashboard
                        </Nav.Link>
                        <Nav.Link href="#sobremi">
                            Servicios
                        </Nav.Link>
                        <NavDropdown title="Sobre Mi" id="basic-nav-dropdown">
                            <Button >
                                <NavDropdown.Item >Experiencia Laboral</NavDropdown.Item>
                            </Button>

                            <Button>
                                <NavDropdown.Item>Educación Profesional</NavDropdown.Item>
                            </Button>

                            {/*  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>


                </Navb.Collapse>

            </Container>
        </Navb>

    )
}