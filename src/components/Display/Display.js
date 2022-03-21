import React from 'react';

const Display = (props) => {
    return (
        <div style={{border:'3px solid green'}}>
            <h2>Name:{props.name}</h2>
            <h4>So far steps today : {props.steps}</h4>
        </div>

    );
};

export default Display;