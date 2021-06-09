import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { novedadesLoad } from '../actions/novedadesAction'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import MostrarNovedad from './MostrarNovedad'



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
            <p>Aca la seccion de novedades</p>
            <Tabs>
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
            </Tabs>
        </div>
    )
}

export default Novedades
