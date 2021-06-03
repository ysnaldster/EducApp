import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { Row, Col, Container, Alert } from 'react-bootstrap'
import { FaUserCircle, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import { useForm } from '../hooks/useForm.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/auth.js';
import styled from 'styled-components';
import validator from 'validator'
import { setError, removeError } from '../actions/uiError'
import { startRegisterWithEmailPasswordName } from '../actions/auth'
import { useToast, Wrap, WrapItem, Button } from "@chakra-ui/react"
import Swal from 'sweetalert2'



// Estilos

const StyleButtonContainer = styled(Col)`
    text-align: center;
    margin-top: 30px;
`

const StyledButtonInicio = styled(Button)`
    background: #F98F12;
    width: 100% !important;
    border: none;
    color: white;
    box-shadow: 0px 4px 8px rgb(89 73 30 / 16%) !important;
    font-weight: bold;
    font-size: 15px;
`

const StyledFormsContainers = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`



const Registro = () => {

    // Funcion alertas


    // Dispatch 
    const dispatch = useDispatch();
    const { msjError } = useSelector(state => state.error);

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })
    const { name, email, password } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }
    }

    const formValid = () => {

        if (name.trim().length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Rellena todos los campos',
            })
            dispatch(setError(''))
            return false
        } else if (!validator.isEmail(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Se requiere un email',
            })
            dispatch(setError(''))
            return false
        } else if (password.trim().length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ingresa una contraseña',
            })
            dispatch(setError(''))
            return false
        }

        dispatch(removeError())
        return true
    }
    return (
        <div>
            <StyledFormsContainers>
                <div>
                    <img src='https://i.ibb.co/26ZyFJV/logot.png' width='300px' height='300px' />
                </div>
                <form onSubmit={handleSubmit} style={{ width: '276px' }}>
                    {
                        msjError &&
                        (
                            <div>{msjError}</div>
                        )
                    }
                    <Stack spacing={4}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<FaUserCircle color="gray.300" />}
                            />
                            <Input type="text" placeholder="Nombre de Usuario" name="name" value={name} onChange={handleInputChange} style={{ background: '#FAF8F7' }} />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<FaLock color="gray.300" />}
                            />
                            <Input type="password" placeholder="Contraseña" name="password" value={password} onChange={handleInputChange} style={{ background: '#FAF8F7' }} />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<MdEmail color="gray.300" />}
                            />
                            <Input type="email" placeholder="Correo Electrónico" name="email" value={email} onChange={handleInputChange} style={{ background: '#FAF8F7' }} />
                        </InputGroup>
                    </Stack>
                    <Row>
                        <StyleButtonContainer xs={12}>
                            <StyledButtonInicio variant="primary" type='submit'>
                                Registrarme
                                    </StyledButtonInicio>
                        </StyleButtonContainer>
                    </Row>
                    <Row>
                        <Col xs={12} style={{ marginTop: '30px' }}>
                            <Link to='/auth/login'>
                                <Button variant='secondary' >
                                    Ya tengo una Cuenta
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </form>
            </StyledFormsContainers>
        </div>
    )
}

export default Registro
