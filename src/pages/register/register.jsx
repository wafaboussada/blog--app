import React from 'react'

export default function Register() {
  return (
    <div>
      <form>
      <label>Username</label>
        <input type="text" placeholder='Enter your Username'/>
        <label>email</label>
        <input type="text" placeholder='Enter your email'/>
        <label>password</label>
        <input type="text" placeholder='Enter your password'/>
        <button>Register</button>
      </form>
      <button>Login</button>
    </div>
  )
}
