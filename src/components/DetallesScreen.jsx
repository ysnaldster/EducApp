import React, { useEffect } from "react";
import { Card } from "@material-ui/core";
import styled from "styled-components";
import { Link, to } from "react-router-dom";

const ResultadosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  box-sizing: border-box;
  font-size: 1rem;
  width: 100vw;
  height: 100vh;
`;

const Resultado = styled.p`
  text-align: left;
`;

const Foto = styled.img`
  width: 100px;
  border-radius: 3px;
  float: right;
`;

const Tit = styled.span`
  font-weight: bolder;
  color: rgb(249, 143, 18);
`;

const Tit_1 = styled.p`
  font-weight: bolder;
  font-size: 1.5rem;
  color: rgb(255, 255, 255);
  width: 100%;
  display: inline;
`;

export default function DetallesScreen() {
  return (
    <>
      {/* Muestra unas tarjetas mostrando las ofertas que hay si es que hay, de lo contrario muestra un aviso de que no se encontró */}
      <ResultadosContainer className="container-fluid mt-1">
        <Card
          variant="outlined"
          style={{
            textAlign: "left",
            padding: "25px",
            borderRadius: "8px",
            background: "#afafaf",
          }}
        >
          <Resultado>
              
          </Resultado>
        </Card>
      </ResultadosContainer>
    </>
  );
}
