import React,{useEffect} from "react";
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
import Header from "../components/Header.jsx";



export default function Routes() {
  return (
    <div>
      <Router>
          <Header/>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/ofertas" component={Ofertas} />
          <Redirect to="/home" />
        </Switch>
      </Router>
    </div>
  );
}
