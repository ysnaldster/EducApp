import React from 'react'

import { Container } from 'react-bootstrap'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { useSelector } from 'react-redux'

export default function Footer() {



    let anio =new Date().getFullYear()

    return (
        <div style = {{position: 'absolute', bottom: '0', width: '100%'}}>
             <Container
          fluid
          style={{
            background: "#393E46",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: '20px'
          }}
        >
          <AiOutlineCopyrightCircle />
          <div>{anio} EducApp</div>
        </Container>
        </div>
    )
}
