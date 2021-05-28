import React from 'react'
import { Navbar, Container, Nav, Modal, Button, Row, Col } from 'react-bootstrap'
import FormModal from './FormModal.jsx'

const Header = () => {
    return (
        <React.Fragment>
            {/* <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto justify-content-end">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">
                            <FormModal />
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}
            <Container fluid>
                <Row>
                    <Col xs={4}>
                        <img src='https://i.ibb.co/26ZyFJV/logot.png' />
                    </Col>
                    <Col xs={8}>
                        <Navbar>
                            <Container fluid>
                                <Navbar.Brand href="#home">
                                </Navbar.Brand>
                                <Navbar.Collapse className="justify-content-end">
                                    <Navbar.Text>
                                        {/* Signed in as: <a href="#login">Mark Otto</a> */}
                                        <Nav.Link href="#pricing">
                                            <FormModal />
                                        </Nav.Link>
                                    </Navbar.Text>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>

                    </Col>
                </Row>

            </Container>


        </React.Fragment>
    )
}

export default Header
