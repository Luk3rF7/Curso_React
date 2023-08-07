import { PostCard } from '../PostCard/PostCard';
import './Post.css'
<<<<<<< Updated upstream
import Props from 'prop-types';

export const Posts = ({ posts = [] }) => {
=======
import Props
export const Posts = ({ posts= [] }) => {
>>>>>>> Stashed changes

  return (
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
    )
}
<<<<<<< Updated upstream

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: Props.array,
};

/* 
* metodo mais complexo: 
 Posts.propTypes = {
  posts: Props.arrayOf(
    Props.shape({
        title: Props.string.isRequired,
        cover: Props.string.isRequired,
        body: Props.string.isRequired,
        id: Props.number.isRequired,
    })
  ),
}; */
=======
Posts.defaultProps = {
  posts: [],
}


Posts.propTypes = { 
  posts: Props.array,
}
>>>>>>> Stashed changes
