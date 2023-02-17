import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import SideBar from "../../components/sideBar/sideBar";
import { Context } from "../../store/context";
import "./settings.css";
import { UpdateFailure, UpdateStart, UpdateSuccess } from "../../store/actions";

export default function Settings() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("null");
  const [file, setFile] = useState(null);
  const { user, dispatch} = useContext(Context);
  useEffect(() => {
    setEmail(user.email);
    setPassword(user.password);
  }, []);
  const handleChangeFile = (e) => {
    // console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(UpdateStart())
    const updatedUser = {
      id: user._id,
      email,
      password,
      username: user.username,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.picture = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      console.log(res);
      dispatch(UpdateSuccess(res.data));
      // window.location.replace("/post/" + res.data._id);
    } catch (err) {
      dispatch(UpdateFailure());
      console.log(err);
    }
  };
  const imagePath = "http://localhost:5000/images/";
  return (
    <div className="settings">
      <SideBar />
      <div className="settingsWrapper">
        <div>
          <span>Update your profile</span>
          <span>Delete your account</span>
        </div>
        <label>Picture</label>
        {file ? (<img src={URL.createObjectURL(file)} alt="" />)
        :
        (
          <img src={imagePath + user.picture} alt="" />
        )
      }
        <form onSubmit={handleSubmit}>
          <div>
            <img src="" alt="" />
            <label htmlFor="fileInput">
              <i className="fa-regular fa-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => handleChangeFile(e)}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            value={user.username}
            disabled
          />
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}
