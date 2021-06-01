import React, { useEffect, useState } from "react";
import firebase from 'firebase'
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "../containers/Home.jsx";
import Ofertas from "../containers/Ofertas";
import Login from "../components/Login.jsx";
import Registro from "../components/Registro.jsx";

import {login} from '../actions/auth'
import { useDispatch } from 'react-redux'
import {PrivateRoute} from './PrivateRoute'
import {PublicRoute} from './PublicRoute'
import AuthRouter from './AuthRouter'


export default function Routes() {

  const [checking, setChecking] = useState(true)
  const [isLoogedIn, setsIsLoogedIn] = useState(false)
  const dispatch = useDispatch();

  // Se inspecciona para saber si esta autenticado el usuario
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      console.log(user);
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
        setsIsLoogedIn(true)
      }else{
        setsIsLoogedIn(false)   
      } 

      setChecking(false)
    })

  }, [dispatch, setChecking])
  if(checking){
    return(

      <h1>Cargando....</h1>
    )
  }


// Note: La privada permite consumir toda la información sin la autenticación. 


return (
  <div>
    <Router>
      {/* <Header /> */}
      <Switch>
        <PublicRoute  path="/auth" component={AuthRouter} isAuthenticated = {isLoogedIn}/>
        <PrivateRoute  exact path="/" component={Home}  isAuthenticated = {isLoogedIn}/>
        {/* <Route  exact path = '/login' component = {Login}/>
        <Route exact path = '/home' component = {Home}/> */}
        {/* <Route exact path="/registro" component={Registro} /> */}
        {/* <Route exact path="/ofertas" component={Ofertas} /> */}
        {/* <Redirect to="/auth/login" /> */}
        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  </div>
);
}
