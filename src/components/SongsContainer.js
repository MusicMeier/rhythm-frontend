import React from 'react'
import Songs from './Songs'

export default function SongsContainer(props) {

        return(
            <div className="songs-container">
                {props.song.map(song => {
                        return <Songs song={song}/>
                    })
                }
            </div>
        )  
}