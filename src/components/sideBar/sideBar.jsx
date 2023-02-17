import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './sideBar.css';
export default function SideBar() {
  const [categories, setCatgeories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/categories");
      console.log(res);
      setCatgeories(res.data);
    }
    fetchCategories();
  }, [])
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
          {categories.map(cat => (
            <Link to={`/?category=${cat.name}`}>
            <li
            key={cat._id}
            className="sideBarListItem"
            >
              {cat.name}
            </li>
            </Link>
            
          ))}
          {/* <li className="sideBarListItem">Music</li>
          <li className="sideBarListItem">Cinema</li>
          <li className="sideBarListItem">Sport</li>
          <li className="sideBarListItem">Tech</li>
          <li className="sideBarListItem">Style</li> */}
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
