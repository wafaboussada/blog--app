import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/header/header';
import Posts from '../../components/posts/posts';
import SideBar from '../../components/sideBar/sideBar';
import './home.css';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  console.log(location);
  const { search } = location;
  console.log(search);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search); 
      console.log(res);
      setPosts(res.data);
    }
    fetchPosts();
  }, [search])
  console.log(posts);
  return (
    <div>
      <Header />
      <div className='home'>
        <SideBar />
        <Posts posts={posts} />
      </div>
    </div>
  )
}
