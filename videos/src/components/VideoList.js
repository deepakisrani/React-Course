import React from 'react';

import VideoItem from './VideoItem';

class VideoList extends React.Component {

    renderVideoList() {
        return this.props.videos.map((video) => {
            return <VideoItem key={video.id.videoId} video={video} />;
        });
    }

    render() {
        return <div>{this.renderVideoList()}</div>;
    }
}

export default VideoList;