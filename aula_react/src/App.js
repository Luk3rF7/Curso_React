//      imports
import { Component } from 'react';
//    Css
import './App.css';
// funçoes 
import { loadPosts } from './util/load-post';
//components
import { PostCard } from './components/PostCard/PostCard';

class App extends Component {
  state = { 
    counter:0,
    posts: []
  };  

  async componentDidMount(){
     await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();

    this.setState({ posts: postsAndPhotos})

  }



  render(){
    const { posts } = this.state;

    return (
      <>
      <div className="App">
        <h1> Aula Components Fetch Data</h1>
          <h3>  pegando os posts do Objeto</h3>
      </div>
        <section className='container'>
          <div className="posts">
          {posts.map(post =>(
           <PostCard
           key={post.id}
           title={post.title}
           body={post.body} 
           id={post.id}
           cover={post.cover}
           />
              ))}
            </div>
            </section>
      </>
    )
  }
}

export default App; 
