import React, { useState } from "react";
import styled from "styled-components";
import BtnBuscarMas from "../components/BtnBuscarTemas";
import ListaResultados from "../components/ListaResultados";

const OfetasContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-bottom:10px;
`;
const TextPrincipal = styled.h3`
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
        {/* Muestra un botón de acuerdo a si ya se buscaron temas o no */}
        {resultados ? (
          <TextPrincipal>Selecciona un tema:</TextPrincipal>
        ) : (
          <TextPrincipal>Tema seleccionado:</TextPrincipal>
        )}
        <BtnBuscarMas />
        </div>
        <div>
          <ListaResultados />
        </div>
    </OfetasContainer>
  );
}

export default Ofertas;
