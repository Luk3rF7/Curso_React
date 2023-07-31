import { Component } from 'react';
import './App.css';

class App extends Component {
  state = { 
    counter:0,
    posts: [
    {
      id:1,
      title:"Titulo dentro do Mount",
      body:"LifeCycle method"
    },
    {
      id:2,
      title:"Titulo dentro do Mount",
      body:"LifeCycle method"
    },
    {
      id:3,
      title:"Titulo dentro do Mount",
      body:"LifeCycle method"
    },
  ]
  };  
  timeoutUpdate = null
  componentDidMount(){
    this.handleTimeout();
  }

  componentDidUpdate(){
    clearTimeout(this.timeoutUpdate)
    this.handleTimeout();
  }

  handleTimeout = () => {
    const { posts,counter } = this.state;
    posts[0].title = 'O titulo mudou '
    posts[0].body = "atualizou"
    //fazendo isso para ter acesso ao time out
   this.timeoutUpdate = setTimeout(() => {
      this.setState({
          posts,
          counter: counter + 1,
      })
    },2000)
  } 

  render(){
    const { posts } = this.state;

    return (
      <div className="App">
        <h1> Aula Components com Array e Objetos</h1>
          <h3>  pegando os posts do Objeto</h3>
          {posts.map(post =>
            (
              <div key={post.id}>
              <h1>{post.title}</h1>
                <p> {post.body} </p> 
                </div> 
              )
              )
            }
      </div>
    )
  }
}

export default App; 
