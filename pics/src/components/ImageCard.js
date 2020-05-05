import React from 'react';

class ImageCard extends React.Component {

    /*
        Refs give direct access to a single DOM element that is rendered by a React component.
        Steps to use Refs:
        - Create Refs in constructor.
        - Assign to instance variables.
        - Pass to particular JSX element as props

    */

    constructor(props) {
        super(props);

        this.state = { spans: 0 }
        this.imageRef = React.createRef();
    }

    //If you reference things like clientHeight directly in componentDidMount it is too early to get that as the image hasn't loaded yet and hence would return 0.
    componentDidMount() {
        // Vanilla JS listener
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);

        this.setState({ spans });
    }

    render() {
        const {description, urls} = this.props.image

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;