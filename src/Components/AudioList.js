import React from 'react'
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from 'react-icons/fa'

function AudioList() {
  return (
    <div className='audioList'>
        <h2 className='title'> 
            The List <span>12 Songs</span>

            <div className="songContainer">
                <div className="songs">
                    <div className="count">001</div>
                        <div className="song">
                            <div className="imageBox">
                                <img src="" alt="" />
                            </div>
                            <div className="section">
                                <p className='songName'>
                                    take me on
                                    <span className='spanArtist'>Artist Name</span>
                                </p>

                                <div className="hits">
                                    <p className="hit">
                                        <i><FaHeadphones/></i>
                                    95,00,5
                                    </p>

                                    <p className="duration">
                                        <i><FaRegClock/></i>
                                        0.304
                                    </p>

                                    <div className="favourite">
                                        <i><FaHeart/></i>
                                        <i><FaRegHeart/></i>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    
                </div>
            </div>
        </h2>
    </div>
  )
}

export {AudioList}