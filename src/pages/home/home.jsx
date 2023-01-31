import React from 'react'
import Header from '../../components/header/header'
import Posts from '../../components/posts/posts'
import SideBar from '../../components/sideBar/sideBar';
import './home.css';

export default function Home() {
  return (
    <div>
      <Header />
      <div className='home'>
        <SideBar />
        <Posts />
      </div>
    </div>
  )
}
