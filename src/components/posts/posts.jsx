import React from 'react';
import './posts.css';
import Post from '../post/post';
export default function Posts(props) {
  console.log('props posts', props);
  return (
    <div className='posts'>
      {props.posts.map(post => (
        <Post 
          key={post._id}
          post={post}
        />
      ))}
      {/* <Post />
      <Post />
      <Post />
      <Post />
      <Post /> */}

    </div>
  )
}
