import React, { useState } from "react";
import styled from "styled-components";
import BtnBuscarMas from "../components/BtnBuscarTemas";
import ListaResultados from "../components/ListaResultados";

const OfetasContainer = styled.div`
  background-color: #f8f5f1;
`;
const TextPrincipal = styled.h1`
  color: #f7a440;
`;
const Tema = styled.h1`
  color: #f7a440;
`;

function Ofertas() {
  const [resultados, setresultados] = useState(false);
    
  return (
    <OfetasContainer className="container-fluid h-100">
          <div>
            {resultados ? (
              <TextPrincipal>Selecciona un tema:</TextPrincipal>
            ) : (
              <TextPrincipal>Tema seleccionado:</TextPrincipal>
            )}
            <BtnBuscarMas />
            <ListaResultados />
          </div>
    </OfetasContainer>
  );
}

export default Ofertas;
