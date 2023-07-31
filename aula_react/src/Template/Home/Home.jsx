//      imports
import { Component } from 'react';
//    Css
import './Home.css';
//components
import { loadPosts } from '../../util/load-post';
import { Posts } from '../../components/Post/Posts';
import { Button } from '../../components/Button/Button';


class Home extends Component {
  state = { 
    counter:0,
    posts: [],
    allPosts: [],
    page:0,
    postsPerPage:53
  };  

  async componentDidMount(){
     await this.loadPosts();
  }

  loadPosts = async () => {
    const { page , postsPerPage } = this.state
    const postsAndPhotos = await loadPosts();

    this.setState({
       posts: postsAndPhotos.slice(page,postsPerPage),
       allPosts: postsAndPhotos,
      })

  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage,nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({posts, page:nextPage})
    console.log(page,postsPerPage,nextPage,nextPage + postsPerPage)
  } 



  render(){
    const { posts,page,postsPerPage,allPosts } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    return (
      <>
      <div className="App">
        <h1> Aula Components Fetch Data</h1>
          <h3>  pegando os posts do Objeto</h3>
      </div>
        <section className='container'>
        <Posts posts={posts} />
        <div className="button-container">

        <Button 
         text="load more post"
         onClicks={this.loadMorePosts}
         disabled={noMorePosts}/>
         </div>
        </section>
      </>
    )
  }
}

export default Home; 
