/* Packages */
import React from 'react';

/* Render Merged Props */
export default function renderMergedProps(component, ...rest) {
    const finalProps = Object.assign({}, ...rest);

    return (
        React.createElement(component, finalProps)
    );
}