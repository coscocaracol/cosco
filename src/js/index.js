/*====================================
    IMPORTACIÓN HOJAS DE ESTILOS
====================================== */

// Tambien se podría importar asi: import 'pure-css/lib/menus.css'
// En este caso tiene que estar instalado pure-css en devDependencies
// y entonces lo carga de node_modules
// Debe estar desativado en la configuración exclude: /node_modules/

import '../css/estilos.css'
/*====================================
    IMPORTACIÓN ARCHIVOS ICO Y SVG
====================================== */
import "../static/img/ico/favicon.ico"

/*====================================
    IMPORTACIÓN DE IMÁGENES
====================================== */
//import "../static/img/cabecera.jpg"
//import "../static/img/iconoMenu.png"

//import "../static/img/ivanabuelo.jpg"
//import "../static/img/ivanpequeno.jpg"
//import "../static/img/ivanpillo.jpg"
//import "../static/img/ivancristo.jpg"
//import "../static/img/ivangirasol.jpg"
//import "../static/img/ivantractor.jpg"
//import "../static/img/alfombra.jpg"
//import "../static/img/ivanhueco.jpg"

//import "../static/img/LogoVer.svg"
//import "../static/img/logo.png"

/*====================================
    IMPORTACIÓN DE FUENTES
====================================== */
//import '../static/fonts/Chalet.ttf'
/*====================================
    IMPORTACIÓN DE AUDIO
====================================== */
//import '../static/audio/152west.mp3'
/*====================================
    IMPORTACIÓN DE VIDEO
====================================== */
//import '../static/video/151agua.webm'

/*====================================
    IMPORTACIÓN DE REACT
====================================== */
import React from 'react'
import ReactDOM from 'react-dom'

/* ================ C Ó D I G O =========== */


import App from './components/';

ReactDOM.render(
  <App/>,
document.getElementById('root'));