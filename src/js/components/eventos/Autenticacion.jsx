import React, { Component } from 'react'

import {
  BrowserRouter,  // Manejar Rutas (se le puede asignar un alias de Router (BrowserRouter as Router) para cambiarle el nombre)
  Route,          // Objeto que permite manejar las rutas
  Link,           // Objeto que permite manejar los enlaces
  Redirect,       // Objeto que permite manejar las redirecciones
  withRouter,     // Objeto que permite modificar el valor de una ruta
  Switch
} from 'react-router-dom'

const falsaAutenticidad = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // simular la autenticacion asincrona
  },
  signout (cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const Inicio = ( ) => (
  <h3>Home</h3>
)

const Publico = ( ) => (
  <h3>Contenido Publico</h3>
)

const Protegido = ( ) => (
  <h3>Contenido Protegido</h3>
)

const BotonAutenticacion = withRouter ( ( { history } ) => (
  ( falsaAutenticidad.isAuthenticated )
    ? 
      <div>
        <h2>¡Bienvenid@!</h2>
        <button onClick = { ( ) => falsaAutenticidad.signout( ( ) => history.push ('/') ) }>Salir</button>
      </div>
    :
      <h2>¡NO puedes entrar, no estas logueado! :(</h2>
))

const RutaPrivada = ( { component: Component, rest } ) => (
 <Route {...rest } render = { (props ) => (
  falsaAutenticidad.isAuthenticated
  ? <Component {...props} />
  : <Redirect to ={ { pathname: '/login', state: { from: props.location } } }/>
  )}/>
)

class Login extends Component {
  constructor (...props) {
  super (...props)

  this.state = {
    redirectRoute: false
  }
  this.login = this.login.bind(this)
  }
  
  login () {
    falsaAutenticidad.authenticate ( ( ) => this.setState ( { redirectRoute: true }))
  }

  render () {

    const { from } = this.props.location.state || { from: { pathname: '/' }}
    const { redirectRoute } = this.state

    if ( redirectRoute ) {
      return (
        <Redirect to={from} />
      )
    }else {
      return (
        <div>
          <h3>
            Debes estar logueado para ver esta página
            <mark>{from.pathname}</mark>
          </h3>
          <button onClick={this.login}>Log in</button>
        </div>
      )
    }
  }
}

const AutenticacionSitio = ( ) => (
  <BrowserRouter>
    <div>
      <BotonAutenticacion/>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/publico">Página Pública></Link></li>
        <li><Link to="/protegido">Página Protegida</Link></li>
      </ul>
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/publico" component={Publico} />
        <RutaPrivada path="/protegido" component={Protegido} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AutenticacionSitio