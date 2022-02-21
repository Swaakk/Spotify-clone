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
            {
                PlayList && PlayList.map((list)=>(
                    <div className="playList">
                        <i className='list'>
                            <BsMusicNoteList/>
                        </i>
                            <p>Sample name</p>
                        <i className='trash'>
                            <BsTrash/>
                        </i>
                    </div>
                ))
            }
            
    </div>

    </div>
  )
}

export {MenuPlay}