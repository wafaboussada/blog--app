import React from "react";
import './sideBar.css';
export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT US</span>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlIvYG1V5lJgzra_T_ElHk0cCm1jrVFvcUqw&usqp=CAU"
        alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius totam id
          ratione accusantium iusto omnis similique error, nam magni
          reprehenderit maiores enim eligendi nisi neque, officiis beatae
          delectus consequuntur odit!
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
          <li className="sideBarListItem">Life</li>
          <li className="sideBarListItem">Music</li>
          <li className="sideBarListItem">Cinema</li>
          <li className="sideBarListItem">Sport</li>
          <li className="sideBarListItem">Tech</li>
          <li className="sideBarListItem">Style</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
          <i className="sideBarIcon fa-brands fa-square-facebook"></i>
          <i className="sideBarIcon fa-brands fa-square-twitter"></i>
          <i className="sideBarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
