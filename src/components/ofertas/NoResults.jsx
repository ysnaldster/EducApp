import { Card } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ResultadosContainer = styled.div`
  padding-top: 30px;
  box-sizing: border-box;
  display: inline-block;
  font-size: 1rem;
  text-align: center;
  width: 100%;
`;

const R = styled.p`
  font-weight: bolder;
  color: rgb(249, 143, 18);
  width: 100%;
  display: inli;
`;

export default function NoResults() {

  return (
    <>
      <ResultadosContainer className="container-fluid mt-1">
            <Card
              variant="outlined"
              style={{ marginTop: "5px",textAlign: "left", padding: "25px",borderRadius:"8px",background:"#afafaf" }}
            >
                <R>No se encontraron resultados que coincidan con la búsqueda...</R>

            </Card>
      </ResultadosContainer>
    </>
  );
}
