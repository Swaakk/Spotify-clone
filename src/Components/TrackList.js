import React from 'react'
import {AiTwotoneSound} from "react-icons/ai"
import {RiComputerFill} from "react-icons/ri"
import {BsMusicNoteList} from "react-icons/bs"
import track from "../img/track.png"

function TrackList() {
  return (
      
    <div className='trackList'>
        <div className='top'>
            <img src={track} />
            <p className='trackName'>Song Name<span className='trackSpan'>Artist</span></p>
        </div>
        <div className='bottom'>
            <i className='sound'><AiTwotoneSound/></i>
            <input type="range" className='rangeColor' />
            <i className='musicNote'><BsMusicNoteList/></i>
            <i className='desk'><RiComputerFill/></i>
        </div>
    </div>
  )
}

export { TrackList }