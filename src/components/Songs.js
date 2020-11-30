import React from 'react'
// import { Player } from 'video-react';

export default function Songs(props) {

    return (
        <div>
            {props.song.title}
            {/* <iframe
        title="video"
        height="200"
        width="300" 
        src={props.song.video} alt={props.song.id}
            // frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
            >
            </iframe> */}

            <iframe width="560" height="315" src={props.song.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
    )
}