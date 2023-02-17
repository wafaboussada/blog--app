import React from 'react';
import { Link } from 'react-router-dom';
import './post.css';
export default function Post(props) {
  console.log(new Date(props.post.createdAt).toDateString());
  const imagePath = "http://localhost:5000/images/";
  return (
    <div className='post'>
      {props.post.picture && (
      <img src={imagePath + props.post.picture} alt="" />
      )}
      <div className="postInfo">
        <div className="postCats">
          {props.post.categories.map(cat => (
            <span key={cat} className="postCat">{cat}</span>
          ))}
        </div>
        <Link
          className='link'
          to={`/post/${props.post._id}`}
        >
        <span className="postTitle">{props.post.title}</span>
        </Link>
        <span className="postDate">{new Date(props.post.createdAt).toDateString()}</span>
      </div>
      <p className='postDescription'>{props.post.description}</p>
    </div>
  )
}
