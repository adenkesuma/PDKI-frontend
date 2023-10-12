"use client"
import React from "react";
import YouTube from "react-youtube"

interface videoProps {
    video_url: string;
    thumbnail_ulr: string;
    online: any;
}

const VideoPlayer = ({ video_url, thumbnail_ulr, online }: videoProps) => {
    const handleOnReady = (event: { target: { pauseVideo: () => void } }) => {
        event.target.pauseVideo()
    }

    let regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    let match = video_url.match(regExp);
    let url = ""
    if (match && match[2].length == 11) {
        url = match[2]
    }

    const opts = {
        height: "500",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }

    return (
        <div>
            {online === 1 ?
                <YouTube
                    videoId={url}
                    opts={opts}
                    onReady={handleOnReady}
                /> :
                <video width="100%" height="100%" muted controls>
                    <source src={process.env.BASE_URL + video_url} type="video/mp4" />
                    <source src={process.env.BASE_URL + video_url} type="video/ogg" />
                </video>
            }
        </div>
    )
}

export default VideoPlayer