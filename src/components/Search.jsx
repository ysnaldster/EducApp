import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { searchContentWithFilter, startSearch } from "../actions/content.jsx";
import styled from "styled-components";
import PersistentDrawerRight from './Header2.jsx'
import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
    Container,
    Box,
    Text,
    Image,
    Heading,
    Grid,
    GridItem,
} from "@chakra-ui/react";

const SearchMore = styled.input`
  background-color: #f7a440;
  height: 45;
  border-radius: 1.5rem;
  line-height: 2rem;
  color: white;
  float: right;
  width:40%;
  ::placeholder{
    color:black;
  }
  &:hover {
    color: black;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

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


const Search = () => {
    const dispatch = useDispatch()

    const result = useSelector(state => state.content)
    console.log(result.search);

    const [filter, setFilter] = useState('')

    const handleDataSearch = (e) => {
        e.preventDefault()
        dispatch(startSearch(filter.toLowerCase()))
    }


    const validar = (e) => {
        e.preventDefault()
        if (e.which == 13) {
            dispatch(searchContentWithFilter(e.target.value));
        }
    }


    return (
        <div>
            <PersistentDrawerRight />
            <div style={{ position: 'relative', top: '100px' }}>
                <form onSubmit={handleDataSearch} style={{ display: 'flex', justifyContent: 'center' }}>
                    <SearchMore className="btn fw-bolder" type="search" placeholder="¿Qué desea buscar?" name="buscar" onKeyUp={validar} onChange={(e) => {
                        setFilter(e.target.value);
                    }} />
                </form>
            </div>
            <div>
                {
                    result.search?.length >= 1 ? (
                        result.search.map((item) => (
                            <div>
                                <ResultadosContainer className="container-fluid mt-1" style={{ position: 'relative', top: '100px' }}>
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
                                                <Tit>Facilitador: </Tit>
                                                {item.capacitador}
                                                <br />
                                                <Tit>Modalidad: </Tit>
                                                {item.modalidad}
                                                <br />
                                                <Tit>Plataforma: </Tit>
                                                {item.plataforma}
                                                <br />
                                                <Tit>
                                                    Precio
                                                    <Text display="inline" color="green">
                                                        {" "}
                                                        {item.precio || "Gratis"}
                                                    </Text>
                                                </Tit>
                                            </Link>
                                        </Resultado>
                                    </Card>
                                </ResultadosContainer>
                            </div>
                        ))
                    ) : <p>No se han realizado busquedas</p>
                }

            </div>
        </div>
    )
}

export default Search
