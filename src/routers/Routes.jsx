import React from 'react'
import {Switch,Route,Redirect, BrowserRouter as Router} from "react-router-dom"
import Home from '../components/Home'
import Ofertas from '../containers/Ofertas'

export default function Routes() {
    return (
        <div>
            {/* Controlador de usuarios, entrega diferentes tipos de rutas en base al tipo de usuario */}
            <Router>
                <Switch>
                    <Route exact path="/home" component={Home}/>                    
                    <Route exact path="/ofertas" component={Ofertas}/>                    
                    <Redirect to="/home" />
                </Switch>
            </Router>
        </div>
    )
}
