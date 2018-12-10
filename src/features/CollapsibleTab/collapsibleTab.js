import React from 'react';

import CollapsibleTabLayout from '../../layouts/CollapsibleTabLayout';
import { mock } from '../../mock.js';

import './style.css';

const CollapsibleTab = () => {

    const renderItems = () => {
        return mock.map(item => {
            return <CollapsibleTabLayout key={`collapsible-tab__${item.itemName}`} note={item}/>
        })
    }

    return (
        <div className="collapsible-tab">
            {renderItems()}
        </div>
    );

};

export default CollapsibleTab;