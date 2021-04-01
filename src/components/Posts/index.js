import React from 'react';

import PropTypes from 'prop-types';

import Post from 'src/components/Post';

import './posts.scss';

const Posts = ({ posts }) => (
  <main className="posts">
    <h1 className="posts-title">Dev Of Thrones</h1>
    <div className="posts-list">
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          category={post.category}
          title={post.title}
          excerpt={post.excerpt} />
      ))}
    </div>
  </main>
);

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

export default Posts;
