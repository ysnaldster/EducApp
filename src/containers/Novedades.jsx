import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { novedadesLoad } from '../actions/novedadesAction'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import MostrarNovedad from './MostrarNovedad'
import styled from 'styled-components'
import PersistentDrawerRight from '../components/Header2.jsx'

// Estilos
const StyledMainTitle = styled.p`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    padding-top: 120px;
    padding-bottom: 20px;
`

const StyledTabsContainer = styled(Tabs)`
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    flex-direction: column !important;
`

const Novedades = () => {
    
    const dispatch = useDispatch();
    const traerCategoria = (categoria) => {
        dispatch(novedadesLoad(categoria));
    }

    // dispatch(novedadesLoad('TI'));
    const {novedades} = useSelector(state => state.noticiasNovedades)
    console.log(novedades);

    return (
        <div>
            <PersistentDrawerRight/>
            <StyledMainTitle>¿Qué esta pasando en el mundo?</StyledMainTitle>
            <StyledTabsContainer>
                <TabList>
                    <Tab onClick={() => traerCategoria('TI')}>TI</Tab>
                    <Tab onClick={() => traerCategoria('educacion')}>Educación</Tab>
                    <Tab onClick={() => traerCategoria('financieras')}>Financieras</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <MostrarNovedad novedad = {novedades}/>
                    </TabPanel>
                    <TabPanel>
                        <MostrarNovedad novedad = {novedades}/>
                    </TabPanel>
                    <TabPanel>
                    <MostrarNovedad novedad = {novedades}/>
                    </TabPanel>
                </TabPanels>
            </StyledTabsContainer>
        </div>
    )
}

export default Novedades
