import React,{useEffect} from 'react';
import { FaUser } from 'react-icons/fa';
import "../Styles/MainContainer.css";
import { AudioList } from './AudioList';
import { Banner } from './Banner';


function MainContainer() {
  useEffect(()=>{

    const allLi = document.querySelectorAll(".menuList ul li")

      function ChangeMenu(){
        allLi.forEach((e)=>e.classList.remove("active"))
        this.classList.add("active")
      }

    allLi.forEach((e)=>e.addEventListener("click",ChangeMenu))
},[])

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
      <AudioList/>
    </div>
  )
}

export  {MainContainer}