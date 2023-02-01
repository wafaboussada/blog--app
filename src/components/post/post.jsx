import React from 'react';
import './post.css';
export default function Post() {
  return (
    <div className='post'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0GqoH701nloirqAMyQ6J4HO7QbRGHXJ2bXA&usqp=CAU" alt="" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className='postDescription'>Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Ab aliquam expedita reiciendis
      delectus optio dolore ipsa. Quae ipsam aut tempore iste porro! Ea
      veniam odio eligendi nihil delectus aliquam enim!</p>
    </div>
  )
}
