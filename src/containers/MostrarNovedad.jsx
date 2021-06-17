import React, { useState, useEffect, useDisclosure } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
} from "@chakra-ui/react"
import styled from 'styled-components'

// Estilos 
const StyledImg = styled.img`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

const StyledCardTitle = styled.p`
    font-size: 18px;
    margin: 10px;
    font-weight: bold;
`
const StyledContentCard = styled.p`
    margin: 0 10px;
    font-size: 13px;
`

const StyledCardButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 10px 20px;
`

const StyledCardContainerMain = styled.div`
    border-radius: 10px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
`
const StyledButtonMoreRead = styled.button`
    background: #F98F12;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    color: white;
    font-weight: bold;
`
// Modal
// function VerticallyCenter() {
//     const { isOpen, onOpen, onClose } = useDisclosure()

//     return (
//         <>
//             <Button onClick={onOpen}>Trigger modal</Button>

//             <Modal onClose={onClose} isOpen={isOpen} isCentered>
//                 <ModalOverlay />
//                 <ModalContent>
//                     <ModalHeader>Modal Title</ModalHeader>
//                     <ModalCloseButton />
//                     <ModalBody>
//                         <p>Prueba</p>
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button onClick={onClose}>Close</Button>
//                     </ModalFooter>
//                 </ModalContent>
//             </Modal>
//         </>
//     )
// }

const MostrarNovedad = ({ novedad }) => {
    console.log(novedad);
    // console.log(props.novedad);
    // console.log(props.nombre);
    const [checking, setChecking] = useState(true);
    useEffect(() => {
        setChecking(false);
    }, [setChecking])

    if (checking || novedad === "") {
        return (
            <div>
                <h1>Wait.....</h1>
            </div>
        )
    }

    return (
        <div>
            {
                novedad.map(n => {
                    return (
                        <div className="row" key={n.id} style = {{padding: '10px 0px'}}>
                            <div className="col s12 m6">
                                <StyledCardContainerMain class="card" style={{ borderRadius: '10px' }}>
                                    <div class="card-image" style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                        <StyledImg src={n.imagen} />
                                        <div>
                                            <StyledCardTitle>{n.titulo}</StyledCardTitle>
                                        </div>
                                        <div >
                                            <StyledContentCard>{n.contenido.substring(0, 100)}</StyledContentCard>
                                        </div>
                                        <StyledCardButtonContainer class="card-action">
                                            <a href="#">
                                                <StyledButtonMoreRead>Leer mas...</StyledButtonMoreRead>
                                            </a>
                                        </StyledCardButtonContainer>
                                    </div>
                                </StyledCardContainerMain>
                            </div>
                        </div>
                    )              
                })
            }
        </div >
    )
}

export default MostrarNovedad
