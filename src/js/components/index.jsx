import React, { Component } from 'react'  // Importación de React y {Component} (Debe estar instalado el paquete "react")
import {
  BrowserRouter,  // Manejar Rutas (se le puede asignar un alias de Router (BrowserRouter as Router) para cambiarle el nombre)
  Route,          // Objeto que permite manejar las rutas
  Link,           // Objeto que permite manejar los enlaces
  Redirect,       // Objeto que permite manejar las redirecciones
  withRouter,     // Objeto que permite modificar el valor de una ruta
  Switch
} from 'react-router-dom'
import { firebaseAuth } from './data/config'
import { logout } from './helpers/Auth'
import Inicio from './pages/'
import Acerca from './pages/Acerca'
import Error404 from './pages/Error404'
import Login from './pages/Login'
import Registro from './pages/Registro'
import DarAltaRecursos from './pages/protected/'
import coscoCaracolLogo from './media/logotipo.png'
import 'pure-css/lib/menus.css'
import '../../css/index.css'

const RutaPrivada = ( { component: Component, authed, rest }) => (
  <Route
    {...rest}
    render={
      props => authed === true
        ? <Component {...props} />
        : <Redirect to={ { pathname: '/login', state: { from: props.location } } }/>
    }
  />
)

const RutaPublica = ( { component: Component, authed, rest }) => (
  <Route
    {...rest}
    render={
      props => authed === false
        ? <Component {...props} />
        : <Redirect to='/eventos'/>
    }
  />
)



// Componente PADRE o principal de la aplicación
class App extends Component {

  // CONSTRUCTOR
  constructor(...props) {
    super(...props)  // Constructor del padre

    this.state = {
      authed: false,
      loading: true
    } // - FIN state
    this.pulsarOnClick = this.pulsarOnClick.bind(this)
  } // - FIN constructor

  pulsarOnClick (e) {

    if(e.target === document.getElementById('toggle')) {
      e.preventDefault()
    }
    
    document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked')
    document.getElementById('toggle').classList.toggle('x')
  }

  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged( user => {
      if ( user ) {
        this.setState ({
          authed: true,
          loading: false
        })
      } else {
        this.setState ({
          loading: false
        })
      }
    })
  }

  componentWillUnmount() {
    this.removeListener()
  }

  render() {
    return this.state.loading === true
    ? <h1>Cargando...</h1> 
    : (
      <BrowserRouter>
        <div>
          <header className="custom-menu-wrapper">
            <div className="pure-menu custom-menu custom-menu-top">
              <a href="#" className="pure-menu-heading custom-menu-brand">
                <img className="coscocaracol-logo" src={coscoCaracolLogo} alt="CoscoCaracol" />
              </a>
              <a href="#" className="custom-menu-toggle" id="toggle" onClick={this.pulsarOnClick}><s className="bar"></s><s className="bar"></s></a>
            </div>
            <div className="pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked" id="tuckedMenu">
              <div className="custom-menu-screen"></div>
              <ul className="pure-menu-list">
                <li className="pure-menu-item">
                  <Link to="/" className="pure-menu-link" onClick={this.pulsarOnClick}>Inicio</Link>
                </li>
                <li className="pure-menu-item">
                  <Link to="/acerca" className="pure-menu-link" onClick={this.pulsarOnClick}>Acerca</Link>
                </li>
                {
                  ( this.state.authed )
                    ? 
                      <span>

                        <li className="pure-menu-item">
                          <Link to="/eventos" className="pure-menu-link" onClick={this.pulsarOnClick}>Eventos</Link>
                        </li>

                        <li className="pure-menu-item">
                          <Link
                            to="/logout"
                            className="pure-menu-link"
                              onClick = { () => {
                                logout()
                                this.setState( { authed: false } )
                                this.pulsarOnClick()
                              }}
                          >Logout</Link>
                        </li>
                      
                      </span>
                    :

                      <span>
                        <li className="pure-menu-item">
                          <Link to="/registro" className="pure-menu-link" onClick={this.pulsarOnClick}>Registro</Link>
                        </li>
                        <li className="pure-menu-item">
                          <Link to="/login" className="pure-menu-link" onClick={this.pulsarOnClick}>Login</Link>
                        </li>
                      </span>
                }
              </ul>
  
            </div>
          </header>
          <main className="Main">
            <Switch>
              <Route path='/' exact component={Inicio} />
              <Route path='/acerca' component={Acerca} />
              <RutaPublica authed={this.state.authed} path='/registro' component={Registro} />
              <RutaPublica authed={this.state.authed} path='/login' component={Login} />
              <RutaPrivada authed={this.state.authed} path='/eventos' component={DarAltaRecursos} />
              <Route component={Error404} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App