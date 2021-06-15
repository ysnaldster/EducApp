import React, { useEffect,useState } from "react";
import {firebase} from "../../firebase/firebase-config"
import { Card } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import { useFetch } from '../../hooks/useFetch'
import {
  deleteContent,
  searchContentWithFilter,
  startGetContent,
} from "../../actions/content";

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
  font-size: 1.5rem;
  color: #393e46;
  width: 100%;
  display: inline;
`;

export default function ListaResultados(isAuthenticated) {

  const {data} = useFetch("https://guappjolotas.herokuapp.com")
  console.log(data)
  const dispatch = useDispatch();

  const { content, filtro, chageRealized } = useSelector(
    (state) => state.content
  );

  useEffect(() => {
    let previousFilter = "initial";
    // console.log("Inicial:" ,previousFilter, " Filtro: " ,filtro)
    if (filtro?.length >= 1 && filtro != previousFilter) {
      dispatch(searchContentWithFilter(filtro));
      previousFilter = filtro;
    } else {
      dispatch(startGetContent());
    }
    // console.log("Inicial:" ,previousFilter, " Filtro: " ,filtro)
  }, [filtro, chageRealized]);

  const [isLoogedIn, setsIsLoogedIn] = useState(false)

  const [checking, setChecking] = useState(true)
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        // dispatch(login(user.uid, user.displayName))
        setsIsLoogedIn(true)
      } else {
        setsIsLoogedIn(false)
      }

      setChecking(false)
    })

  }, [dispatch, setChecking])

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
        {content?.length >= 1 ? (
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
                <Link to={`/detalles/${item.id}`}>
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
                </Link>
                {/* Opciones para administrador */}

                {isLoogedIn? (
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
              No se encontraron resultados que coincidan con la búsqueda...{" "}
              <strong style={{ color: "#3700ff" }}>{filtro}</strong>
            </>
          </div>
        )}
      </ResultadosContainer>
    </>
  );
}