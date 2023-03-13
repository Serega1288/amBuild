import React from 'react'

const ItemBlock_1 = ({style}) => {
    return (
        <>
            1
            <div className="Wrap">
                <div className="title">
                    Identity Verification Level
                </div>
                <span className="btn style-2">
                   Verification Level and Rights
               </span>
            </div>
            <div className="Wrap">
                <div className="title">
                    Personal Verification
                </div>
                <div className="block">
                    <div className="row">
                        <div className="col">
                            <div className="title" style={{padding: 0}}>
                                <strong>Basic Verification</strong>
                            </div>
                        </div>
                        <div className="col-auto">
                           <span className="labelStatus">
                               Not Verified
                           </span>
                        </div>
                    </div>
                </div>
                <div className="text-2" style={{marginTop: `3.2rem`}}>
                    The services provided by American Builds are not available to residents (hereinafter referred to as "restricted individuals") of the following countries,
                    including China, Crimea, Cuba, Iran, North Korea, Syria, or any entity or individual subject to restrictions under applicable trade sanctions and export
                    laws. The list above may not be exhaustive. Before using the services provided by American Builds, please ensure that you are not a "restricted individual".
                </div>
            </div>
        </>
    )
}
export default ItemBlock_1;