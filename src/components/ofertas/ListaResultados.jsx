import React from "react";
import { Card } from "@material-ui/core";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { to } from "react-router-dom";

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
  /* width: 100%;
  text-align: center; */
  font-weight: bolder;
  font-size: 1.5rem;
  color: rgb(255, 255, 255);
  width: 100%;
  display: inli;
`;

export default function ListaResultados() {
  const { titulo, tipo, profesor, precio } = useSelector(
    (state) => state.content
  );

  const { content } = useSelector((state) => state.content);
  return (
    <>

    {/* Muestra unas tarjetas mostrando las ofertas que hay si es que hay, de lo contrario muestra un aviso de que no se encontró */}
      <ResultadosContainer className="container-fluid mt-1">

        {content?.length >= 1?(
          content?.map((item) => (
            <Card
              key={item.uid}
              variant="outlined"
              style={{
                marginTop: "10px",
                textAlign: "left",
                padding: "25px",
                borderRadius: "8px",
                background: "#afafaf",
                cursor: "pointer",
                // to="/"
              }}
            >
              <Resultado>
                <Foto src="https://i.ibb.co/9NZbMcm/logo-educapp-recortado.png" />
                <Tit_1>{item.titulo}</Tit_1>
                <br />
                <Tit>: </Tit>
                {item.profesor}
                <br />
                <Tit>Tipo: </Tit>
                {item.tipo}
                <br />
                <Tit>Precio: </Tit>
                {item.precio}
                <Tit>Prestador: </Tit>
                {item.profesor}
                <br />
                <Tit>Tipo: </Tit>
                {item.tipo}
                <br />
                <Tit>Precio: </Tit>
                {item.precio}
                <button className="btn btn-danger">Borrar</button>
              </Resultado>
            </Card>
          ))
        ) : (
          <div
            variant="outlined"
            style={{
              marginTop: "5px",
              textAlign: "left",
              padding: "25px",
              borderRadius: "8px",
              background: "#afafaf",
            }}
          >
            <>No se encontraron resultados que coincidan con la búsqueda...</>
          </div>
        )}
      </ResultadosContainer>
    </>
  );
}
