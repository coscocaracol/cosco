import React, { Component } from 'react'
import Select from 'react-select'


class seleccionMultiple extends Component {
  constructor(...props) {
    super(...props)

    this.state = {
      options: this.props.options,
      value : []
    }
    this.seleccionarCambios = this.seleccionarCambios.bind(this)
  }

  seleccionarCambios(value) {
    this.setState( { value })
  }

  render() {
    return (
      <Select
        multi={true}
        simpleValue={true}
        joinValues={true}
        name={this.props.name}
        value={this.state.value}
        options={this.state.options}
        onChange={this.seleccionarCambios}
      />
    )
  }
}

export default seleccionMultiple