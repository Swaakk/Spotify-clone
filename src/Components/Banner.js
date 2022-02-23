import React from 'react'
import Artist from "../img/artist.jpg"
import Check from "../img/check.png"
import {FaEllipsisH,FaHeadphones,FaCheck} from 'react-icons/fa'


function Banner() {
  return (
    <div>
        <div className="banner">
            <img className='bannerImg' src={Artist} alt="" />
            <div className='content'>
                <div className='breadCrump'>
                    <p>
                        Home <span>/Popular Artist</span>
                    </p>
                    <i>
                        <FaEllipsisH/>
                    </i>
                </div>
                <div className='artist'>
                    <div className="left">
                        <div className="name">
                            <h2>A-Ha</h2>
                            <img src={Check} alt="" />
                        </div>
                        <p>
                            <i className='head'>
                                <FaHeadphones/>
                            </i>{" "}
                            11,184,1811 <span>Mothly Listeners</span>
                        </p>
                    </div>
                    <div className="right">
                        <a href="#">Play</a>
                        <a href="#">Following<i><FaCheck/></i></a>
                    </div>
                </div>
            </div>

            <div className="bottomLayer"></div>
        </div>
    </div>
  )
}

export { Banner }