import React from "react";
import PersistentDrawerRight from "../components/Header2";
import { Card } from "@material-ui/core";
import styled from "styled-components";
import { Center } from "@chakra-ui/layout";
import { useDispatch } from "react-redux";
import { startPublicarContent, publicarContent } from "../actions/content";
import { useForm } from "../hooks/useForm";
import { useHistory } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const dat = require("./db.json").cursos;

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
  ::placeholder {
    /* color:rgba(249, 141, 18, 0.507); */
  }
`;

export default function PublicarContenido() {
  let history = useHistory();
  const dispatch = useDispatch();
  console.log(dat);

  //Validar las entradas del formulario
  const [formValues, handleInputChange, reset] = useForm({
    titulo: "Frontend developer",
    link: "https://www.udemy.com/course/react-cero-experto/learn/lecture/19808968#notes",
    tipo: "React de cero a experto",
    capacitador: "Fernado Herrera",
    miniatura:
      "data:image/jpeg;base64,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",
    modalidad: "Virtual",
    precio: "13,99 US$",
    detalles: `¿Quieres aprender React Actual o migrarte a trabajar con Hooks?

    Este curso tiene por objetivo llevarte de cero conocimiento de React hasta un nivel competitivo en el ambiente laboral de hoy en día. Este curso está construido 100% en Hooks y functional components.
    
    También cuenta con secciones sobre pruebas unitarias y de integración en cada aplicación que hacemos en el curso, esto incluye pruebas en componentes, hooks, customHooks, context, Redux, Fetch, mocks, spies, snapshots y mucho más relacionado al unit test.
    
    Sin olvidar que todos empezamos de cero en un momento, el curso cuenta con una introducción a los conceptos que necesitaremos para entrar en React de la forma más cómoda posible.`,
    infoExtra: "",
    plataforma: "Udemy",
    tematica: "Programación",
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
    plataforma,
    tematica,
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
        infoExtra,
        plataforma,
        tematica
      )
    );
    // }
    history.push("/publicado");
  };

  //  function publicarJson(){
  //       dat.forEach(item =>{
  //         dispatch(
  //           startPublicarContent(
  //             item.name || "",
  //             item.url || "",
  //             "Curso en linea",
  //             item.autor || "",
  //             item.imagen || "",
  //             "Virtual",
  //             item.precio || "",
  //             item.descripcion || "",
  //             item.plataforma || "",
  //             item.plataforma || "",
  //             item.area || ""
  //           )
  //           )
  //           console.log(item.name);}
  //       );
  //   }

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
            <Input
              type="text"
              name="plataforma"
              value={plataforma}
              placeholder="Plataforma: ejem: Coursera"
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="tematica"
              value={tematica}
              placeholder="Temática: ejem: Programación"
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
            {/* <button
              type="button"
              onClick={publicarJson}
            >Cargar cursos desde json</button> */}
          </form>
        </Card>
      </Container>
    </div>
  );
}
