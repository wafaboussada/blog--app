import React from 'react'
import PostItem from '../../components/postItem/postItem'
import SideBar from '../../components/sideBar/sideBar'
import './singlePost.css';
export default function SinglePost() {
  
  return (
    <div className='singlePost'>
      <SideBar />
      <PostItem />
    </div>
  )
}
