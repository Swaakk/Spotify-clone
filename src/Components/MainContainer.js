import React from 'react';
import { FaUser } from 'react-icons/fa';
import "../Styles/MainContainer.css";
import { Banner } from './Banner';


function MainContainer() {
  return (
    <div className='menuContainer'>
      <Banner/>
      <div className="menuList">
        <ul>
          <li><a href="#">Popular</a></li>
          <li><a href="#">Album</a></li>
          <li><a href="#">Songs</a></li>
          <li><a href="#">Fans</a></li>
          <li><a href="#">About</a></li>
        </ul>
        <p><i><FaUser/></i>12.3M <span>Followers</span></p>
      </div>
    </div>
  )
}

export  {MainContainer}