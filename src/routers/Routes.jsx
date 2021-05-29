import React from 'react'
import {Switch,Route,Redirect, BrowserRouter as Router} from "react-router-dom"
import Home from '../containers/Home.jsx'
import Ofertas from '../containers/Ofertas'

export default function Routes() {
    return (
        <div>
            <Router>
                    <Home/>                    
                <Switch>
                    <Route exact path="/ofertas" component={Ofertas}/>                    
                    <Redirect to="/home" />
                </Switch>
            </Router>
        </div>
    )
}
