import '../stylesheets/VideoItem.css';
import React from 'react';

const VideoItem = (props) => {
    const video = props.video;

    return (
        <div onClick={(e) => {props.onVideoSelect(video)}} className="video-item item">
            <img 
                className="ui image"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoItem;