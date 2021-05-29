import React from 'react'
import { Navbar, Container, Nav, Modal, Row, Col } from 'react-bootstrap'
import FormModal from './FormModal.jsx'
import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter, RadioGroup, Stack, Radio, useDisclosure } from '@chakra-ui/react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

// Style Components
const StyledNavContainer = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledImgLogo = styled.img`
    height: 90px !important;
`
const StyledButtonExplorar = styled(Button)`
    background: #F98F12 !important;
    border: none !important;
    color: white !important;

`
// Modal Izquierdo
function PlacementExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState("left")

    return (
        <>
            <RadioGroup defaultValue={placement} onChange={setPlacement}>
            </RadioGroup>
            <StyledButtonExplorar  onClick={onOpen}>
                Explorar
            </StyledButtonExplorar >
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
                    <Button colorScheme="blue" onClick={onClose}>
                        Open
                </Button>
                    <DrawerBody>
                        <Link to = '/login'>
                            Ingresar
                        </Link> <br/>
                        <Link to = '/registro'>
                            Registro
                        </Link>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

const Header = () => {
    return (
        <React.Fragment>
            <Container fluid style={{ background: '#393E46' }}>
                <Row>
                    <Col xs={4}>
                        <StyledImgLogo src='https://i.ibb.co/26ZyFJV/logot.png' />
                    </Col>
                    <StyledNavContainer xs={6}>
                        <Navbar>
                            <Container fluid>
                                <Navbar.Collapse className="justify-content-end">
                                    <Nav.Link href="#pricing">
                                        <PlacementExample />
                                    </Nav.Link>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </StyledNavContainer>
                </Row>
            </Container>

        </React.Fragment>
    )
}

export default Header
