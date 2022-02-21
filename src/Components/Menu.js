import { useEffect } from "react"
import React from 'react'


function Menu({title,MenuObject}) {
    
      useEffect(()=>{
          const allLi = document.querySelectorAll(".MenuContainer ul li");

          function changeMenu(){
              allLi.forEach((e)=>e.classList.remove("active"))
              this.classList.add("active")
          }
          allLi.forEach((e)=>e.addEventListener("click",changeMenu))
      },[])

  return (
    <div className='MenuContainer' > 
        <p className='title' >{title}</p>
        <ul>
            {
                MenuObject && MenuObject.map((li)=>(
                    <li> <a href="#">
                            <i> {li.icon}</i>
                            <span>{li.name}</span>
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export {Menu}