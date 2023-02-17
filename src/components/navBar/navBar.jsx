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
  const imagePath = "http://localhost:5000/images/";
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
        <Link to='/settings'>
          {user.picture && (
        <img
          className="topImg"
          src={imagePath + user.picture}
          alt=""
        />
        )}
        </Link>
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
