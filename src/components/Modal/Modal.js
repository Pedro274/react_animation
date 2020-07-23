import React from 'react';

import classes from  './Modal.module.css';

const modal = (props) => {
    
    const classesToApply = [classes.Modal, classes[props.show ? "ModalOpen" : "ModalClose"]].join(' ');



    return (
    <div className={classesToApply}>
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>Dismiss</button>
    </div>
)};

export default modal;