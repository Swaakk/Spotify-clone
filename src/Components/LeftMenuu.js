import React from 'react'
import "../Styles/LeftMenuu.css"
import {FaSpotify,FaEllipsisH} from "react-icons/fa"
import {BiSearchAlt} from "react-icons/bi"
import { MenuList } from './MenuList'
import { Menu } from './Menu'


function LeftMenuu() {
  return (
  
    <div className='leftMenu'>
        <div className="logoContainer">
            <i>
              <FaSpotify/>
            </i>
            <h2>Spotify</h2>
            <i>
              <FaEllipsisH/>
            </i>
        </div>
        <div className="searchBox">
          <input type="text" placeholder='Search...' />
         <i className='searchIcon'>
           <BiSearchAlt/>
          </i>
        </div>
          <Menu title={'Menu'} MenuObject={MenuList}/>
    </div> 
  )
}

export {LeftMenuu}