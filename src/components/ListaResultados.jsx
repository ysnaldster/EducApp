import React from "react";
import styled from "styled-components";
import LaImagen from "../w.png";

const ResultadosContainer = styled.div`
  box-sizing: border-box;
  display: inline-block;
  font-size: 1rem;
`;
const Resultado = styled.p`
  box-sizing: border-box;
  display: inline-block;
  border-radius: 3px;
  color: white;
  padding: 15px;
  margin-top: 5px;
  background-color: #393e46;
  line-height: 1.5rem;
  width: 100%;
  text-align: left;

  @media (min-width: 600px) {
    :nth-child(2n) {
      //width: 49%;
      //margin-left: 1%;
      box-sizing: border-box;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 2px;
  }
`;

const Foto = styled.img`
  width: 100px;
  border-radius:3px;
  display: inline-block;
  float: right;
  border:  white 0.5px solid;
`;
const Tit = styled.strong`
  font-weight: bolder;
  color: #f98f12;
`;

const Tit_1 = styled.strong`
  font-weight: bolder;
  color: #ffffff;
`;

export default function ListaResultados() {
  const mapTemp = [1, 2, 3, 2, 3, 2, 3];
  return (
    <>
      <ResultadosContainer className="container-fluid mt-1">
        {mapTemp.map((x) => (
          <Resultado>
            <Foto src={LaImagen} />
            <Tit_1>
              Angular: Convierte cualquier template en HTML en una WebAPP
            </Tit_1>
            <br />
            <Tit>Profesor: </Tit>Fernando Herrera
            <br />
            <Tit>Tipo: </Tit>Vitual
            <br />
            <Tit>Lugar: </Tit>Udemy
          </Resultado>
        ))}
      </ResultadosContainer>
    </>
  );
}
