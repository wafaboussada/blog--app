import React from 'react';
import './header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSmall">WELCOME TO OUR</span>
        <span className="headerTitleLarge">BLOG</span>
      </div>
      <img 
      className='headerImg'
      src="https://media.istockphoto.com/id/517188688/fr/photo/paysage-de-montagne.jpg?s=612x612&w=0&k=20&c=pB4ewEznPPXu63-wemLp-I9O6zZmKWbsFKpyNBiMXiU=" 
      alt="" />
    </div>
  )
}
