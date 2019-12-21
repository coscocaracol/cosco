import React from 'react'
import '../../../css/buscador-eventos.css'

const BuscarEventos = (props) => (
  <form className="pure-form SearchForm">
    <input type="search" id="search" name="search" onChange={props.onSearch} placeholder="Cursos, Profesores, Categorías" />
    <label htmlFor="search">
      <i className="fas fa-search"></i>
    </label>
  </form>
)

export default BuscarEventos