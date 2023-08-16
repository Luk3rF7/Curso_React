import React, { useEffect, useMemo, useRef, useState } from 'react';
import P from 'prop-types';
//componente post
const Post = ({ post, handleClick }) => {
  return (
    <div key={post.id} className="post">
      <h1 style={{ fontSize: '14px' }} onClick={() => handleClick(post.title)}>
        {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};

// tipando props do Post
Post.propTypes = {
  // toda vez que for obj usamos shape
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
};

//componente useMemo
export default function UseRef() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  console.log('Pai renderizou!');
  // utilizando useRef
  const inputRef = useRef(null);
  const contadorRef = useRef(0);

  //component did Mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);
  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef.current);
  }, [value]);
  //component update
  useEffect(() => {
    contadorRef.current++;
  });
  const handleClick = (value) => {
    setValue(value);
  };
  // reponsavel por renderização
  return (
    <div>
      <p>
        <input
          ref={inputRef}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      <h1>UseRef</h1>
      <h2>Pagina renderizou:{contadorRef.current}x</h2>
      {useMemo(() => {
        return (
          posts.length > 92 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} handleClick={handleClick} />;
          })
        );
      }, [posts])}
      {posts.length <= 90 && <p>Ainda não existem posts</p>}
    </div>
  );
}
