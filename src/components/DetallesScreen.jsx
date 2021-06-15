import React, { useEffect, useReducer } from "react";
import { Card } from "@material-ui/core";
import styled from "styled-components";
import { Link, to } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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
  let { recurso } = useParams();

  const { content } = useSelector((state) => state.content);

  let item = content?.filter(indice => indice.id === recurso)
  item = item[0]

  return (
    <>
      {/* Muestra unas tarjetas mostrando las ofertas que hay si es que hay, de lo contrario muestra un aviso de que no se encontró */}
      <ResultadosContainer className="container-fluid mt-1">
          <Card
              key={item.id}
              variant="outlined"
              style={{
                marginTop: "10px",
                textAlign: "left",
                padding: "25px",
                borderRadius: "8px",
                background: "#ffffff",
                boxShadow: "0px 0px 1px 0px #3A2D31",
                width:"80%"
              }}
            >
                  <Foto src="https://i.ibb.co/9NZbMcm/logo-educapp-recortado.png" />
                  <Tit_1>{item.titulo}</Tit_1>
                  <br />
                  <Tit>Tipo: </Tit>
                  {item.capacitador}
                  <br />
                  <Tit>Tipo: </Tit>
                  {item.tipo}
                  <br />
                  <Tit>Precio: </Tit>
                  {item.precio}
                  <br />
                  <Tit>Prestador: </Tit>
                  {item.profesor}
                  <br />
                  <Tit>Tipo: </Tit>
                  {item.tipo}
                  <br />
                  <Tit>Precio: </Tit>
                  {item.precio}
            </Card>
      </ResultadosContainer>
    </>
  );
}
