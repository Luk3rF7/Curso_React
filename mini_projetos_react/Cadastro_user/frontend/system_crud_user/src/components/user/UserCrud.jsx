import React , { Component } from 'react';
import Main from '../templates/main/Main';
import axios from 'axios';
import './UserCrud.css';

const headerProps = {
  icon:'users',
  title:'Clientes',
  subtitle: 'Cadastro de Clientes: Incluir,Listar,Alterar e Excluir!'
};

  const baseUrl = 'http://localhost:3001/users';

  const initialState = {
    user: {name:'',email:''},
    list:[]
  }
export default class UserCrud extends Component {
  state = {...initialState};
        /* lifecycle  */
        componentWillMount(){
          axios(baseUrl)
          .then(resp =>{
            this.setState({
              list:resp.data
            })
          })
        }

        /* formulario  */
  /*  limpar */
  clear(){
    this.setState({ user:initialState.user })
  }
  /* salvar */
  save() {
    const user = this.state.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
    axios[method](url,user)
    .then(resp => {
      const list = this.getUpdatedList(resp.data)
      this.setState({user:initialState.user,list})
    })
  }

  /* atualizar */
  getUpdatedList(user,add =true){
    const list = this.state.list.filter(u => u.id !== user.id)
    if(add)list.unshift(user)
    return list;
  }

  updateField(event){
    const user = {...this.state.user}
    user[event.target.name] = event.target.value 
    this.setState({user})
  }
  renderForm(){
    return (
      <div class="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome :</label>
              <input
               type="text"
              className="form-control"
              name="name"
              value={this.state.user.name}
              onChange={e => this.updateField(e)}
              placeholder='Digite o seu nome....'
              />
            </div>
          </div>

            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>E-mail:</label>
                <input 
                type="text"
                name="email"
                className="form-control"
                value={this.state.user.email}
                onChange={(e) => this.updateField(e)}
                placeholder='Digite seu E-mail...'
                />
              </div>
            </div>
        </div>
        <hr/>
        <div className="row">
        <div className="col-12 d-flex justify-content-end">
          <button 
          className="btn btn-save"
          onClick={(e) => this.save(e)}>
            Salvar
          </button>

          <button 
          className="btn ml-2"
          onClick={(e) => this.clear(e)}>
            Cancelar
          </button>
        </div>
        </div>
      </div>
    )
  }
  /* função editar e excluir tabela */
  load(user){
    this.setState({user})
  }
  remove(user){
    axios.delete(`${baseUrl}/${user.id}`)
    .then(resp => {
      const list = this.getUpdatedList(user,false)
      this.setState({list})
    })

  }

  renderTable(){
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
      </table>
    )
  }
  renderRow(){
    return this.state.list.map(user => {
      return (
        <tbody className="table mt-4">
          <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button 
            className="btn btn-warning"
            onClick={() => this.load(user)}>
              <i className="fa fa-pencil"></i>
            </button>
            <button 
            className="btn btn-danger ml-2"
            onClick={()=> this.remove(user)}>
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
      )
    })
  }
  render() {

    return (
      <Main {...headerProps}>
        <div className="text">
        <h1>Cadastros Clientes</h1>
        </div>
        {this.renderForm()}
        {this.renderTable()}
        {this.renderRow()} 
      </Main>
    )
  }

}


