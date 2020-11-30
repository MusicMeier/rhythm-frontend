import React from 'react'
import ReactPlayer from "react-player" 
// import { Player } from 'video-react';

export default function Songs(props) {

    return (
        <div>
            {props.song.title}

            <ReactPlayer
                url={props.song.video}/>

        </div>
    )
}