import React, { useEffect, useState, async } from "react";
import { Card } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteContent
} from "../../actions/content";
import { startGetMisCursos } from './../../actions/content';
import {
  Container,
  Box,
  Text,
  Image,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";


const ResultadosContainer = styled.div`
  padding-top: 30px;
  box-sizing: border-box;
  display: inline-block;
  font-size: 1.3rem;
  text-align: center;
  width: 100%;
  height: 100vh;
`;

const Resultado = styled.p`
  text-align: left;
`;

const Foto = styled.img`
  width: 200px;
  border-radius: 3px;
  float: right;
  display: "block";
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Tit = styled.span`
  font-weight: bolder;
  color: rgb(249, 143, 18);
`;

const Tit_1 = styled.p`
  font-weight: bolder;
  font-size: 1.5rem;
  color: #393e46;
  width: 100%;
  display: inline;
`;

export default function ListaResultados() {
  
  const dispatch = useDispatch();

  dispatch(startGetMisCursos())

  const { misCursos, filtro} = useSelector(
    (state) => state.content
  );

  const handleDeleteCard = (item) => {
    dispatch(deleteContent(item.id));
  };

  const handleUpdateCard = () => {
    alert("Accion de editar card");
  };

  const typeOfUser = "client";
  
  return (
    <>
      {/* Muestra unas tarjetas mostrando las ofertas que hay si es que hay, de lo contrario muestra un aviso de que no se encontró */}
      <ResultadosContainer className="container-fluid mt-1">
        {misCursos?.length >= 1 ? (
          misCursos?.map((item, i) => (
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
              }}
            >
              <Resultado>
                <Link
                  to={`/detalles/${item.id}`}
                  style={{ display: "block", minHeight: "200px" }}
                >
                  <Foto
                    src={
                      item.miniatura ||
                      "https://us.123rf.com/450wm/pixelery/pixelery1610/pixelery161000095/65006000-404-de-error-p%C3%A1gina-no-encontrada-.jpg?ver=6"
                    }
                    style={{ border: "1px solid #3333333e" }}
                  />
                  <Tit_1>{item.titulo}</Tit_1>
                  <br />
                  <Tit></Tit>
                  {item.tipo}
                  <span></span>
                  <br />
                  {/* <Tit>A través de </Tit>
                  {item.plataforma}
                  <br /> */}
                  <Tit>Profesor: </Tit>
                  {item.capacitador}
                  <br />
                  <Tit>Modalidad: </Tit>
                  {item.modalidad}
                  <br />
                  <Tit>
                    Cuesta
                    <Text display="inline" color="green">
                      {" "}
                      {item.precio || "Gratis"}
                    </Text>
                  </Tit>
                </Link>

                {/* Opciones para administrador */}

                {typeOfUser == "admin" ? (
                  <>
                    <hr />
                    <p style={{ textAlign: "right" }}>
                      <a
                        className="link link-danger"
                        onClick={() => handleDeleteCard(item)}
                      >
                        Borrar
                      </a>
                      |
                      <a
                        className="link link-success"
                        onClick={handleUpdateCard}
                      >
                        Editar
                      </a>
                    </p>
                  </>
                ) : null}
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
            <>
              No se encontraron resultados
              {filtro ? (
                <span>
                  {" "}
                  que coincidan con la búsqueda{" "}
                  <strong style={{ color: "#3700ff" }}>{filtro}</strong>{" "}
                </span>
              ) : null}
              .
            </>
          </div>
        )}
      </ResultadosContainer>
    </>
  );
}
