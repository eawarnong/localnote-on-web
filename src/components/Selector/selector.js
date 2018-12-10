import React from 'react';

import './style.css';

const Selector = props => {

    const { children } = props;

    return (
        <div className="selector">
            {children}
        </div>
    );

}

export default Selector;