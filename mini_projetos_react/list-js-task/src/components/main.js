import React, { Component } from 'react';


import './Main.css'
import Form from './form';
import Task from './Task';
export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1,
  };
  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if (!tasks) return;

    this.setState({ tasks })
  }
  componentDidUpdate(prevProps, prevState) {
    // pegamos dado da task
    const { tasks } = this.state;

    if (tasks === prevState.tasks) return;
    // armazenar no localstore
    localStorage.setItem('tasks', JSON.stringify(tasks))


  }

  handleSubmit = (e) => {
    e.preventDefault();

    // logica para adicioanr no array:
    const { tasks, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return;

    const newsTasks = [...tasks];


    // fazer checagem se e editar ou salvar
    if (index === -1) {
      this.setState({
        tasks: [...newsTasks, newTask],
        newTask: '',
      })
    } else {
      newsTasks[index] = newTask;
      this.setState({
        tasks: [...newsTasks],
        index: -1

      })
    }

  }

  // estado
  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  }

  // editar
  handleEdit = (e, index) => {
    const { tasks } = this.state;

    this.setState({
      index,
      newTask: tasks[index]
    });
  }
  // delete
  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const newsTasks = [...tasks];
    newsTasks.splice(index, 1);

    this.setState({
      tasks: [...newsTasks],
      newTask: '',
    });

  }
  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>
          <em>
            Lista de Tarefa
          </em>
        </h1>
        {/* Components de formulario */}
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={newTask}
        />
        {/* componente das tarefas */}
        <Task
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          tasks={tasks}
        />
      </div>
    )
  }
}