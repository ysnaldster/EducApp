import React from "react";
import Header from "../components/Header.jsx";
import styled from "styled-components";
import { Button, Stack } from "@chakra-ui/react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { FaUserCircle, FaLock } from "react-icons/fa";
import PersistentDrawerRight from "../components/Header2.jsx";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { MdBuild, MdCall } from "react-icons/md";
import Perfil from "../components/Perfil.jsx";
import Footer from "../components/Footer.jsx";
import { BiSearch } from 'react-icons/bi'
import { BsCursorFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

// Estilos
const StyleMainTitleWelcome = styled.h1`
  font-weight: 600;
  font-size: 40px;
  margin: 20px 50px 25px 20px;
`;

const StyledMainDescription = styled.p`
  margin: 0 50px;
  font-size: 23px;
  margin-bottom: 20px;
`;

const StyledMainHome = styled.div`
  /* height: 93vh; */
  height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledContainerSearchMain = styled(Row)`
  background: #F9B208;
  border-radius: 40px;
  padding: 10px; 
  width: 80%;
  display: flex;
`
const StyledSearchIcon = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: #ffffff;
`
const StyledInputSearch = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 40px;
  text-align: center;
  border: none;
`

// Desktop


const StyledDivSearch = styled.div`
  flex: 1 1 auto;
  display: flex ;
  background: #F9B208;
  padding: 10px 20px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 100px;

`

const StyledTitleMainWelcome = styled.h1`
  font-weight: 600;
  font-size: 40px;
  margin-left: 30px;
`

const StyledSecondDescription = styled.p`
  font-size: 20px;
  position: absolute;
  bottom: 100px;
  width: 25%;
  margin: 30px;
  margin-left: 50px;
`


const Home = () => {

  let anio = new Date().getFullYear()
  return (
    <div >
      {/* <Header/> */}
      <StyledMainHome className='mainContainer d-lg-none' >
        <PersistentDrawerRight />
        <Container fluid style={{ position: 'absolute', top: '0', marginTop: '150px', padding: '0' }} className='d-lg-none'>
          <Carousel className='' style={{ bottom: '85px', height: '0' }}>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/fqmD8MK/1.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/8BPvw6Q/3.png"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/5XZ2SRV/2.png"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/k9ZgTJr/option5.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Container>
        <div className='d-lg-none'>
          <StyleMainTitleWelcome>Bienvenidos a EducApp</StyleMainTitleWelcome>
          <StyledMainDescription>Descubre distintos portales educativos en donde puedes formarte para el futuro</StyledMainDescription>
          <Link to='/ofertas'>
            <Container fluid style={{ display: 'flex', justifyContent: 'center' }}>
              <StyledContainerSearchMain>
                <Col xs={10} style={{ display: 'flex' }}>
                  {/* <StyledInputSearch type='search' placeholder='Realizar una Búsqueda' /> */}
                  <StyledDivSearch >
                    <div type='button' placeholder=' ¡Sorpréndeme!' style={{ padding: '10px 20px', borderRadius: '40px', fontWeight: 'bold', color: 'white', fontSize: '16px' }} pointerEvents="none" value='¡Sorpréndeme!'>¡Sorpréndeme!</div>
                  </StyledDivSearch>
                </Col>
                <StyledSearchIcon xs={2}>
                  <BsCursorFill style={{ fontSize: '40px', color: 'white' }} />
                </StyledSearchIcon>
              </StyledContainerSearchMain>
            </Container>
          </Link>
        </div>
        <Footer />
        {/* Slider */}

        {/* DISEÑO DEL MAIN-HOME DESKTOP */}

        {/* Slider a responsive en breakpoint lg = 992px */}
      </StyledMainHome>
      {/* Footer component */}
      <div className='d-none d-lg-block'>
        <div style={{ height: '100vh' }}>
          <PersistentDrawerRight />
          <Container fluid className='d-none d-lg-block' style={{ padding: '0' }}>
            <Carousel style={{ height: '0' }}>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/fqmD8MK/1.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/8BPvw6Q/3.png"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/5XZ2SRV/2.png"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/k9ZgTJr/option5.png"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          
            <Container fluid style={{ position: 'absolute', bottom: '220px', display: 'flex' }}>
              <div style={{ flex: '2 1 auto' }}>
                <StyledTitleMainWelcome>Bienvenidos a EducApp</StyledTitleMainWelcome>
                {/* <p style = {{fontSize: '20px'}}>Descubre distintos portales educativos en donde puedes formarte para el futuro</p> */}
              </div>
              <Link to = '/ofertas'>
                <StyledDivSearch >
                  <div type='button' placeholder=' ¡Sorpréndeme!' style={{ marginLeft: '30px', padding: '10px 60px', borderRadius: '40px', fontWeight: 'bold', color: 'white', fontSize: '20px' }} pointerEvents="none" value='¡Sorpréndeme!'>¡Sorpréndeme!</div>
                  <BsCursorFill style={{ fontSize: '40px', color: 'white' }} />
                </StyledDivSearch>
              </Link>
            </Container>
          </Container>
          <StyledSecondDescription>Descubre distintos portales educativos en donde puedes formarte para el futuro</StyledSecondDescription>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
