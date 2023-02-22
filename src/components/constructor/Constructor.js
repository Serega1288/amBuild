import React from 'react';
import ConstItem from './Constructor_Item';

const Const = ( props ) => {
    //console.log('>>!!', props.type );
    return (
        <>
            {props?.props?.map( (item, index) => (
                <>ConstItem !!!!!!</>
                // <ConstItem type={props.type} href={props.href} key={index} item={item} />
            ))}
        </>
    )
};
export default Const;




