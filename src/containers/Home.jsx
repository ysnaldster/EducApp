import React from 'react'
import Header from '../components/Header.jsx'
import styled from 'styled-components'
import { Button, Stack, } from "@chakra-ui/react"
import {Container, Row, Col } from 'react-bootstrap'
import { FaUserCircle, FaLock } from 'react-icons/fa';

// Estilos 
const StyleMainTitleWelcome = styled.h1`
    font-weight: 600;
    font-size: 30px;
    margin: 50px 50px 25px 50px;
`

const StyledMainDescription = styled.p`
    margin: 0 50px;
    font-size: 16px;
`

const Home = () => {
    return (
        <div>
            <Header />
            <StyleMainTitleWelcome>Bienvenidos a EducApp</StyleMainTitleWelcome>
            <StyledMainDescription>Descubre distintos portales educativos en donde puedes formarte para el futuro</StyledMainDescription>
            <Container>
                <Row>
                    <Col xs={12}>
                        <Stack direction="row" spacing={4}>
                            <Button leftIcon={FaLock} colorScheme="pink" variant="solid">
                                Settings
                            </Button>
                        </Stack>

                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Home;
