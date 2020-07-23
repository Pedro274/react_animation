import React from 'react';

import classes from './Backdrop.module.css';

const backdrop = (props) => {
    const cssClasses = [classes.Backdrop, classes[props.show ? "BackdropOpen" : "BackdropClose"]].join(' ');

    return <div className={cssClasses} onClick={props.closed}></div>
    
};

export default backdrop;