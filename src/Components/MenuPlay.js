import React from 'react'
import {FaPlus} from "react-icons/fa"
import {BsMusicNoteList,BsTrash} from "react-icons/bs"
import { PlayList } from './PlayList'



function MenuPlay() {
  return (
    <div className='playListContainer'>
        <div className='nameContainer'>
            <p>Playlist</p>
            <i>
                <FaPlus/>
            </i>
        </div>

        <div className='playListScroll'>
            <i>
                <BsMusicNoteList/>
            </i>
        </div>

    </div>
  )
}

export {MenuPlay}