import React, {useState} from 'react'
import ReactPlayer from "react-player" 
// import { Player } from 'video-react';

export default function Songs(props) {

    const [likeCount, setLikeCount] = useState(0)

    function handleClick(){
        setLikeCount(likeCount + 1)
       
    }

    return (
        <div>
            <h3>{props.song.title}
                </h3>
            <ReactPlayer className="videos"
                url={props.song.video}/>
                <h4>{likeCount}</h4>
            <button onClick={handleClick}>Like</button> 
        </div>
    )
}