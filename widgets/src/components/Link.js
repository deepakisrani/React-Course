import React from 'react';

const Link = ({ className, href, children }) => {

    const onClick = (event) => {
        // To handle ctrl + click or cmd + click
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', href); // Changing URL

        // Generating a navigation event
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
    );
}

export default Link;