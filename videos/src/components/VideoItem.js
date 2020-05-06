import React from 'react';

const VideoItem = ({ video }) => {
    return (
        <div className="ui card">
            <img src={video.snippet.thumbnails.medium.url} alt={video.id.videoId} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
                <div class="meta">{video.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoItem;