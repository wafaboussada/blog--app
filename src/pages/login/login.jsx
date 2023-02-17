import React, { useContext, useRef, useState } from 'react';
import axios from 'axios';
import { Context } from '../../store/context';
import { LoginFailure, LoginInvalidPassword, LoginInvalidUser, LoginStart, LoginSuccess } from '../../store/actions';

export default function Login() {
  // const [invalidUser, setInvalidUser] = useState(false)
  // const [invalidPassword, setInvalidPassword] = useState(false);
  // const [error, setError] = useState(false);
  // const [user, setUser] = useState({});
  const {
    user,
    dispatch,
    isFetching,
    error,
    invalidUser,
    invalidPassword,
  } = useContext(Context);
  const userRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('on Submit');
    dispatch(LoginStart());
    try {
        const res = await axios.post("/auth/login", {
          userName: userRef.current.value,
          password: passwordRef.current.value,
        });
        console.log(res.data);
    dispatch(LoginSuccess(res.data));
    } catch(err) {
        if (err.response.data === 'INVALID_USERNAME'){
        console.log('if username');
        dispatch(LoginInvalidUser());
        } else if (err.response.data === 'INVALID_PASSWORD'){
        console.log('if password');
        dispatch(LoginInvalidPassword());
        } else {
          dispatch(LoginFailure());
        }
      console.log(err);
    }
    // try {
    //   const res = await axios.post("/auth/login", {
    //     action(res.data)
    //   userName: userRef.current.value,
    //   password: passwordRef.current.value,
    // });
    // console.log(res);
    // if (res.data) {
    //   setUser(res.data);
    //   // window.location.replace("/");
    // }
    // } catch (err) {
    //   console.log(err);
    //   if (err.response.data === 'INVALID_USERNAME'){
    //     console.log('if username');
    //     setInvalidUser(true);
    //     setError(false);
    //     setInvalidPassword(false);
    //   } else if (err.response.data === 'INVALID_PASSWORD'){
    //     console.log('if password');
    //     setInvalidPassword(true);
    //     setInvalidUser(false);
    //     setError(false);
    //   } else {
    //     setError(true);
    //     setInvalidPassword(false);
    //     setInvalidUser(false);
    //   }
    //}
  }
  console.log('user store', user, isFetching, error);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>email</label>
        <input 
          type="text" 
          placeholder='username'
          ref={userRef}
        />
        <label>password</label>
        <input
          type="text"
          placeholder='password'
          ref={passwordRef}
        />
        <button type='submit'>Login</button>
      </form>
      <button>Register</button>
      {invalidUser && (
      <span>Username doesn't exist !</span>
      )}
      {invalidPassword && (
      <span>Verify your password !</span>
      )}
      {error && (
      <span>Something is wrong</span>
      )}
    </div>
  )
}
