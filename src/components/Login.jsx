import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
} from "@chakra-ui/react";
import { Row, Col, Container } from "react-bootstrap";
import { FaUserCircle, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "../hooks/useForm.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  startLoginEmailPassword,
  startGoogleLogin,
} from "../actions/auth.js";
import styled from "styled-components";

// Estilos

const StyleButtonContainer = styled(Col)`
  text-align: center;
  margin-top: 20px;
  width: 300px;
`;

const StyledButtonInicio = styled(Button)`
  background: #f98f12;
  width: 100% !important;
  border: none;
  color: white;
  box-shadow: 0px 4px 8px rgb(89 73 30 / 16%) !important;
  font-weight: bold;
  font-size: 15px;
`;

const StyledButtonGoogle = styled(Button)`
  background: #faf8f7;
  color: black;
  width: 100% !important;
  border: none;
  box-shadow: 0px 4px 8px rgb(89 73 30 / 16%) !important;
  font-weight: bold;
  font-size: 15px;
`;
const StyledFormsContainers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Login = () => {
  // Dispatch
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formValues;

  // Aca hay que cambiar ui por error
  const loading = useSelector((state) => state.ui);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <div>
      <StyledFormsContainers>
        <div>
          <img
            src="https://i.ibb.co/26ZyFJV/logot.png"
            width="300px"
            height="300px"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <Row>
              <Col xs={12}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaUserCircle color="gray.300" />}
                  />
                  <Input
                    type="text"
                    placeholder="Ingrese Correo"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    style={{ background: "#FAF8F7" }}
                  />
                </InputGroup>
              </Col>
            </Row>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FaLock color="gray.300" />}
              />
              <Input
                type="password"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={handleInputChange}
                style={{ background: "#FAF8F7" }}
              />
            </InputGroup>
          </Stack>
          <Row>
            <StyleButtonContainer xs={12}>
              <StyledButtonInicio
                variant="primary"
                type="submit"
                disabled={loading}
              >
                Entrar
              </StyledButtonInicio>
            </StyleButtonContainer>
          </Row>
          <Row>
            <StyleButtonContainer xs={12}>
              <StyledButtonGoogle
                variant="primary"
                type="submit"
                onClick={handleGoogleLogin}
              >
                <div style={{ padding: "10px" }}>
                  <FcGoogle />
                </div>
                Continuar con Google
              </StyledButtonGoogle>
            </StyleButtonContainer>
          </Row>
          <Row>
            <Col xs={12} style={{ marginTop: "30px" }}>
              <Link to="/auth/registro">
                <Button variant="secondary">Crear una Nueva Cuenta</Button>
              </Link>
            </Col>
          </Row>
        </form>
      </StyledFormsContainers>
    </div>
  );
};

export default Login;
