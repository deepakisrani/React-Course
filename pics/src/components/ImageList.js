import React from 'react';

// key prop needs to be entered for list elements to reduce calculation time of figuring out what to render
// key needs to be added to the root element of the list item
const ImageList = (props) => {
    const images = props.images.map(({description, id, urls}) => {
        return <img alt={description} key={id} src={urls.regular} />
    });

    return <div>{images}</div>;
}

export default ImageList;