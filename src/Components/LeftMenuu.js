import React from 'react'
import "../Styles/LeftMenuu.css"
import {FaSpotify,FaEllipsisH} from "react-icons/fa"



function LeftMenuu() {
  return (
    <div className='leftMenu'>
        <div className="logoContainer">
            <i><FaSpotify/></i>
            <h2>Spotify</h2>
            <i><FaEllipsisH/></i>
        </div>
        <div className="searchBox"></div>

    </div>
  )
}

export {LeftMenuu}