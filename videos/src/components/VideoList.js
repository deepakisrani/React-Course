import React from 'react';

import VideoItem from './VideoItem';

class VideoList extends React.Component {

    renderVideoList() {
        return this.props.videos.map((video) => {
            return <VideoItem 
                        key={video.id.videoId}
                        onVideoSelect={this.props.onVideoSelect}
                        video={video} 
                    />;
        });
    }

    render() {
        return <div className="ui relaxed divided list">{this.renderVideoList()}</div>;
    }
}

export default VideoList;