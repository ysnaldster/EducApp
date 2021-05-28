import React from "react";
import styled from "styled-components";

const ResultadosContainer = styled.div`
  font-size: 1.2rem;
  width: 100vw;
`;
const Resultado = styled.p`
  display: inline-block;
  border-radius: 3px;
  color: white;
  padding: 25px;
  margin: 10px;
  background-color: #393e46;
  line-height: 1.5rem;
  width: 45%;
  text-align: left;
  @media(max-width:350px){
    width: 100%;
    box-sizing: border-box;
    display:inline-block;
  }
`;
const Tit = styled.strong`
  font-weight: bolder;
  color: #f98f12;
`;

export default function ListaResultados() {
  const mapTemp = [1,2,3];

  return (
    <>
      <ResultadosContainer className="container-fluid mt-1">
        {mapTemp.map((x) => (
          <Resultado>
            <Tit>Angular: </Tit>
            <strong>Convierte cualquier template en HTML en una WebAPP</strong>
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
