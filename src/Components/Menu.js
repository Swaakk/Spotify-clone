import React from 'react'

function Menu({title,MenuObject}) {
  return (
    <div className='MenuContainer'> 
        <p className='title'>{title}</p>
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