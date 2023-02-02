import React from 'react';
import SideBar from '../../components/sideBar/sideBar';
import './settings.css';

export default function Settings() {
  return (
    <div className='settings'>
      <SideBar />
      <div className='settingsWrapper'>
        <div>
            <span>Update your profile</span>
            <span>Delete your account</span>
        </div>
        <form>
            <label>Picture</label>
            <div>
                <img src="" alt =""/>
                <label htmlFor="fileInput">
                    <i class="fa-regular fa-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}}/>
            </div>
        </form>
        <label>Username</label>
        <input type="text" placeholder='Username'/>
        <label>Email</label>
        <input type="text" placeholder='Email'/>
        <label>Password</label>
        <input type="password" placeholder='Password'/>
      </div>
    </div>
  )
}
