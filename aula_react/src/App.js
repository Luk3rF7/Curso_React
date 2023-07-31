import { Component } from 'react';
import './App.css';

class App extends Component {
  state = { 
   posts: [
   {
     id:1,
    title:' O titulo 1',
    body:"aqui esta corpo do titulo renderizado no jsx"
   },
   {
     id:2,
    title:' O titulo 2',
    body:"O corpo 2"
   },
   {
     id:3,
    title:' O titulo 3',
    body:"O corpo 3"
   },
   ]
  };  
  
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
