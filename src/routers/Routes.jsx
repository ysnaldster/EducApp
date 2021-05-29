import React from 'react'
import {Switch,Route,Redirect, BrowserRouter as Router} from "react-router-dom"
import Home from '../containers/Home.jsx'
import Ofertas from '../containers/Ofertas'
import Login from '../components/Login.jsx'
import Registro from '../components/Registro.jsx'


export default function Routes() {
    return (
        <div>
            <Router>
                    <Route exact path="/home" component={Home}/>                    
                <Switch>
                    <Route exact path = "/login" component = {Login}/>
                    <Route exact path = "/registro" component = {Registro}/>
                    <Route exact path="/ofertas" component={Ofertas}/>                    
                    <Redirect to="/home" />
                </Switch>
            </Router>
        </div>
    )
}
