import React, { useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PersistentDrawerRight from './Header2';
  
import {Container,
  Box,
  Text,
  Image,
  Heading,
  Grid,
  GridItem,
  Link
} from "@chakra-ui/react";



export default function DetallesScreen() {
  let { recurso } = useParams();
  
  const { content } = useSelector((state) => state.content);

  let item = content?.filter((indice) => indice.id === recurso)[0] ||  []
  return (
    <>
    <PersistentDrawerRight/>
     <Box
        width="100"
        overflow="hidden"
        align="center"
        fontSize="3xl"
        m="0px"
        mt = "80px"
        border="0px"
        bg="#ff920c" 
        color="#e5e5e5"
      >
        {item.titulo}
      </Box>
    <Container mt="120px">
     
      <br/>
      <br/>
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem rowSpan={1}>
          <Box
            width="100%"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Text fontSize="2xl" color="black">
              <Heading size="2x1">{item.profesor}</Heading>
            </Text>
          </Box>
          <Box
            width="100%"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Text fontSize="2xl" color="black">
              {item.tipo}
            </Text>
          </Box>
          <Box
            width="100%"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Text fontSize="2xl">{item.modalidad}</Text>
          </Box>
          <Box
            width="100%"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Text fontSize="2xl" color="green">
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
            <Image src={item.miniatura} alt="imagen"/>
          </Box>
        </GridItem>
      </Grid>
      <br />

      <Text fontSize="2xl">Detalle: <Link float="right" textDecoration="none" href={item.url} target="blank" color="#ff7d7d">Ir al curso</Link></Text>
      <Box
        width="100%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        textAlign="justify"
      >
        {item.detalles}
      </Box>
    </Container>
    </>
  );
}
