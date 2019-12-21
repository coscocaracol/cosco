import React, { Component } from 'react'  // Importación de React y {Component} (Debe estar instalado el paquete "react")
import PropTypes from 'prop-types'        // Importación de las prop-types (Debe estar instalado el paquete "prop-types")
import uid from 'uid'                     // Importación librería de id dinámicos únicos
import NuevoEvento from './NuevoEvento'
import ListaDeEventos from './ListaDeEventos'
import BuscarEventos from './BuscadorEventos'
import { categorias, eventos, profesores } from '../data/'

// Componente PADRE o principal de la aplicación
class Eventos extends Component {

  // CONSTRUCTOR
  constructor(...props) {
    super(...props)  // Constructor del padre

    this.state = {
      eventos: eventos,
      profesores: profesores,
      categorias: categorias,
      filter: {
        name: '',
        profesor: '',
        categorias: [],
        search: ''
      }
    } // - FIN state

    this.agregarNuevoEvento = this.agregarNuevoEvento.bind(this) // Realizar el bindeo (Buena práctica)
    this.buscadorEventos = this.buscadorEventos.bind(this)
    this.filtrarDatos = this.filtrarDatos.bind(this)
  } // - FIN constructor

  // Añadir un curso
    agregarNuevoEvento (e) {
    e.preventDefault()  // Prevenir el procesamiento

    let formulario = e.target,
      evento = {
        id: (formulario.id.value) ? formulario.id.value : Eventos.defaultProps.id,
        name: (formulario.name.value) ? formulario.name.value : Eventos.defaultProps.name,
        poster: (formulario.poster.value) ? formulario.poster.value : Eventos.defaultProps.poster,
        url: (formulario.url.value) ? formulario.url.value : Eventos.defaultProps.url,
        amount: (formulario.amount.value) ? formulario.amount.value : Eventos.defaultProps.amount,
        profesor: (formulario.profesor.value) ? formulario.profesor.value : Eventos.defaultProps.profesor,
        date: (formulario.date.value) ? formulario.date.value : Eventos.defaultProps.date,
        categorias: (formulario.categorias.value) ? formulario.categorias.value.split(',') : Eventos.defaultProps.categorias
      }
    this.setState({
      eventos: this.state.eventos.concat([evento])
    })
    formulario.reset();
  }

  /*  Se podría realizar de la forma siguiente, pero las buenas prácticas aconsejan la anterior
  agregarCurso = (e) => {
    e.preventDefault()  // Prevenir el comportamiento por la falta de datos
  }
  */

  buscadorEventos(e) {
    let newFilter = Object.assign( {}, this.state.filter, { [e.target.name] : [e.target.value] } )
    this.setState({
      filter: newFilter
    })
  }

  filtrarDatos(filter, data ) {
    let regex = new RegExp(filter.search, 'i')
    return data.filter(q => ( regex.test(q.name) || regex.test(q.profesor) || regex.test(q.categorias) ))
  }

  render() {
    if (!this.state.eventos.length) {
      return (  // Retorna un nodo hijo (debe retornar solo uno. Si hay más deberán estar empaquetados en un div padre)
        <article className="Main-container">
          <p>No Existen eventos</p>
        </article>
      ) // - FIN return

    } else {
      return (  // Retorna un nodo hijo (debe retornar solo uno. Si hay más deberán estar empaquetados en un div padre)
        <article className="Main-container">
          <NuevoEvento
            agregarEvento = {this.agregarNuevoEvento}
         />

          <BuscarEventos onSearch = { this.buscadorEventos} />

          <ListaDeEventos // Contenido archivo y class mismo nombre
            eventos = {this.filtrarDatos(this.state.filter, this.state.eventos)} // Se le pasa como la propiedad eventos del estado
          />
        </article>
      ) // - FIN return
    } // - FIN else
  } // - FIN render
} // - FIN class


// DEFINICION DE LAS proTypes
Eventos.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  profesor: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  categorias: PropTypes.array.isRequired
}

// DEFINICION DE LAS defaultProps
Eventos.defaultProps = {
  id: uid(10),
  name: 'Evento Desconocido',
  poster: 'https://ed.team/',
  url: 'https://ed.team/cursos',
  amount: 40,
  profesor: 'Profesor No Asignado',
  date: 'Fecha no Definida',
  categorias: ['Sin Categoría']
}

export default Eventos  // - Exportación Eventos