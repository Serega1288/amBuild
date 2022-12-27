import React, { useState } from 'react'
import useCollapse from 'react-collapsed'

const ItemCollapse = ({item } ) => {

    // const [open, setOpen ] = useState(false);
    // const clickHandler = () => {
    //     setOpen(!open)
    // }

    //const [visible, setVisible] = useState(false)


    const [isExpanded, setExpanded] = useState( false );

    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

   //console.log('Collaps  >>>', item )

    return (
                    <div className="box-collaps-list">
                        <div
                            {...getToggleProps({
                                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                            })}
                            className='collaps-title pos'
                        >
                            <span className="anim" />{item.title}
                        </div>
                        <div  {...getCollapseProps()}>
                            <div className="editor" dangerouslySetInnerHTML={{__html: item.editor}} />
                        </div>

                    </div>

    )
};
export default ItemCollapse;



