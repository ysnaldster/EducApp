import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, InputGroup, InputLeftElement, Input, Button } from '@chakra-ui/react';
import { Row, Col, Container } from 'react-bootstrap'
import { FaUserCircle, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import { useForm } from '../hooks/useForm.jsx';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth.js';
import styled from 'styled-components';


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
    margin-top: 40px;
`

const Registro = () => {
    // Dispatch 
    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
        user: '',
        password: ''
    })
    const { user, password } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login('986', 'Alexander'))
        console.log('Se han enviados los datos');
    }
    return (
        <div>
            <Link to = '/home'>
                Volver
            </Link>
            <StyledFormsContainers>
                <form onSubmit={handleSubmit}>
                    <img src='https://i.ibb.co/26ZyFJV/logot.png' width='300px' height='300px' style={{ margin: '10px' }} />
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
                    <Row>
                        <StyleButtonContainer xs={12}>
                            <StyledButtonInicio variant="primary" type='submit'>
                                Registrarme
                                    </StyledButtonInicio>
                        </StyleButtonContainer>
                    </Row>
                    <Row>
                        <Col xs={12} style={{ marginTop: '40px' }}>
                            <Link to = '/login'>
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
