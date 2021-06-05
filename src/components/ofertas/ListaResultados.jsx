import { Center } from "@chakra-ui/layout";
import { Card } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

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


  const {titulo,tipo,profesor,precio} = useSelector(state => state.content)


  const mapTemp = [1, 2, 3, 2, 3, 2, 3];
  return (
    <>
      <ResultadosContainer className="container-fluid mt-1">
        {mapTemp.map((xf) => (
            <Card
              variant="outlined"
              style={{ marginTop: "5px",textAlign: "left", padding: "25px",borderRadius:"8px",background:"#afafaf" }}
            >
              <Resultado>
               <Foto src="https://i.ibb.co/9NZbMcm/logo-educapp-recortado.png" />
                <Tit_1>
                  {titulo}
                </Tit_1>
                <br />
                <Tit>Profesor: </Tit>{profesor}
                <br />
                <Tit>Tipo: </Tit>{tipo}
                <br />
                <Tit>Precio: </Tit>{precio}

              </Resultado>
            </Card>
        ))}
      </ResultadosContainer>
    </>
  );
}
