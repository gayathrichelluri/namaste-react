import React from 'react';

const Caret = ({ direction = 'up' }) => {
    const caretStyle = {
        display: 'inline-block',
        width: '0',
        height: '0',
        borderLeft: '8px solid transparent',
        borderRight: '8px solid transparent',
        borderBottom: direction === 'up' ? '8px solid darkgrey' : 'none',
        borderTop: direction === 'down' ? '8px solid darkgrey' : 'none',
    };

    return <span style={caretStyle}></span>;
};

export default Caret;