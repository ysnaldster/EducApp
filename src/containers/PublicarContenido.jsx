import React from "react";
import PersistentDrawerRight from "../components/Header2";
import { Card } from "@material-ui/core";
import styled from "styled-components";
import { Center } from "@chakra-ui/layout";
import { useDispatch } from "react-redux";
import { startPublicarContent, publicarContent } from "../actions/content";
import { useForm } from "../hooks/useForm";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 10px 10px 0px;
`;

const Input = styled.input`
  /* box-shadow: 0px 0px 1px 1px #3A2D31; */
  /* border: solid 1px black; */
  width: 100%;
  margin-top: 20px;
  height: 30px;
  border-radius: 5px;
  padding: 5px;
  color: rgb(0, 0, 0);
  background-color: #e5e5e5;
  ::placeholder{    
    /* color:rgba(249, 141, 18, 0.507); */
  }
`;

export default function PublicarContenido() {
  let history = useHistory();
  const dispatch = useDispatch();

  //Validar las entradas del formulario
  const [formValues, handleInputChange, reset] = useForm({
    titulo: "",
    link: "",
    tipo: "",
    capacitador: "",
    miniatura: "",
    modalidad: "",
    precio: "",
    detalles: "",
    infoExtra: "",
  });

  const {
    titulo,
    link,
    tipo,
    capacitador,
    miniatura,
    modalidad,
    precio,
    detalles,
    infoExtra,
  } = formValues;

  const handlePublicarContenido = (e) => {
    e.preventDefault();
    dispatch(
      startPublicarContent(
        titulo,
        link,
        tipo,
        capacitador,
        miniatura,
        modalidad,
        precio,
        detalles,
        infoExtra
      )
    );
      // }
    history.push("/publicado");
  };

  return (
    <div>
      <PersistentDrawerRight />
      <Container>
        <Card
          variant="outlined"
          style={{
            display: "inline-block",
            padding: "10px 30px",
            borderRadius: "8px",
            background: "#ffffff",
            width: "35%",
            minWidth: "330px",
            boxShadow: "0px 0px 1px 0px #3A2D31",
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
            {/* Título */}
            <Input
              type="text"
              name="titulo"
              value={titulo}
              placeholder="Titulo del recurso"
              onChange={handleInputChange}
              required
            />
            {/* Link hacia el recurso */}
            <Input
              type="text"
              name="link"
              value={link}
              placeholder="Link del recurso"
              onChange={handleInputChange}
              required
            />
            {/* Tipo de recurso */}
            <Input
              type="text"
              name="tipo"
              value={tipo}
              placeholder="Tipo de recurso"
              onChange={handleInputChange}
              required
            />
            {/* Capacitador: (Profesor o institución), no es obligatorio */}
            <Input
              type="text"
              name="capacitador"
              value={capacitador}
              placeholder="Capacitador"
              onChange={handleInputChange}
            />
            <div
              style={{
                width: "100%",
                minHeight: "100px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {/* Miniatura: Foto referente al recurso */}
              <Input
                type="text"
                name="miniatura"
                value={miniatura}
                onChange={handleInputChange}
                placeholder="Link de la imagen"
                style={{
                  width: "130px",
                  height: "100px",
                  boxSizing: "border-box",
                  display: "inline",
                  textAlign: "center",
                  color: "black",
                }}
              />
              <div
                style={{
                  boxSizing: "border-box",
                  width: "50%",
                }}
              >
                {/* Modalidad del recurso (virtual, presencial o semipresencial) */}
                <Input
                  type="text"
                  name="modalidad"
                  value={modalidad}
                  placeholder="Modalidad"
                  onChange={handleInputChange}
                  style={{
                    boxSizing: "border-box",
                    display: "inline",
                    width: "100%",
                  }}
                  required
                />
                {/* Costo del recurso*/}
                <Input
                  type="text"
                  name="precio"
                  value={precio}
                  placeholder="Precio"
                  onChange={handleInputChange}
                  style={{
                    boxSizing: "border-box",
                    display: "inline",
                    width: "100%",
                  }}
                />
              </div>
            </div>
            {/* Detalles del recurso */}
            <Input
              type="textarea"
              name="detalles"
              value={detalles}
              placeholder="Detalles"
              onChange={handleInputChange}
              style={{
                height: "100px",
              }}
              required
            />
            {/* Un botón que activa la opción de agregar un nuevo campo solo si es necesario */}
            {/* <Input
              type="button"
              name="añadirMasCampos"
              value="Añadir nuevo campo..."
              placeholder="Añadir nuevo campo..."
              style={{color:"black"}}
              onChange={handleInputChange}
            /> */}
            {/* Botón de submit */}
            <Input
              type="submit"
              value="Publicar"
              style={{ background: "rgb(249, 143, 18)", color: "white" }}
            />
          </form>
        </Card>
      </Container>
    </div>
  );
}
