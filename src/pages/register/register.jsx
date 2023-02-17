import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isExist, setIsExist] = useState(false);
  const [error, setError] = useState(false);
  const handleUserNameChange = (event) => {
    // console.log(event.target.value);
    setUsername(event.target.value);
  }
  const handleEmailChange = (event) => {
    // console.log(event.target.value);
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {
    // console.log(event.target.value);
    setPassword(event.target.value);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('on Submit');
    try {
      const res = await axios.post("/auth/register", {
      username,
      email,
      password,
    });
    console.log(res);
    if (res.data) {
      window.location.replace("/login");
    }
    } catch (err) {
      console.log(err);
      if (err.response.data.code === 11000){
        console.log('if');
        setIsExist(true);
      } else {
        setError(true);
      }
    }
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>Username</label>
        <input 
          type="text" 
          placeholder='Enter your Username'
          onChange={(event) => handleUserNameChange(event)}
        />
        <label>email</label>
        <input
          type="text"
          placeholder='Enter your email'
          onChange={(event) => handleEmailChange(event)}
        />
        <label>password</label>
        <input
          type="password"
          placeholder='Enter your password'
          onChange={(event) => handlePasswordChange(event)}
        />
        <button type='submit'>Register</button>
      </form>
      <button>Login</button>
      {isExist && (
      <span>Username or Email already exist</span>
      )}
      {error && (
      <span>Something is wrong</span>
      )}
    </div>
  )
}
