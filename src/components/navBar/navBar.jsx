import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LogOut } from "../../store/actions";
import { Context } from "../../store/context";
import "./navBar.css";
export default function NavBar() {
  const { user, dispatch } = useContext(Context);
  console.log('user navbar', user);
  const isUserConnected = false;
  const handleLogOut = () => {
    console.log("log out");
    dispatch(LogOut());
  }
  console.log(user && true);
  return (
    <div className="top">
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link
              // style={{textDecoration: "none", color: "inherit"}}
              className="link"
              to="/"
            >
              HOME
            </Link>
          </li>
          {!user._id && (
          <li className="topListItem">
          <Link
              // style={{textDecoration: "none", color: "inherit"}}
              className="link"
              to="/login"
            >
              LOGIN
            </Link>
          </li>
          )}
          {!user._id  && (
          <li className="topListItem">
          <Link
              // style={{textDecoration: "none", color: "inherit"}}
              className="link"
              to="/register"
            >
              REGISTER
            </Link>
          </li>
          )}
          {/* <li className='topListItem'>ABOUT</li>
            <li className='topListItem'>CONTACT</li> */}
          {user._id && (
          <li className="topListItem">
          <Link
              // style={{textDecoration: "none", color: "inherit"}}
              className="link"
              to="/write"
            >
              WRITE
            </Link>
          </li>
          )}
          {user._id && (
            <li className="topListItem" onClick={handleLogOut}>LOGOUT</li>
          )}
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
          alt=""
        />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
