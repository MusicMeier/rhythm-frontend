import React from 'react'
import ReactPlayer from "react-player" 
// import { Player } from 'video-react';

export default function Songs(props) {

    return (
        <div>
            <h3>{props.song.title}
                </h3>
            <ReactPlayer className="videos"
                url={props.song.video}/>
            {/* <button onClick={() => (event)}/>  */}

        </div>
    )
}