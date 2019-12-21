import React from 'react';
import {
  BrowserRouter,  // Manejar Rutas (se le puede asignar un alias de Router (BrowserRouter as Router) para cambiarle el nombre)
  Route,          // Objeto que permite manejar las rutas
  Link,           // Objeto que permite manejar los enlaces
  Redirect,       // Objeto que permite manejar las redirecciones
  withRouter      // Objeto que permite modificar el valor de una ruta
} from 'react-router-dom'


const SitioEstatico = () => (
  <BrowserRouter>
    <div>
      <h1>Probando React Router</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li> 
          <li>
            <Link to="/acerca">Acerca</Link>
          </li>
          <li>
            <Link to="/servicios">Servicios</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Inicio} />
      <Route path="/acerca" component={Acerca} />
      <Route path="/servicios" component={Servicios} />
      <Route path="/contacto" component={Contacto} />
    </div>
  </BrowserRouter>
)

const Inicio = () => (
  <div>
    <h2>Hola bienvenidos al inicio de mi sitio web</h2>
  </div>
)

const Acerca = () => (
  <div>
    <h2>Hola esto es acerca</h2>
  </div>
)

const Servicios = () => (
  <ul>
    <li>Enlace 1</li>
    <li>Enlace 2</li>
    <li>Enlace 3</li>
  </ul>
)

const Contacto = ({ match }) => (
  <div>
    <h2>Información de contacto</h2>
    <Route path={`${match.url}/:contactoInfo`} component={InfoContacto} />
    <Route exact path={match.url} render={() => (
      <h3>Mantente en contacto</h3>
    )}
    />
    <ul>
      <li><Link to={`${match.url}/email`}>Email</Link></li>
      <li><Link to={`${match.url}/web`}>Sitio Web</Link></li>
      <li><Link to={`${match.url}/ubicacion`}>Ubicacion</Link></li>
    </ul>
    <Route path={`${match.url}/email`} render={() =>(
      <a href="mailto:andotej@gmail.com"
      target="_blank">andotej@gmail.com</a>
    )}/>
    <Route path={`${match.url}/web`} render={() =>(
      <a href="https://jonmircha.com"
      target="_blank">jonmircha.com</a>
    )}/>
    <Route path={`${match.url}/ubicacion`} render={() =>(
      <a href="https://google.es"
      target="_blank">Google</a>
    )}/>
  </div>
)

const InfoContacto = ( { match } ) => (
  <div>
    <h4>{match.params.contactoInfo}</h4>
  </div>
)

export default SitioEstatico