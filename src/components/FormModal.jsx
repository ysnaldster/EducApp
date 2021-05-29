import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { Stack, InputGroup, InputLeftElement, Input, Button } from '@chakra-ui/react';
import { Row, Col, Container } from 'react-bootstrap'
import { FaUserCircle, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoMdCloseCircle } from 'react-icons/io'
import {MdEmail} from 'react-icons/md'
import { useForm } from '../hooks/useForm.jsx';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth.js';
import styled from 'styled-components';



const StyleModal = styled(Modal)`
    height: 100vh;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
`

const StyleButtonContainer = styled(Col)`
    text-align: center;
    margin: 10px 0;
`

const StyledButtonInicio = styled(Button)`
    background: #F98F12;
    width: 230px !important;
    border: none;
    color: white;
    box-shadow: 0px 4px 8px rgb(89 73 30 / 16%) !important;
    font-weight: bold;
    font-size: 15px;
`

// Login con Google

const StyledStack = styled(Stack)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 48px;
    border-radius: 5px; 
    background: #FAF8F7;
    box-shadow: 0px 4px 8px rgb(89 73 30 / 16%);
    padding: 0 10px;
`
const StyledButtonGoogle = styled(Button)`
    margin: 0px !important;
    background: #FAF8F7 !important;
    color: black !important;
    padding: 0px !important;
`
const StyledIconContainerClosed = styled(Row)`
    display: flex;
    justify-content: flex-end;
    margin: 5px;
`

const StyledLetterModal = styled.div`
    font-family: 'DM Sans', sans-serif !important;
`

const StyledButtonIngresar = styled(Button)`
    background: #F98F12 !important;
    color: white !important;
`

function FormModal() {

    const [verSeccion, setSeccion] = useState(true)
    // Dispatch 
    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
        user: '',
        password: ''
    })
    const { user, password } = formValues;
    // Hooks del Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login('986', 'Alexander'))
        console.log('Se han enviados los datos');
    }

    return (
        <StyledLetterModal>
            {
                verSeccion ? <div className='acaPrueba'>
                    <StyledButtonIngresar variant="primary" onClick={handleShow}>
                        Login
                    </StyledButtonIngresar>
                    <StyleModal show={show} onHide={handleClose} >
                        <form onSubmit={handleSubmit}>
                            <StyledIconContainerClosed>
                                <Button variant="secondary" onClick={handleClose}>
                                    <IoMdCloseCircle />
                                </Button>
                            </StyledIconContainerClosed>
                            <img src='https://i.ibb.co/26ZyFJV/logot.png' width='300px' height='300px' style={{ margin: '10px' }} />
                            <Modal.Body>
                                <Stack spacing={4}>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={<FaUserCircle color="gray.300" />}
                                        />
                                        <Input type="text" placeholder="Nombre de Usuario" name="user" value={user} onChange={handleInputChange} />
                                    </InputGroup>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={<FaLock color="gray.300" />}
                                        />
                                        <Input type="password" placeholder="Contraseña" name="password" value={password} onChange={handleInputChange} />
                                    </InputGroup>
                                </Stack>
                            </Modal.Body>
                            <Row>
                                <StyleButtonContainer xs={12}>
                                    <StyledButtonInicio variant="primary" onClick={handleClose} type='submit'>
                                        Entrar
                                    </StyledButtonInicio>
                                </StyleButtonContainer>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <StyledStack direction="row" spacing={4} >
                                        <div style={{ padding: '10px' }}>
                                            <FcGoogle />
                                        </div>
                                        <StyledButtonGoogle colorScheme="teal" variant="solid" >
                                            Continuar con Google
                                        </StyledButtonGoogle >
                                    </StyledStack>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} style = {{margin: '10px'}}>
                                    <Button variant='secondary' onClick={() => {
                                        console.log("probando");
                                        setSeccion(!verSeccion);
                                    }}>
                                        Crear una Nueva Cuenta
                                </Button>
                                </Col>
                            </Row>
                        </form>
                    </StyleModal>
                    {/* Registro */}
                </div> : <div>
                    <Button variant="primary" onClick={handleShow}>
                        Login
                    </Button>
                    <StyleModal show={show} onHide={handleClose}>
                        <form onSubmit={handleSubmit}>
                        <StyledIconContainerClosed>
                                <Button variant="secondary" onClick={handleClose}>
                                    <IoMdCloseCircle />
                                </Button>
                            </StyledIconContainerClosed>
                            <img src='https://i.ibb.co/26ZyFJV/logot.png' width='300px' height='300px' style={{ margin: '10px' }} />
                            <Modal.Body>
                                <Stack spacing={4}>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={<FaUserCircle color="gray.300" />}
                                        />
                                        <Input type="text" placeholder="Nombre de Usuario" name="user" value={user} onChange={handleInputChange} />
                                    </InputGroup>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={<FaLock color="gray.300" />}
                                        />
                                        <Input type="password" placeholder="Contraseña" name="password" value={password} onChange={handleInputChange} />
                                    </InputGroup>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={<MdEmail color="gray.300" />}
                                        />
                                        <Input type="email" placeholder="Correo Electrónico" name="password" value={password} onChange={handleInputChange} />
                                    </InputGroup>
                                </Stack>
                            </Modal.Body>
                            <Row>
                                <StyleButtonContainer xs={12}>
                                    <StyledButtonInicio variant="primary" onClick={handleClose} type='submit'>
                                        Registrarme
                                    </StyledButtonInicio>
                                </StyleButtonContainer>
                            </Row>
                            <Row>
                                <Col xs={12} style = {{margin: '10px'}}>
                                    <Button variant='secondary' onClick={() => {
                                        console.log("probando");
                                        setSeccion(!verSeccion);
                                    }}>
                                       Ya tengo una Cuenta
                                </Button>
                                </Col>
                            </Row>
                        </form>
                    </StyleModal>
                </div>
            }
        </StyledLetterModal>
    );
}

export default FormModal
