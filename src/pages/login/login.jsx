import React from 'react'

export default function Login() {
  return (
    <div>
      <form>
        <label>email</label>
        <input type="text" placeholder='email'/>
        <label>password</label>
        <input type="text" placeholder='password'/>
        <button>Login</button>
      </form>
      <button>Register</button>
    </div>
  )
}
