import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import './postItem.css';
import { Context } from '../../store/context';
export default function PostItem() {
  const { user } = useContext(Context);
  const [post, setPost] = useState({})
  const [updating, setUpdating] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const location = useLocation();
  console.log(location);
  const path = location.pathname.split("/")[2];
  console.log(path);
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      console.log(res);
      setPost(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
    }
    getPost();
  }, [])
  const handleDelete = async() => {
    try {
      await axios.delete("/posts/" + path, {
      data: {username: user.username}
    });
    window.location.replace('/');
    } catch (err) {
      console.log(err);
    }
  }
  const handleUpdate = () => {
    setUpdating(true);
  }
  const handleUpdatePost = async () => {
    try {
      await axios.put("/posts/" + path,  {
        username: user.username,
        title,
        description
      })
      setUpdating(false);
    } catch (err) {
      console.log(err);
    }
  }
  const imagePath = "http://localhost:5000/images/";
  console.log("test postitem", post.categories);
  return (
    <div className='singlePost'>
      <div>
        {post.picture && (
        <img src={imagePath + post.picture} alt="" />
        )}
        {updating ? (
          <input 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
        ):
        (
          <h1>{title}</h1>
        )
        }
        {post.categories && post.categories.map((cat) => (
          <p key={cat}>{cat}</p>
        ))}
        {user.username === post.username && (
        <div>
            <i className="fa-regular fa-pen-to-square" onClick={handleUpdate}></i>
            <i className="fa-regular fa-trash" onClick={handleDelete}></i>
        </div>
        )}
        <div>
            <span>Author: 
              <Link to={`/?username=${post.username}`}>
                <b>{post.username}</b>
              </Link>
              </span>
            <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updating ? (
          <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          />
        ):
        (
          <p>{description}</p>
        )
        }
        {updating && (
        <button onClick={handleUpdatePost}>Update</button>
        )}
      </div>
    </div>
  )
}
