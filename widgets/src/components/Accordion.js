import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, updateActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        updateActiveIndex(index);
    }

    const renderedItems = items.map((item, index) => {
        const active = activeIndex === index ? 'active' : ''

        return (
            <React.Fragment key={index}>
                <div
                    className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
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