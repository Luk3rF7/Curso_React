//      imports
// import {  Component utilize em compont de classe } from 'react';
import { useCallback, useEffect, useState } from 'react';
//    Css
import './Home.css';
//components
import { loadPosts } from '../../util/load-post';
import { Posts } from '../../components/Post/Posts';
import { Button } from '../../components/Button/Button';
import { TextInput } from '../../components/TextInput/TextInput';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(2);
  const [searchValue, setSearchValue] = useState('');

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    // console.log(new Date().toLocaleString('pt-BR'));
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const noMorePosts = page + postsPerPage >= allPosts.length;
  const filteredPosts = searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && <h1>Search value: {searchValue}</h1>}

        <TextInput searchValue={searchValue} handleChange={handleChange} />
      </div>

      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

      {filteredPosts.length === 0 && <p>Não existem posts =(</p>}

      <div className="button-container">
        {!searchValue && <Button text="Load more posts" onClick={loadMorePosts} disabled={noMorePosts} />}
      </div>
    </section>
  );
};

/*  function components
class Home2 extends Component {

  state = {
    counter:0,
    posts: [],
    allPosts: [],
    page:0,
    postsPerPage:53,
    searchValue: ''
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
  handleChange = (e) => {
     const {value} = e.target;
     this.setState({searchValue: value})
  }



  render(){
    const { posts,page,postsPerPage,allPosts,searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ?
    posts.filter(post => {
      return post.title.toLowerCase().includes(
        searchValue.toLowerCase());
    })
    : posts;
    return (
      <>
      <div className="App">
        <h1> Aula Components Fetch Data</h1>
          <h3>  pegando os posts do Objeto</h3>
      </div>
        <section className='container'>
          <div className="search-container">

          {!!searchValue && (
            <>
             <h2>Search value: {searchValue}</h2>
            </>
          )}
          </div>
            <TextInput
            searchValue={searchValue}
            handleChange={this.handleChange}/>
           {filteredPosts.length > 0 &&  (
             <Posts posts={filteredPosts} />

           )}
           {filteredPosts.length === 0 &&  (
             <p>não existe posts</p>

           )}
        <div className="button-container">
            {!searchValue && (

              <Button
              text="load more post"
              onClicks={this.loadMorePosts}
              disabled={noMorePosts}/>
              )}
         </div>
        </section>
      </>
    )
  }
} */

export default Home;
