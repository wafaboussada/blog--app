import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../../store/context';

export default function Write() {
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const handleChangeFile = (e) => {
    // console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      description,
      username: user.username
    }
    if(file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.picture = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.post("/posts", newPost);
    console.log(res);
    window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
    
  }
  return (
    <div>
      {file && (
      <img src={URL.createObjectURL(file)} alt="" />
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputFile">
            <i className="fa-solid fa-plus"></i>
        </label>
        <input type="file" id="inputFile"
        style={{ display: 'none'}}
        onChange={(e) => handleChangeFile(e)}
        />
        <input
        type="text"
        placeholder='title'
        onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
        placeholder='description'
        onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}
