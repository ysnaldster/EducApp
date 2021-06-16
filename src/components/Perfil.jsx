import React, { useState, useRef } from 'react'
import PersistentDrawerRight from '../components/Header2.jsx'
import { Avatar, AvatarBadge, AvatarGroup, useDisclosure, Button } from "@chakra-ui/react"
import { IoCamera } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Stack, InputGroup, InputLeftElement, Tooltip } from "@chakra-ui/react"
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { FaUserCircle } from 'react-icons/fa'
import { IoArrowBack } from 'react-icons/io5'

// Acordion
// import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
import { SiGooglemaps } from 'react-icons/si'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react"
import { startSaveUser, startUploading } from '../actions/auth'


// Estilos
const StyledPerfilContainer = styled.div`
    /* height: 100vh; */
    font-family: 'Inter', sans-serif;
`
const StyledTitleh1 = styled.h1`
    font-size: 20px;
    font-weight: bold;
`

const StyledLabel = styled.label`
    margin: 10px;
    font-size: 15px;
    font-weight: bold;
`

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//             width: '25ch',
//         },
//     },
// }));

// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//     },
//     heading: {
//         fontSize: theme.typography.pxToRem(15),
//         fontWeight: theme.typography.fontWeightRegular,
//     },
// }));

const StyledImgContainer = styled.div`
    width: 100%;
    height: 150px;
    background: #F98F12;
`

const StyledButtonBackContainer = styled.div`
    position: absolute;
    padding: 20px;
    margin: 10px;
    border-radius: 20px;
    opacity: .7;
    background-color: rgb(0, 0, 0);
`
const StyledButtonEdit = styled.button`
    background: #F98F12;
    padding: 5px 15px;
    border-radius: 15px;
    position: relative;
    bottom: 90px;
    left: 120px;
    color: while;
    color: white;
    font-weight: bold;

`

const StyledImgLogo = styled.img`
  height: 120px !important;
`
const StyledButtonEnvioEdit = styled(Button)`
    background: #F98F12;
    color: white !important;
`


const Perfil = () => {

    const nombre = useRef('')
    const email = useRef('')
    const direccion = useRef('')
    const area1 = useRef('')
    const area2 = useRef('')

    const info = useSelector(state => state.auth)

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    // console.log(user[0].area1);
    const [edit, setEdit] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const cambiarEstado = () => {
        setEdit(!edit);
        onOpen();
    }
    // const classes = useStyles();

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        console.log(file);

        if (file) {
            dispatch(startUploading(file))
        }
    }

    if (user[0] === undefined) {
        return (
            <h1>Wait...</h1>
        )
    }

    const handleCambiarData = () => {
        const nuevoNCantidad = nombre.current.value
        const nuevoECantidad = email.current.value
        const nuevoDCantidad = direccion.current.value
        const nuevoA1Cantidad = area1.current.value
        const nuevoA2Cantidad = area2.current.value

        if (nuevoNCantidad === '' || nuevoECantidad === '' || nuevoDCantidad === '') {
            console.log('Llena todos los campos ***********');
        } else {
            const upUser = {
                id: user[0].id,
                name: nuevoNCantidad,
                email: nuevoECantidad,
                direccion: nuevoDCantidad,
                area1: nuevoA1Cantidad,
                area2: nuevoA2Cantidad
            }
            console.log(upUser);
            dispatch(startSaveUser(upUser))
        }
    }




    return (
        <StyledPerfilContainer>
            <Link to='/'>
                <StyledButtonBackContainer>
                    <IoArrowBack style={{ position: 'absolute', color: 'white', fontSize: '25px', right: '7px', bottom: '7px' }} />
                </StyledButtonBackContainer>
            </Link>
            {/* <PersistentDrawerRight /> */}
            <StyledImgContainer src='https://i.ibb.co/4ZLXhpg/banner-1.jpg' width='200px' height='200px' />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                <Avatar name="Dan Abrahmov" src={info.image} style={{ position: 'relative', zIndex: '1', bottom: '60px', width: '100px', height: '100px', right: '100px' }} >
                </Avatar>
                <StyledButtonEdit onClick={cambiarEstado}>Editar</StyledButtonEdit>
                <div style={{ marginBottom: '20px' }}>
                    <StyledTitleh1>Datos Personales</StyledTitleh1>
                </div>
                {/* Modal */}
                <Modal isOpen={isOpen} onClose={onClose} >
                    <ModalOverlay />
                    <ModalContent style={{ margin: '15px' }}>
                        <ModalHeader>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                {/* <StyledImgLogo src="https://i.ibb.co/26ZyFJV/logot.png" /> */}
                                <Avatar name="Dan Abrahmov" src={info.image} style={{ position: 'relative', zIndex: '1', width: '100px', height: '100px' }} >
                                    <AvatarBadge style={{ border: 'none', background: '#F98F12', padding: '7px', marginRight: '10px', color: 'white' }}
                                    // onClick={handlePictureClick}
                                    >
                                        <div onClick={handlePictureClick}>
                                            <IoCamera />
                                        </div>
                                    </AvatarBadge>
                                </Avatar>
                                <p style={{ margin: '10px' }}>Editar Perfil</p>
                            </div>
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <StyledLabel for='user_name'>Nombre de Usuario</StyledLabel>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<FaUserCircle color="gray.300" />}
                                />
                                <Input type="text" placeholder={user[0].name} name="name" style={{ background: '#FAF8F7' }} id='user_name' ref={nombre} />
                            </InputGroup>
                            <StyledLabel for='email'>Correo Electrónico</StyledLabel>
                            <InputGroup>
                                <InputLeftElement
                                    children={<MdEmail color="gray.300" />}
                                />
                                <Input type="text" placeholder= {user[0].email} name="email" style={{ background: '#FAF8F7' }} id='email' ref={email} />
                            </InputGroup>
                            <StyledLabel for='direction'>Dirección</StyledLabel>
                            <InputGroup>
                                <InputLeftElement
                                    children={<SiGooglemaps color="gray.300" />}
                                />
                                <Input type="text" placeholder= {user[0].direccion} name="email" style={{ background: '#FAF8F7' }} id='direction' ref={direccion} />
                            </InputGroup>
                            <p style={{ fontSize: '15px', fontWeight: 'bold', margin: '10px 10px 0px 10px' }}>Áreas de Interes</p>
                            <InputGroup>
                                <Input type="text" placeholder= {user[0].area1} name="area_1" style={{ background: '#FAF8F7', margin: '10px 0px' }} id='area_1' ref={area1} />
                            </InputGroup>
                            <InputGroup>
                                <Input type="text" placeholder= {user[0].area2} name="area_2" style={{ background: '#FAF8F7' }} id='area_2' ref={area2} />
                            </InputGroup>
                        </ModalBody>
                        <ModalFooter style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <StyledButtonEnvioEdit variant="ghost" onClick = {handleCambiarData}>Guardar</StyledButtonEnvioEdit>
                        </ModalFooter>
                        <input
                            id="fileSelector"
                            type="file"
                            name="file"
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                    </ModalContent>
                </Modal>

                <Stack spacing={3}>
                    <div>
                        <StyledLabel for='user_name'>Nombre de Usuario</StyledLabel>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<FaUserCircle color="gray.300" />}
                            />
                            <Input type="text" placeholder={user[0].name} name="name" style={{ background: '#FAF8F7' }} id='user_name' pointerEvents="none" />
                        </InputGroup>
                        <StyledLabel for='email'>Correo Electrónico</StyledLabel>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<MdEmail color="gray.300" />}
                            />
                            <Input type="text" placeholder={user[0].email} name="email" style={{ background: '#FAF8F7' }} id='email' pointerEvents="none" />
                        </InputGroup>
                        <StyledLabel for='direction'>Dirección</StyledLabel>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<SiGooglemaps color="gray.300" />}
                            />
                            <Input type="text" placeholder= {user[0].direccion} name="direction" style={{ background: '#FAF8F7' }} id='direction' pointerEvents="none" />
                        </InputGroup>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{ fontSize: '15px', fontWeight: 'bold' }}>Áreas de Interes</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div>
                                        <InputGroup style={{ margin: '10px 0px' }}>
                                            <Input type="text" placeholder = {user[0].area1}  name="area_1" style={{ background: '#FAF8F7' }} id='area_1' pointerEvents="none" />
                                        </InputGroup>
                                        <InputGroup>
                                            <Input type="text" placeholder = {user[0].area2} name="area_2" style={{ background: '#FAF8F7' }} id='area_2' pointerEvents="none" />
                                        </InputGroup>
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </Stack>
            </div>
        </StyledPerfilContainer>
    )
}

export default Perfil
