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
import MisCursos from "../containers/MisCursos";
import Novedades from '../containers/Novedades.jsx'
import { login, startLoadingUser } from '../actions/auth'
import { useDispatch } from 'react-redux'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import AuthRouter from './AuthRouter'
import Perfil from '../components/Perfil.jsx'
import Favoritos from "../containers/Favoritos.jsx";
import PublicarContenido from "../containers/PublicarContenido.jsx";
import { setContent, startGetContent } from "../actions/content.jsx";
import PublicadoScreen from "../components/PublicadoScreen.jsx";
import DetallesScreen from "../components/DetallesScreen.jsx";
import Nosotros from "../containers/Nosotros.jsx";
import Search from '../components/Search.jsx'


export default function Routes() {

  const [checking, setChecking] = useState(true)
  const [isLoogedIn, setsIsLoogedIn] = useState(false)
  const dispatch = useDispatch();

  // Se inspecciona para saber si esta autenticado el usuario
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      console.log(user);
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.email, user.photoURL))
        setsIsLoogedIn(true)
        dispatch(startLoadingUser(user.uid))

        dispatch(startGetContent())

      } else {
        setsIsLoogedIn(false)
      }

      setChecking(false)
    })

  }, [dispatch, setChecking])
  if (checking) {
    return (

      <h1>Cargando....</h1>
    )
  }


  // Note: La privada permite consumir toda la información sin la autenticación. 


  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <PublicRoute path="/auth" component={AuthRouter} isAuthenticated={isLoogedIn} />
          <PrivateRoute exact path="/perfil" component={Perfil} isAuthenticated={isLoogedIn} />
          <Route exact path="/publicar" component={PublicarContenido} />
          <Route exact path="/publicado" component={PublicadoScreen} />
          {/* <Route  exact path = '/login' component = {Login}/>
        <Route exact path = '/home' component = {Home}/> */}
          {/* <Route exact path="/registro" component={Registro} /> */}
          <Route  path="/ofertas" component={Ofertas} isAuthenticated={isLoogedIn}/>
          <Route  path="/miscursos" component={MisCursos} isAuthenticated={isLoogedIn}/>
          <Route  path = '/novedades' component = {Novedades}/>
          <Route  path = '/favoritos' component = {Favoritos}/>
          <Route  path = '/nosotros' component = {Nosotros} />
          <Route  path="/detalles/:recurso" component={DetallesScreen} />
          <Route path = "/search" component = {Search}/>
          {/* <Redirect to="/auth/login" /> */}
          {/* <Redirect to="/auth/login" /> */}
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  );
}
