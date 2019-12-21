import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

class Calendario extends Component {
  constructor(...props) {
    super(...props)

    this.state = {
      startDate: null
    }

    this.cambiarFecha = this.cambiarFecha.bind(this)
  }

  cambiarFecha( date ) {
    this.setState ({
      startDate: date
    })
  }

  render () {
    return (
      <DatePicker
        Selected = { this.state.startDate }
        onChange = { this.cambiarFecha }
        placeholderText = "fecha"
        isClearable = { true }
        dateFormat = "DD/MM/AAAA"
        name = {this.props.name}
      />
    )
  }
}

export default Calendario