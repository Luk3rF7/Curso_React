import React, { Component } from 'react';

export default class Main extends Component {
  state = {
    novaTask: '',
  };
  input = (e) => {
    this.setState({
      newTask: e.target.value,
    })
  }


  render() {
    const { novaTask } = this.state;
    return (

      <div className="main">
        <h1>Lista de Tarefa com Js</h1>
        <form>
          <input onCahnge={this.inputMudou} type="text" />
          <p>{novaTask}</p>
          <button tpe="submit"> Adcionar tarefa</button>
        </form>
      </div>)
  }
}