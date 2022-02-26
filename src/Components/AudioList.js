import React, { useState } from "react";
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from "react-icons/fa";
import { Songs } from "../Components/Songs";

function AudioList() {
  const [song, setSong] = useState(Songs[0].song);
  const [img, setImg] = useState(Songs[0].imgSrc);

  const changeFavourite=(id)=>{
      Songs.forEach(song => {
          if(song.id == id){
              if(song.id == id){
                   song.favourite = !song.favourite;
              }
              
          }
      })
  }
  return (
    <div className="audioList">
      <h2 className="title">
        The List <span>{`${Songs.length} Songs`}</span>
      </h2>
      <div className="songContainer">
        {Songs &&
          Songs.map((song, index) => (
            <div className="songs" key={song?.id}>
              <div className="count">{`#${index + 1}`}</div>
              <div className="song">
                <div className="imageBox">
                  <img src={song?.imgSrc} alt="" />
                </div>
                <div className="section">
                  <p className="songName">
                    {song?.songName}
                    <span className="spanArtist">{song?.artist}</span>
                  </p>

                  <div className="hits">
                    <p className="hit">
                      <i>
                        <FaHeadphones />
                      </i>
                      95,00,5
                    </p>

                    <p className="duration">
                      <i>
                        <FaRegClock />
                      </i>
                      0.304
                    </p>

                    <div className="favourite" onClick={()=> changeFavourite(song?.id)}>
                      {song?.favourite ? (
                        <i>
                          <FaHeart />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export { AudioList };
