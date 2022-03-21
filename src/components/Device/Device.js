import React from 'react';
import DevaiceDetail from '../DeviceDetail/DevaiceDetail';



const Device = (props) => {
    return (
        <div>
            <h1>I have a device {props.name} </h1>
            <h4> Price:{props.price}</h4>
            <DevaiceDetail price="34333" ></DevaiceDetail>
        </div>
    );
};

export default Device;