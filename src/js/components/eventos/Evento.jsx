import React from 'react';

const Evento = (props) => (
  <li className="listaEventos-item">

    <a className="listaEventos-link" href={props.url} target="_blank">
      <figure>
        <img src={props.poster} alt={props.name} />
        <figcaption>
          <h2>{props.name}</h2>
        </figcaption>
      </figure>
    </a>

    <section>

      <p>
        <i className="fas fa-graduation-cap"></i>
        {props.profesor}
      </p>

      <p>
        <i className="far fa-calendar"></i>
        {props.date}
      </p>

      <p>
        <b>
          <i className="fas fa-dollar-sign"></i>
          {props.amount}
        </b>

        <b>
          <i className="fas fa-key"></i>
          {props.id}
        </b>
      </p>

      <p>
        <i className="fas fa-tags"></i>
        {
          props.categorias.map(
            (cat, index, arreglo) => 
              ( index === arreglo.length - 1 )
                ? cat
                : `${cat}, `
          )
        }
      </p>
    </section>
  </li>
)

export default Evento