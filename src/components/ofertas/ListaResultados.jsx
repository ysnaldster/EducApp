import React, { useEffect, useState,async } from "react";
import { firebase } from "../../firebase/firebase-config";
import { Card } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import {
  deleteContent,
  searchContentWithFilter,
  startGetContent,
} from "../../actions/content";
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
`;

const Resultado = styled.p`
  text-align: left;
`;

const Foto = styled.img`
  width: 200px;
  border-radius: 3px;
  float: right;
  display:"block";  @media(max-width:800px){
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
  let contenidoFiltrado = []
  const dispatch = useDispatch();
  
  const { data } = useFetch("https://stormy-basin-46514.herokuapp.com/cursos") || [];

  const ladata = data?data:[]

  const { content, filtro, chageRealized } = useSelector(
    (state) => state.content
    );

  useEffect(() => {
    let previousFilter = "initial";
    // console.log("Inicial:" ,previousFilter, " Filtro: " ,filtro)
    if (filtro?.length >= 1 && filtro != previousFilter) {
      // dispatch(searchContentWithFilter(filtro));
      content.forEach(console.log("item => {item.id.indexOf('D')?contenidoFiltrado+= item:null}"))
      console.log(contenidoFiltrado);
      previousFilter = filtro;
    } else {
      dispatch(startGetContent(content))
    }
    // console.log("Inicial:" ,previousFilter, " Filtro: " ,filtro)
  }, [filtro, chageRealized]);

  const [isLoogedIn, setsIsLoogedIn] = useState(false);

  //Logica para saber si está logueado
  // const [checking, setChecking] = useState(true);
  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(async (user) => {
  //     if (user?.uid) {
  //       // dispatch(login(user.uid, user.displayName))
  //       setsIsLoogedIn(true);
  //     } else {
  //       setsIsLoogedIn(false);
  //     }

  //     setChecking(false);
  //   });
  // }, [dispatch, setChecking]);

  const handleDeleteCard = (item) => {
    dispatch(deleteContent(item.id));
  };

  const handleUpdateCard = () => {
    alert("Accion de editar card");
  };

  const typeOfUser = "admin";
  return (
    <>

      {/* Muestra unas tarjetas mostrando las ofertas que hay si es que hay, de lo contrario muestra un aviso de que no se encontró */}
      <ResultadosContainer className="container-fluid mt-1">
        
        {content?.length >= 1? (
          content?.map((item, i) => (
            <Card
              key={item.id}
              variant="outlined"
              style={{
                marginTop: "10px",
                textAlign: "left",
                padding: "25px",
                borderRadius: "8px",
                background: "#ffffff",
                boxShadow: "0px 0px 1px 0px #3A2D31"
              }}
            >
              <Resultado>
                <Link to={`/detalles/${item.id}`} style={{display:"block",
                minHeight:"200px"}}>
                  <Foto
                    src={
                      item.miniatura || "https://i.ibb.co/9NZbMcm/logo-educapp-recortado.png"
                    }
                    style={{border:"1px solid #3333333e"}}
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
                  {item.profesor}
                  <br />
                  <Tit>Modalidad: </Tit>
                  {item.modalidad}
                  <br />
                  <Tit>Cuesta
                 <Text display="inline" color="green"> {item.precio||"Gratis"}</Text>
                 </Tit>
                </Link>


                {/* Opciones para administrador */}

                {isLoogedIn || typeOfUser == "admin" ? (
                  <>
                    <hr />
                    <p style={{ textAlign: "right"}}>
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
              {filtro?  (<span> que coincidan con la búsqueda <strong style={{ color: "#3700ff" }}>{filtro}</strong> </span>):null}.
            </>
          </div>
        )}
        {data?.length >= 1? (
          data?.map((item, i) => (
            <Card
              key={item.id}
              variant="outlined"
              style={{
                marginTop: "10px",
                textAlign: "left",
                padding: "25px",
                borderRadius: "8px",
                background: "#ffffff",
                boxShadow: "0px 0px 1px 0px #3A2D31"
              }}
            >
              <Resultado>
                <Link to={`/detalles/${item.id}`} style={{display:"block",
                minHeight:"200px"}}>
                  <Foto
                    src={
                      item.imagen|| "https://i.ibb.co/9NZbMcm/logo-educapp-recortado.png"
                    }
                    style={{border:"1px solid #3333333e"}}
                  />
                  <Tit_1>{item.name}</Tit_1>
                  <br />
                  <Tit></Tit>
                  {item.tipo}
                  <span></span>
                  <br />
                  {/* <Tit>A través de </Tit>
                  {item.plataforma}
                  <br /> */}
                  <Tit>Profesor: </Tit>
                  {item.autor}
                  <br />
                  <Tit>Modalidad: </Tit>
                  {item.modalidad}
                  <br />
                  <Tit>Cuesta
                 <Text display="inline" color="green"> {item.precio||"Gratis"}</Text>
                 </Tit>
                </Link>


                {/* Opciones para administrador */}

                {isLoogedIn || typeOfUser == "admin" ? (
                  <>
                    <hr />
                    <p style={{ textAlign: "right"}}>
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
              {filtro?  (<span> que coincidan con la búsqueda <strong style={{ color: "#3700ff" }}>{filtro}</strong> </span>):null}.
            </>
          </div>
        )}
      </ResultadosContainer>
    </>
  );
}
