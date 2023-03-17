import React from "react";

function createArrayFromNumber(num) {
    return Array.from({length: num}, (_, i) => i);
}

const Wallet = ({items, data}) => {
    // console.log('Wallet >>>', data?.result?.meta_data )
    return (
        <>
            {
                createArrayFromNumber(items).map((item, index) => (
                    <div className="tableListItem" key={`WalletItem-${item}`}>
                        <div className="row">
                            <div className="col">
                                <div style={{margin: `0`}} className="tableTitle">
                                    <strong>
                                    {
                                        data?.result?.meta_data?.filter(element => element.key === 'wallet_address_' + item + '_currency')?.slice(0, 1)[0].value
                                    }
                                    </strong>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div style={{margin: `0`}} className="tableTitle">
                                        {
                                            data?.result?.meta_data?.filter(element => element.key === 'wallet_address_' + item + '_name')?.slice(0, 1)[0].value
                                        }

                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )


}
export default Wallet;