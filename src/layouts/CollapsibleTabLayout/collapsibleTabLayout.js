import React from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';

import Selector from '../../components/Selector';

import './style.css';

const props = {
    note: PropTypes.object
}

const defaultProps = {
    note: '',
}

const CollapsibleTabLayout = props => {

    const { note } = props;

    const collapseDetail = name => {
        return (
            <Selector>{name}</Selector>
        );
    };

    const expandDetail = items => {
        return items.map(item => {
            console.log('expand map', item)
            if(isFolder(item)) return renderCollapsible(item.folderName, expandDetail(item.items));
            else return <Selector key={`selector__${item.fileName}`}>{item.fileName}</Selector>
        });
    }

    const isFolder = item => Object.keys(item).some(prop => {
        return ~prop.indexOf('folderName');
    });

    const renderCollapsible = (header, children) => {
        return (
            <Collapsible 
                key={`collapsible-tab-layout__${header}`}
                trigger={collapseDetail(header)}
            >
                {children}
            </Collapsible>
        );
    };

    return (
        <div className="collapsible-tab-layout">
            {renderCollapsible(note.itemName, expandDetail(note.items))}
        </div>
    );

}

CollapsibleTabLayout.propTypes = props;
CollapsibleTabLayout.defaultProps = defaultProps;
export default CollapsibleTabLayout;