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
                        <div key={n.id}>
                            <h1>{n.titulo}</h1>
                        </div>)
                })
            }
        </div>
    )
}

export default MostrarNovedad
