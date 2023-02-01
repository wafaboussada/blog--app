import React from 'react'
import './postItem.css';
export default function PostItem() {
  return (
    <div className='singlePost'>
      <div>
        <img src="" alt="" />
        <h1>Lorem ipsum dolor sit amet</h1>
        <div>
            <i class="fa-regular fa-pen-to-square"></i>
            <i class="fa-regular fa-trash"></i>
        </div>
        <div>
            <span>Author: <b>Jean</b></span>
            <span>1 hour ago</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sed modi quisquam laboriosam ab veritatis corrupti cupiditate
            saepe dolores, veniam dolorum aspernatur. Tenetur quod dolor maiores
            quibusdam aut reiciendis labore consequuntur.</p>
      </div>
    </div>
  )
}
