import React, { useState } from "react";
import styled from "styled-components";
import BtnBuscarMas from "../components/ofertas/BtnBuscarTemas";
import ListaResultados from "../components/ofertas/ListaResultados";

const OfertasContainer = styled.div`
  overflow: visible;
  margin-top: 100px;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 10px;
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
    <OfertasContainer
      className="container-fluid h-100"
      style={{ overflow: "iauto" }}
    >
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
    </OfertasContainer>
  );
}

export default Ofertas;
