import React from "react";
import { Navbar, Container, Nav, Modal, Row, Col } from "react-bootstrap";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  RadioGroup,
  Stack,
  Radio,
  useDisclosure,
} from "@chakra-ui/react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {starLogout, logout} from '../actions/auth'

// Style Components
const StyledNavContainer = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledImgLogo = styled.img`
  height: 90px !important;
`;
const StyledButtonExplorar = styled(Button)`
  background: #f98f12 !important;
  border: none !important;
  color: white !important;
`;
// Modal Izquierdo
function PlacementExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");

  return (
    <div id="desplegable">
      <RadioGroup defaultValue={placement} onChange={setPlacement}></RadioGroup>
      <StyledButtonExplorar onClick={onOpen}>Explorar</StyledButtonExplorar>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
              EducApp
            <Button /*colorScheme="blue"*/ onClick={onClose} style={{float:"right"}}>
              X
            </Button>
          </DrawerHeader>
          <DrawerBody>
            <Link to="/login" onClick={onClose} className="nav-link fs-6 border-1 mt-1">
              Ingresar
            </Link>
            <Link to="/registro" onClick={onClose} className="nav-link fs-6 border-1 mt-1">
              Registro
            </Link>
            <Link to="/ofertas" onClick={onClose} className="nav-link fs-6 border-1 mt-1">
              Ofertas
            </Link>
            <Link to="/novedades" onClick={onClose} className="nav-link fs-6 border-1 mt-1">
              Novedades
            </Link>
            {/* <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p> */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

const Header = () => {

  const dispatch = useDispatch()
  const handleLogout = () => {
    console.log('F.');
    dispatch(starLogout())
  }

  return (
    <React.Fragment>
      <Container fluid style={{ background: "#393E46"}}>
        <Row>
          <Col xs={8}>
            <StyledImgLogo src="https://i.ibb.co/26ZyFJV/logot.png" />
          </Col>
          <StyledNavContainer xs={4}>
            <Navbar>
              <Container fluid>
                <Navbar.Collapse className="justify-content-end">
                  <Nav.Link /*href="#pricing"*/>
                    <PlacementExample />
                  </Nav.Link>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <span>Salir</span>
                    <Button onClick = {handleLogout}>Logout</Button>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </StyledNavContainer>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Header;
