import React from 'react'
import Header from '../components/Header.jsx'
import styled from 'styled-components'
import { Button, Stack } from "@chakra-ui/react"
import { Container, Row, Col } from 'react-bootstrap'
import { FaUserCircle, FaLock } from 'react-icons/fa';
import PersistentDrawerRight from '../components/Header2.jsx'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { MdBuild , MdCall } from "react-icons/md"


// Estilos 
const StyleMainTitleWelcome = styled.h1`
    font-weight: 600;
    font-size: 50px;
    margin: 50px 50px 25px 50px;
`

const StyledMainDescription = styled.p`
    margin: 0 50px;
    font-size: 23px;
    margin-bottom: 120px;
`

const StyledMainHome = styled.div`
    height: 93vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`


const Home = () => {

    let anio =new Date().getFullYear()
    return (
        <div>
            <StyledMainHome className='mainContainer' >
                <PersistentDrawerRight />
                <StyleMainTitleWelcome>Bienvenidos a EducApp</StyleMainTitleWelcome>
                <StyledMainDescription>Descubre distintos portales educativos en donde puedes formarte para el futuro</StyledMainDescription>
                <Container >
                    <Row>
                        <Col xs={12}>
                            <FaLock/>
                            <div></div>
                            {/* <Stack direction="row" spacing={4}>
                            <Button leftIcon={MdBuild} colorScheme="pink" variant="solid" style={{ width: '100%', margin: '0 30px', height: '50px' }}>
                                    Settings
                            </Button>
                            </Stack> */}
                        </Col>
                    </Row>
                </Container>
            </StyledMainHome>
            <Container fluid style={{ height: '7vh', background: '#393E46', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <AiOutlineCopyrightCircle />
                <div>{anio} EducApp</div>
            </Container>
        </div>
    )
}

export default Home;
