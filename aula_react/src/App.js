import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.handlePClick = this.handlePClick.bind(this);
    this.state = {
      name:"Lucas felipe",
      frase:"Estou dentro de state sendo visualizado e sou dinamico posso mudar toda hora",
      frase2:"Que legal,fiz metodo bindmetody para renderizar state no metodo handleClick",
      counter: 0
    };
 
  }
    handlePClick = () => {
    this.setState({ name:"mudei valor do state name"})
    };

   handleAClick = (event) => {
      event.preventDefault();
      const { counter} = this.state;
      this.setState({counter:counter + 1})
    } ;
  
  render() {
    /* utilize destructor para facilitar */
    /* com destructor */
    const {frase }= this.state
    /*  sem destructor */
    const { name,counter} = this.state
    return (
      <div>
      <h1> Hello world com class </h1>
      <h2>
      {frase}
      </h2>
      <p onClick={this.handlePClick}>
       Name: {name} {counter}
      </p>
      <a 
      onClick={this.handleAClick}
      className="App-link"
      href="/#"
      >
        click para adicionar + 1 :
      </a>
    
    </div>
    )
  }
}

export default App; 
