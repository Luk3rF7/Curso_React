import React, { Component } from 'react';
import './Main.css'
export default class Main extends Component {
  state = {
    newTask: '',
  };

  handleInput = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  }


  render() {
    const { newTask } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefa com Js</h1>
        <form>
          <input onChange={this.handleInput} type="text" />
          <button tpe="submit"> Adcionar tarefa</button>
          <p>{newTask}</p>
        </form>
      </div>)
  }
}