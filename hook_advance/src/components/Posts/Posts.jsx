import { useContext, useEffect } from 'react';
import { PostsContext } from './../../context/PostsProvider/context';
import { loadPosts } from './../../context/PostsProvider/actions';
//
export const Posts = () => {
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  useEffect(() => {
    loadPosts(postsDispatch);
  }, [postsDispatch]);
  return (
    <div>
      <h1>Post</h1>
      {postsState.loading && (
        <h1>
          <strong>Carregando post......</strong>
        </h1>
      )}
      {postsState.posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};
