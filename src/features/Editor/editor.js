import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const props = {
    text: PropTypes.string,
}

const defaultProps = {
    text: '',
}

const Editor = props => {

    return (
        <div>
            editor
        </div>
    );

}

Editor.propTypes = props;
Editor.defaultProps = defaultProps;
export default Editor;