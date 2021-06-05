import React, { useState } from "react";
import styled from "styled-components";
import BtnBuscarMas from "../components/ofertas/BtnBuscarTemas";
import ListaResultados from "../components/ofertas/ListaResultados";
import PersistentDrawerRight from "../components/Header2";
import Footer from "../components/Footer";

const OfertasContainer = styled.div`
  overflow: visible;
  margin-top: 100px;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 10px;
  text-align: center;
`;
const Seccion = styled.h1`
  width: 73%;
  display: inline-block;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

function Ofertas() {

  const [resultados, setresultados] = useState(false);

  return (
    <>
      <PersistentDrawerRight />
      <OfertasContainer className="container-fluid h-100">
        <Seccion>
          <BtnBuscarMas />
        </Seccion>
        <Seccion>
          <ListaResultados />
        </Seccion>
        {/* Footer */}
      </OfertasContainer>
       <Footer/>
    </>
  );
}

export default Ofertas;
