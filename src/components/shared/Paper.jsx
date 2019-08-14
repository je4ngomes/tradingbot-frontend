import React from 'react';

const Paper = ({ depth=1, style, children }) => {
    return (
        <div className={`z-depth-${depth}`} style={{ padding: 20, ...style }}>
            {children}
        </div>
    );
};

export default Paper;
