import React from 'react'
import "../Styles/LeftMenuu.css"
import {FaSpotify,FaEllipsisH} from "react-icons/fa"
import {BiSearchAlt} from "react-icons/bi"
import { MenuList } from './MenuList'
import { Menu } from './Menu'
import { MenuPlay } from './MenuPlay'
import { TrackList } from './TrackList'




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
          <MenuPlay/>
          <TrackList/>
          
          
    </div> 
  )
}

export {LeftMenuu}