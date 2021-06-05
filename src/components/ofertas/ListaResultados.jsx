import { Center } from "@chakra-ui/layout";
import { Card } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const ResultadosContainer = styled.div`
  padding-top: 30px;
  box-sizing: border-box;
  display: inline-block;
  font-size: 1rem;
  text-align: center;
  width: 100%;
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
  color: rgb(249, 143, 18);
  width: 100%;
  display: inli;
`;

export default function ListaResultados() {
  const mapTemp = [1, 2, 3, 2, 3, 2, 3];
  return (
    <>
      <ResultadosContainer className="container-fluid mt-1">
        {mapTemp.map((x) => (
            <Card
              variant="outlined"
              style={{ marginTop: "5px",textAlign: "left", padding: "25px",borderRadius:"8px" }}
            >
              <Resultado>
                <Foto src="https://i.ibb.co/9NZbMcm/logo-educapp-recortado.png" />
                <Tit_1>
                  Angular: Convierte cualquier template en HTML en una WebAPP
                </Tit_1>
                <br />
                <Tit>Profesor: </Tit>Fernando Herrera
                <br />
                <Tit>Tipo: </Tit>Vitual
                <br />
                <Tit>Lugar: </Tit>Udemy
              </Resultado>
            </Card>
        ))}
        {/* {mapTemp.map((x) => (
          <Resultado>
            <Foto src="https://i.ibb.co/9NZbMcm/logo-educapp-recortado.png" />
            <Tit_1>
              Angular: Convierte cualquier template en HTML en una WebAPP
            </Tit_1>
            <br />
            <Tit>Profesor: </Tit>Fernando Herrera
            <br />
            <Tit>Tipo: </Tit>Vitual
            <br />
            <Tit>Lugar: </Tit>Udemy
          </Resultado>
        ))} */}
      </ResultadosContainer>
    </>
  );
}
