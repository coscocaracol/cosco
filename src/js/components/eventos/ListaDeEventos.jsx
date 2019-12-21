import React from 'react'
import Evento from './Evento'
import '../../../css/lista-eventos.css'

// Hereda las propiedades del elemento padre que lo contiene (index.jsx) por que se le han mandado por 
const ListaDeEventos = (props) => (
  <ul className="listaEventos">
    {
      props.eventos.map(evento => (
        <Evento
          key = { evento.id }
          id = { evento.id }
          name = { evento.name }
          poster = { evento.poster }
          url = { evento.url }
          amount = { evento.amount }
          profesor = { evento.profesor }
          date = { evento.date }
          categorias = { evento.categorias }
        />
      ))
      .reverse()
    }
  </ul>
)

export default ListaDeEventos
