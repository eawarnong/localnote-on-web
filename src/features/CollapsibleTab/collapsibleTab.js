import React from 'react';

import CollapsibleTabLayout from '../../layouts/CollapsibleTabLayout';
import { mock } from '../../mock.js';

import './style.css';

const CollapsibleTab = () => {

    return (
        <div className="collapsible-tab">
            <CollapsibleTabLayout note={mock[0]}/>
        </div>
    );

};

export default CollapsibleTab;