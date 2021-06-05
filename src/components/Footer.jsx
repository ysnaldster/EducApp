import React from 'react'

import { Container } from 'react-bootstrap'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { useSelector } from 'react-redux'

export default function Footer() {



    let anio =new Date().getFullYear()

    return (
        <div>
             <Container
          fluid
          style={{
            height: "7vh",
            background: "#393E46",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AiOutlineCopyrightCircle />
          <div>{anio} EducApp</div>
        </Container>
        </div>
    )
}
