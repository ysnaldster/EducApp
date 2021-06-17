import React from 'react'
import PersistentDrawerRight from '../components/Header2'
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react"
import { Container, Row, Card, Button } from 'react-bootstrap'
import styled from 'styled-components'
import Footer from '../components/Footer'

// Estilos 
const StyledContainerPhotos = styled(Container)`
    position: absolute;
    top: 100px;

`

const StyledImgPreset = styled.img`
    height: 250px;
    width: 250px;
    /* position: absolute;
    top: 180px;
    left: 100px;
    border-radius: 150px; */
`

const StyledImgPreset2 = styled.img`
    height: 250px;
    width: 250px;
    /* position: absolute;
    top: 180px;
    left: 400px;
    border-radius: 150px; */
`

const Nosotros = () => {
    return (
        <div>
            <PersistentDrawerRight />
            <div style={{ width: '100%', height: '400px', background: '#F98F12' }}>
            </div>
            <Container fluid style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', position: 'relative', bottom: '300px' }}>
                <Card style={{ width: '18rem', margin: '20px' }}>
                    <Card.Img variant="top" src="https://i.ibb.co/8DPrQXv/foto-editada.png" width='250px' height='250px' style={{ borderRadius: '150px' }} />
                    <Card.Body>
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
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer>
                        Redes
                    </Card.Footer>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.ibb.co/CQ1QZxT/foto.jpg" width='250px' height='250px' style={{ borderRadius: '150px' }} />
                    <Card.Body>
                        <Card.Title>Elver Tobo</Card.Title>
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
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer>
                        Redes
                    </Card.Footer>
                </Card>
            </Container>
            <StyledH1Martin>¡Hola a todos, Soy Martin!</StyledH1Martin>
            <div style = {{display: 'flex', position: 'relative', bottom: '200px'}}>
                <img src="https://i.ibb.co/QvkRw5K/884fa2076043f33d5e49ea2a5ced8cc0c14dfd9b497f5f2800f60df0c9e9c54b-0.png" />
                <div style = {{height: '398px',width: '100%' ,background: 'white'}}></div>
            </div>
            <Footer />
        </div>
    )
}

export default Nosotros

const StyledH1Martin = styled.h1`
    position: relative;
    z-index: 1;
    left: 200px;
    bottom: 80px;
    font-size: 20px;
    width: 30%;
`