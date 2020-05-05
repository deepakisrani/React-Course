import './ImageList.css'
import React from 'react';
import ImageCard from './ImageCard';

// key prop needs to be entered for list elements to reduce calculation time of figuring out what to render
// key needs to be added to the root element of the list item
const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });

    return <div className="image-list">{images}</div>;
}

export default ImageList;