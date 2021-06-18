import React, { useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PersistentDrawerRight from './Header2';
import { Card } from "@material-ui/core";
import styled from 'styled-components'
import {Button} from 'react-bootstrap'
import {
  Container,
  Box,
  Text,
  Image,
  Heading,
  Grid,
  GridItem,
  Link
} from "@chakra-ui/react";

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


export default function DetallesScreen() {
  let { recurso } = useParams();

  const { content } = useSelector((state) => state.content);

  let item = content?.filter((indice) => indice.id === recurso)[0] || []
  return (
    <div style={{ height: '100vh' }}>
      <PersistentDrawerRight />
      <div style={{ position: 'relative', top: '100px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <Container style = {{background: 'white', borderRadius: '30px', padding: '40px'}}>
          <Box
            width="100"
            overflow="hidden"
            align="center"
            fontSize="3xl"
            m="0px"
            mt="80px"
            border="0px"
            style = {{margin: '20px'}}
          >
            {item.titulo}
          </Box>
          <Grid templateColumns="repeat(2, 1fr)">
            <GridItem rowSpan={1}>
              <Box
                width="100%"
                overflow="hidden"
              >
                <Text fontSize="2xl" color="black">
                  Facilitador:
                  <Heading size="2x1">{item.capacitador}</Heading>
                </Text>
              </Box>
              <hr></hr>
              <Box
                width="100%"
                overflow="hidden"
              >
                <Text fontSize="2xl" color="black">
                  {item.tipo}
                </Text>
              </Box>
              <Box
                width="100%"
                overflow="hidden"
              >
                <Text fontSize="2xl">{item.modalidad}</Text>
              </Box>
              <hr />
              <Box
                width="100%"
                overflow="hidden"
              >
                <Text fontSize="2xl" color="green">
                  Precio: 
                  {item.precio}
                </Text>
              </Box>
            </GridItem>
            <GridItem rowSpan={1} >
              <Box
                border="1px solid black"
                overflow="hidden"
                float="right"
              >
                <Image src={item.miniatura} alt="imagen" />
              </Box>
            </GridItem>
          </Grid>
          <br />

          <Text fontSize="2xl">Detalle: <Link float="right" textDecoration="none" href={item.link} target="_blank" color="#ff7d7d">
          <Button style = {{margin: '20px', background: '#F98F12', border: 'none'}}>Ir al Curso</Button>
            </Link></Text>
          <Box
            width="100%"
            overflow="hidden"
            textAlign="justify"
          >
            {item.detalles}
          </Box>
        </Container>
      </div>
    </div>
  );
}
