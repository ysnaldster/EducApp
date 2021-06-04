import React, { useEffect, useState } from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

import Login from "../components/Login.jsx";
import Registro from "../components/Registro.jsx";

const AuthRouter = () => {
    return (
        <Router>
            <Switch>
                <Route  exact  path = '/auth/login' component = {Login}/>
                <Route  exact  path = '/auth/registro' component = {Registro}/>
                <Redirect to = '/auth/login'/>
            </Switch>
        </Router>
    )
}

export default AuthRouter
