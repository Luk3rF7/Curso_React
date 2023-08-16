import PropTypes from 'prop-types';
import { useReducer } from 'react';
import { PostsContext } from './context';
import { reducer } from './reducer';
import { data } from './data';
//
export const PostsProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(reducer, data);
  return (
    <PostsContext.Provider value={{ postsState, postsDispatch }}>
      {children}
    </PostsContext.Provider>
  );
};

PostsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
