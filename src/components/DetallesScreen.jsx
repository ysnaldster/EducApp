import React, { useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PersistentDrawerRight from "./Header2";

import {
  Container,
  Box,
  Text,
  Image,
  Heading,
  Grid,
  GridItem,
  Link,
} from "@chakra-ui/react";

export default function DetallesScreen() {
  let { recurso } = useParams();

  const { content } = useSelector((state) => state.content);

  let item = content?.filter((indice) => indice.id === recurso)[0] || [];
  return (
    <>
      <PersistentDrawerRight />
      <Box
        w="100%"
        height="200px"
        overflow="hidden"
        align="center"
        fontSize="5xl"
        m="0px"
        mt="68px"
        border="0px"
        bg="#ff920c"
        color="#e5e5e5"
        bgImage={item.miniatura}
        bgSize="cover"
      >
        {item.titulo}
      </Box>
      <Container
        width="100%"
        overflow="hidden"
        align="center"
        fontSize="5xl"
        m="1px"
        border="0px"
        color="#e5e5e5"
        bg="#f7a440"
      >
        <Text>
          <Heading size="3x1">{item.titulo}</Heading>
        </Text>
        <br />
        <Grid templateColumns="repeat(2, 1fr)" >
          <GridItem rowSpan={1} textAlign="left" ml="4px">
            <Box width="100%" borderRadius="lg" overflow="hidden">
              <Text fontSize="3xl" color="black">
                {item.tipo}
              </Text>
            </Box>
            <Box width="100%" borderRadius="lg" overflow="hidden">
              <Text fontSize="2xl">{item.modalidad}</Text>
            </Box>
            <Box width="100%" borderRadius="lg" overflow="hidden"></Box>
          </GridItem>
          <GridItem rowSpan={1}>
            <Text
              fontSize="3xl"
              color="white"
              boxShadow="1px 1px 0px 1px white"
            >
              {item.precio}
            </Text>
          </GridItem>
        </Grid>
        <br />

        <Text fontSize="2xl">
          Detalle:{" "}
          <Link
            float="right"
            textDecoration="none"
            href={item.url}
            target="blank"
            color="#ff7d7d"
          >
            Ir al curso
          </Link>
        </Text>
        <Box
          width="100%"
          borderRadius="lg"
          overflow="hidden"
          textAlign="left"
          fontSize="1.3rem"
        >
          {item.detalles}
        </Box>
      </Container>
    </>
  );
}
