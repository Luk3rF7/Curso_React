import { useContext, useEffect, useRef } from 'react';
import { PostsContext } from './../../context/PostsProvider/context';
import { loadPosts } from './../../context/PostsProvider/actions';
import { CounterContext } from './../../context/CounterProvider/context';
import {
  decrementCounter,
  incrementCounter,
} from './../../context/CounterProvider/action';
//
export const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;
  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });
    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);
  return (
    <div>
      <button onClick={() => incrementCounter(counterDispatch)}>
        counter {counterState.counter}
      </button>
      <button onClick={() => decrementCounter(counterDispatch)}>
        counter{counterState.counter} -
      </button>
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
