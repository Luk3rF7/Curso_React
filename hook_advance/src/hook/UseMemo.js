import React, { useEffect, useMemo, useState } from 'react';
import P from 'prop-types';
//componente post
const Post = ({ post }) => {
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
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
};

//componente useMemo
export default function UseMemo() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  console.log('Pai renderizou!');

  //component did Mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  // reponsavel por renderização
  return (
    <div>
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      <h1>UseMemo</h1>
      {
        /*  // eslint-disable-next-line */
        useMemo(() => {
          return posts.map((post) => {
            return <Post key={post.id} post={post} />;
          });
        })
      }
    </div>
  );
}
