import React from "react";
import styled from "styled-components";


const TextPrincipal = styled.h3`
  color: #f7a440;
  font-size: 30px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const SearchMore = styled.div`
  background-color: #f7a440;
  height: 45;
  border-radius: 1.5rem;
  line-height: 2rem;
  color: white;
  float: right;
  width:40%;
  &:hover {
    color: black;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export default function BtnBuscarMas(resultados) {
  return (
    <div>
      <TextPrincipal style={{ float: "left" }}>
        Tema seleccionado
      </TextPrincipal>

      <SearchMore className="btn fw-bolder">Buscar más temas</SearchMore>
    </div>
  );
}
