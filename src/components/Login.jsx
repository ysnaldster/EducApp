  import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Stack, InputGroup, InputLeftElement, Input, Button, Alert, AlertIcon, InputRightElement } from '@chakra-ui/react';
import { Row, Col, Container } from 'react-bootstrap'
import { FaUserCircle, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from '../hooks/useForm.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { login, startLoginEmailPassword, startGoogleLogin, startFacebookLogin } from '../actions/auth.js';
import styled from 'styled-components';
import { FaFacebook } from 'react-icons/fa'

// Estilos

const StyleButtonContainer = styled(Col)`
    text-align: center;
    margin-top: 20px;
    width:300px;
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

const StyledButtonGoogle = styled(Button)`
    background: #FAF8F7;
    color: black;
    width: 100% !important;
    border: none;
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

const StyledButtons = styled(InputGroup)`
    box-shadow: 0px 4px 8px rgb(89 73 30 / 16%) !important;
    font-weight: bold !important;
    font-size: 15px;
    background: #FAF8F7;
    color: black !important;
    border-radius: 5px;
`

const Login = () => {
    // Dispatch 
    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    })
    const { email, password } = formValues;
    const { msjError } = useSelector(state => state.error);

    // Aca hay que cambiar ui por error 
    const loading = useSelector(state => state.ui)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password))
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }
    const handleFacebook = () => {
        dispatch(startFacebookLogin())
    }

    const [showPassword, setShowPassword] = useState(false)
    const handleShowClick = () => setShowPassword(!showPassword)

    return (
        <div>
            <StyledFormsContainers>
                <div >
                    <img src='https://i.ibb.co/26ZyFJV/logot.png' width='300px' height='300px' />
                </div>
                <form onSubmit={handleSubmit}>
                    {
                        msjError &&
                        (
                            <Alert status='error' mt={5}>
                                <AlertIcon />
                                {msjError}
                            </Alert>
                        )
                    }
                    <Stack spacing={3}>
                        <Row>
                            <Col xs={12}>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<FaUserCircle color="gray.300" />}
                                    />
                                    <Input type="text" placeholder="Ingrese Correo Electrónico" name="email" value={email} onChange={handleInputChange} style={{ background: '#FAF8F7' }} />
                                </InputGroup>
                            </Col>
                        </Row>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<FaLock color="gray.300" />}
                            />
                            <Input type={showPassword ? 'text' : 'password'} name='password' value={password} placeholder="Contraseña" onChange={handleInputChange} style={{ color: 'black', background: 'white' }} />
                            <InputRightElement width='5.0rem'>
                                <Button h='1.75rem' size='sm' onClick={handleShowClick} style={{ margin: '0 5px' }}>
                                    {showPassword ? 'Ocultar' : 'Mostrar'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </Stack>
                    <Row>
                        <StyleButtonContainer xs={12}>
                            <StyledButtonInicio variant="primary" type='submit'
                                disabled={loading}>
                                Entrar
                            </StyledButtonInicio>
                        </StyleButtonContainer>
                    </Row>
                    {/* <Row>
                        <StyleButtonContainer xs={12}>
                            <StyledButtonGoogle variant="primary" type='submit'
                                onClick={handleGoogleLogin}
                            >
                                <div style={{ padding: '10px' }}>
                                    <FcGoogle />
                                </div>
                                Continuar con Google
                            </StyledButtonGoogle>
                        </StyleButtonContainer>
                    </Row>
                    <Row>
                        <StyleButtonContainer xs={12}>
                            <StyledButtonGoogle variant="primary" type='submit'
                                onClick={handleFacebook}
                            >
                                <div style={{ padding: '10px' }}>
                                    <FaFacebook />
                                </div>
                                Continuar con Facebook
                            </StyledButtonGoogle>
                        </StyleButtonContainer>
                    </Row> */}
                    <StyledButtons  onClick={handleGoogleLogin} style = {{margin: '10px 0px'}}>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<FcGoogle color="gray.300" />}
                            style={{ marginLeft: '8px' }}

                        />
                        <Input name='email' value='Continuar con Google' pointerEvents='none' style={{ textAlign: 'center', fontWeight: 'bold'}} />
                    </StyledButtons>
                    <StyledButtons onClick={handleFacebook}>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<FaFacebook color="gray.300" />}
                            style={{ marginLeft: '8px', color: 'black' }}
                        />
                        <Input name='email' value='Continuar con Facebook' pointerEvents='none' style={{ textAlign: 'center', fontWeight: 'bold'}} />
                    </StyledButtons>
                    <Row>
                        <Col xs={12} style={{ marginTop: '30px', }}>
                            <Link to='/auth/registro' >
                                <Button variant='secondary'>
                                    Crear una Nueva Cuenta
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </form>
            </StyledFormsContainers>
        </div>
    )
}

export default Login