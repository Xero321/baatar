import React from 'react';
import style from './style.css';

function Shadow(props) {
    return (
        props.show ? <div className="shadow">  </div> : null
    );
}

export default Shadow;