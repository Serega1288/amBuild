import React from 'react';
import Const from "./Constructor";


const GlobalConstructor = (props) => {
    //console.log('GlobalConstructor', props);
    return (
        <>
            <Const type={props.type} href={props.href} props={props.props} />
        </>
    )};
export default GlobalConstructor;