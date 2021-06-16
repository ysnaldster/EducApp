import React from "react";
import Header from "../components/Header.jsx";
import styled from "styled-components";
import { Button, Stack } from "@chakra-ui/react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUserCircle, FaLock } from "react-icons/fa";
import PersistentDrawerRight from "../components/Header2.jsx";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { MdBuild, MdCall } from "react-icons/md";
import Perfil from "../components/Perfil.jsx";
import Footer from "../components/Footer.jsx";
import {BiSearch} from 'react-icons/bi'

// Estilos
const StyleMainTitleWelcome = styled.h1`
  font-weight: 600;
  font-size: 50px;
  margin: 50px 50px 25px 50px;
`;

const StyledMainDescription = styled.p`
  margin: 0 50px;
  font-size: 23px;
  margin-bottom: 120px;
`;

const StyledMainHome = styled.div`
  height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledContainerSearchMain = styled(Row)`
  background: #F98F12;
  border-radius: 40px;
  padding: 10px; 
  width: 80%;
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
const Home = () => {

  let anio = new Date().getFullYear()
  return (
    <div>
      {/* <Header/> */}
      <StyledMainHome className='mainContainer' >
        <PersistentDrawerRight />
        <StyleMainTitleWelcome>Bienvenidos a EducApp</StyleMainTitleWelcome>
        <StyledMainDescription>Descubre distintos portales educativos en donde puedes formarte para el futuro</StyledMainDescription>
        <Container fluid style = {{display: 'flex', justifyContent: 'center'}}>
          <StyledContainerSearchMain>
            <StyledSearchIcon xs={2}>
                <BiSearch />
            </StyledSearchIcon>
            <Col xs = {10} >
                <StyledInputSearch type='search' placeholder='Realizar una Búsqueda' />
            </Col>
          </StyledContainerSearchMain>
        </Container>
      </StyledMainHome>
      {/* Footer component */}
      <Footer />

      {/* Footer quemado
            <Container fluid style={{ height: '7vh', background: '#393E46', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <AiOutlineCopyrightCircle />
                <div>{anio} EducApp</div>
            </Container> */}
    </div>
  );
};

export default Home;
