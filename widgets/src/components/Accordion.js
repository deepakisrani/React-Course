import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, updateActiveIndex] = useState(0);

    const onTitleClick = (index) => {
        updateActiveIndex(index);
    }

    const renderedItems = items.map((item, index) => {
        return (
            <React.Fragment key={index}>
                <div
                    className={`title ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${activeIndex === index ? 'active' : ''}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    )
};

export default Accordion;