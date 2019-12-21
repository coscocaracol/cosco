import React from 'react'
import uid from 'uid'
import Calendario from './Calendario'
import SeleccionMultiple from './SeleccionMultiple'
import { profesores, categorias } from '../data'
import 'pure-css/lib/forms.css'
import 'pure-css/lib/buttons.css'
import '../../../css/formularioNuevoEvento.css'

const opcionesProfesores = profesores.map( profesor => Object.assign( {}, { label: profesor, value: profesor }))
const opcionesCategorias = categorias.map( cat => Object.assign( {}, { label: cat, value: cat }))

const NuevoEvento = (props) => (

  <form className="pure-form AddForm" onSubmit={props.agregarEvento}>

    <input type="hidden" name="id" value={uid(10)} />
    <input type="text" placeholder="Nombre del evento" name="name" />
    <input type="url" placeholder="poster" name="poster" />
    <input type="url" placeholder="web" name="url" />
    <input type="number" placeholder="costo" name="amount" />

    <SeleccionMultiple
      name = "profesor"
      placeholder = "Elige el profesor(es) del curso"
      options = { opcionesProfesores }
    />

    <SeleccionMultiple
      name = "categorias"
      placeholder = "Elige la(s) categoria(s) del curso"
      options = { opcionesCategorias }
    />

    <Calendario name="date" />

    <input className="pure-button pure-button-primary" type="submit" value="Guardar"/>

  </form>

)

export default NuevoEvento