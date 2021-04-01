import React from 'react';

import PropTypes from 'prop-types';


import './post.scss';

/** const Post = () => (
  <article className="post">
    <h2 className="post-title">Titre du post</h2>
    <div className="post-category">tag</div>
    <p className="post-excerpt">Lorem ipsuliquid veniam.</p>
  </article>
); */
const Post = ({posts}) => {
  const postId = `post-${posts.id}`;

  return (
    <article className="post" htmlFor={postId}>
      <h2 className="post-title">{posts.title} </h2>
      <div className="post-category">{posts.category} </div>
      <p className="post-excerpt">{posts.excerpt} </p>
    </article>
  );
};

Post.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Post;
