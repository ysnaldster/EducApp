import React from "react";
import PersistentDrawerRight from "../components/Header2";
import { Card } from "@material-ui/core";
import styled from "styled-components";
import { Center } from "@chakra-ui/layout";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { startPublicarContent,publicarContent } from "../actions/content";
import { useForm } from "../hooks/useForm";

const Container = styled.div`
  width: 100%;
  height: 93vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 100%;
  margin-top: 20px;
  height: 30px;
  border-radius: 5px;
  padding: 5px;
  color: rgb(0, 0, 0);
`;

export default function PublicarContenido() {
  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset] = useForm({
    titulo: "",
    tipo: "",
    profesor: "",
    precio: "",
  });

  const { titulo, tipo, profesor, precio } = formValues;

  const handlePublicarContenido = (e) => {
    e.preventDefault();
    //dispatch(publicarContent(titulo, tipo, profesor, precio));
    dispatch(startPublicarContent(titulo, tipo, profesor, precio));
  };

  return (
    <div>
      <PersistentDrawerRight />
      <Container>
        <Card
          variant="outlined"
          style={{
            display: "inline-block",
            padding: "10px 35px 35px 35px",
            borderRadius: "8px",
            background: "#afafaf",
            width: "30%",
            minWidth: "330px",
          }}
        >
          <Center>
            <img
              style={{ width: "150px" }}
              src="https://i.ibb.co/9NZbMcm/logo-educapp-recortado.png"
            />
          </Center>
          <form onSubmit={handlePublicarContenido}>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                fontSize: "1.2rem",
                marginTop: "20px",
              }}
            >
              Publicar nuevo contenido
            </p>
            <Input
              type="text"
              name="titulo"
              value={titulo}
              placeholder="Titulo de la publicación"
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="tipo"
              value={tipo}
              placeholder="Tipo de publicación"
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="profesor"
              value={profesor}
              placeholder="Nombre del profesor"
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="precio"
              value={precio}
              placeholder="Precio"
              onChange={handleInputChange}
            />
            <Input
              type="submit"
              value="Publicar"
              style={{ background: "rgb(249, 143, 18)", color: "white" }}
            />
          </form>
        </Card>
      </Container>
      <Footer />
    </div>
  );
}
