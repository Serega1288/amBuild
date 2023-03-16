import React from 'react'
import ItemBlock_1 from './ItemBlock_1'
import ItemBlock_2 from './ItemBlock_2'
import ItemBlock_3 from './ItemBlock_3'
// import ItemBlock_4 from './ItemBlock_4'
// import ItemBlock_5 from './ItemBlock_5'
// import ItemBlock_6 from './ItemBlock_6'
// import ItemBlock_7 from './ItemBlock_7'
// import ItemBlock_8 from './ItemBlock_8'
// import ItemBlock_9 from './ItemBlock_9'

const ItemBlock = ({style}) => {
    console.log('style', style)
    return (
        <div className="ItemBlock">
            { style === 2 ? (<ItemBlock_1/>) : '' }
            { style === 3 ? (<ItemBlock_2/>) : '' }
            { style === 4 ? (<ItemBlock_3/>) : '' }
            {/*{ style === 4 ? (<ItemBlock_4/>) : '' }*/}
            {/*{ style === 5 ? (<ItemBlock_5/>) : '' }*/}
            {/*{ style === 6 ? (<ItemBlock_6/>) : '' }*/}
            {/*{ style === 7 ? (<ItemBlock_7/>) : '' }*/}
            {/*{ style === 8 ? (<ItemBlock_8/>) : '' }*/}
            {/*{ style === 9 ? (<ItemBlock_9/>) : '' }*/}
        </div>
    )
}
export default ItemBlock;