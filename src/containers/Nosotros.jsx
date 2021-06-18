import React, { useState } from 'react'
import PersistentDrawerRight from '../components/Header2'
import { Container, Row, Card, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Footer from '../components/Footer'
import { AiFillGithub } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
} from "@chakra-ui/react"

// Estilos 
const StyledContainerPhotos = styled(Container)`
    position: absolute;
    top: 100px;

`

const StyledColRedes = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledH1Martin = styled.h1`
    position: relative;
    z-index: 1;
    left: 200px;
    bottom: 80px;
    font-size: 20px;
    width: 30%;
    font-weight: bold;
`


const StyledSecondH1 = styled.h1`
    font-size: 40px;
    padding: 40px 40px 50px 40px;
    display: flex;

`

const StyledDivDescrip = styled.div`
    height: 398px;
    width: 100%;
    background: white;
    display: flex !important;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 20px;
    font-weight: bold;
    font-size: 20px;

`

const Nosotros = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [modal, setModal] = useState(true)



    return (
        <div>
            <PersistentDrawerRight />
            <div style={{ fontSize: '35px', padding: '20px', position: 'absolute', top: '80px', margin: '20px', color: '#ffffff', fontWeight: 'bold' }}>Equipo de Desarrollo</div>
            <div style={{ width: '100%', height: '400px', background: '#F98F12' }}>
            </div>
            <Container fluid style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', position: 'relative', bottom: '180px' }}>
                <Card style={{ width: '18rem', margin: '20px' }}>
                    <Card.Img variant="top" src="https://i.ibb.co/FHZJV7P/Dise-o-sin-t-tulo-1.png" width='250px' height='250px' style={{ borderRadius: '150px' }} />
                    <Card.Body  style = {{height: '264px'}}>
                        <Card.Title>Ysnaldo López</Card.Title>
                        <Card.Text>
                            "Ingeniero industrial en
                            formación, con
                            competencias en el
                            desarrollo de aplicaciones
                            en ReactJs y creación de
                            interfaces adaptadas al
                            usuario. Motivado por el
                            mundo de la tecnología y el
                            aprendizaje constante, con
                            habilidades para el trabajo
                            en equipo, priorización de
                            actividades y orientación al
                            logro."
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Container fluid >
                            <Row>
                                <StyledColRedes xs={6}>
                                    <a href='https://github.com/YsnaldoXVen' target='_blank'>
                                        <AiFillGithub style={{ fontSize: '30px' }} />
                                    </a>
                                </StyledColRedes>
                                <StyledColRedes xs={6} id='ysnaldo'>
                                    <MdEmail style={{ fontSize: '30px' }} onClick={() => {
                                        setModal(true)
                                        onOpen()
                                    }} />
                                </StyledColRedes>
                            </Row>
                        </Container>
                    </Card.Footer>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.ibb.co/vBr0hLf/Dise-o-sin-t-tulo.png" width='250px' height='250px' style={{ borderRadius: '150px' }} />
                    <Card.Body style = {{height: '264px'}}>
                        <Card.Title>Elver Tobo</Card.Title>
                        <Card.Text>
                            "Desarrollador Frontend y estudiante de 6to semestre de Ingeniería en Software con competencias en React, JavaScript, SQL, PHP y Bootstrap, con habilidades para trabajo en equipo, tolerancia al cambio, comunicación asertiva y trabajo bajo presión. Mi característica principal es que soy autodidacta"
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Container fluid >
                            <Row>
                                <StyledColRedes xs={6}>
                                    <a href='https://github.com/elverytr' target='_blank'>
                                        <AiFillGithub style={{ fontSize: '30px' }} />
                                    </a>
                                </StyledColRedes>
                                <StyledColRedes xs={6} id='elver'>
                                    <Modal isOpen={isOpen} onClose={onClose}>
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', fontSize: '20px' }}>Correo Electrónico</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                {
                                                    modal ?
                                                        <div>
                                                            <p style={{ textAlign: 'center' }}>
                                                                ysnaldolopez@gmail.com
                                                            </p>
                                                        </div> :
                                                        <div>
                                                            <p style={{ textAlign: 'center' }}>

                                                                elvertobo2017@gmail.com
                                                            </p>
                                                        </div>
                                                }
                                            </ModalBody>
                                        </ModalContent>
                                    </Modal>
                                    <MdEmail style={{ fontSize: '30px' }} onClick={() => {
                                        setModal(false)
                                        onOpen()
                                    }} />
                                </StyledColRedes>
                            </Row>
                        </Container>
                    </Card.Footer>
                </Card>
            </Container>
            <div style={{ height: '398px', width: '100%', background: 'white', margin: '50px 0px', position: 'relative', bottom: '200px' }} className='d-sm-none'>
                <h1 style={{ fontSize: '35px', padding: '40px 40px 10px 40px' }}>Somos un emprendimiento tecnológico</h1>
                <p style={{ padding: '0px 40px 20px 40px' }}>EducApp nace de la problemática actual en el país, con respecto a la búsqueda de un trabajo formal, ya que las organizaciones en su gran parte se encargan de exigir experiencia o dominio en alguna teconología o área en específico</p>
                <p style={{ padding: '0px 40px 50px 40px' }}>Descubre varios portales web, en donde podras adquirir la formación necesario de acuerdo a la habilidad que selecciones</p>
            </div>
            <div style={{ height: '398px', width: '100%', background: 'white', margin: '50px 0px', position: 'relative', bottom: '200px', display: 'flex !important', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} className='d-none d-sm-block'>
                <StyledSecondH1>Somos un emprendimiento tecnológico</StyledSecondH1>
                <p style={{ fontSize: '18px', padding: '0 40px' }}>EducApp nace de la problemática actual en el país, con respecto a la búsqueda de un trabajo formal, ya que las organizaciones en su gran parte se encargan de exigir experiencia o dominio en alguna teconología o área en específico</p>
                <p style={{ fontSize: '18px', padding: '40px 40px' }}>Descubre varios portales web, en donde podras adquirir la formación necesario de acuerdo a la habilidad que selecciones</p>
            </div>
            <StyledH1Martin>¡Hola a todos, Soy Martin!</StyledH1Martin>
            <div style={{ display: 'flex', position: 'relative', bottom: '200px', background: 'white' }}>
                <img src="https://i.ibb.co/QvkRw5K/884fa2076043f33d5e49ea2a5ced8cc0c14dfd9b497f5f2800f60df0c9e9c54b-0.png" />
                <StyledDivDescrip style={{ height: '398px', width: '100%', background: 'white' }} className='d-none d-sm-block'>Martin | Usuario de Navegabilidad de EducApp</StyledDivDescrip>
            </div>
            <div className='d-sm-none'>
                <div style={{ width: '100%', background: 'white', padding: '10px', position: 'absolute', textAlign: 'end', bottom: '200px', fontSize: '20px', fontWeight: 'bold' }}>
                    Martin | Usuario de Navegabilidad de EducApp
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Nosotros


