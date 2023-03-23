import React, {useState} from "react";
import {localStoreService} from "../../function/hook";

function createArrayFromNumber(num) {
    return Array.from({length: num}, (_, i) => i);
}

const Wallet = ({items, data}) => {
    // console.log('Wallet >>>', data?.result?.email )


    const [dataWaled, setdataWaled] = useState([]);
    const [isLoadingWaled, isLoadingSetWaled] = useState(false);

    const fetchWaled = async (item, emailUser) => {
        isLoadingSetWaled(true)
        let ob = { idUser: localStoreService.getLocal(process.env.LOCAL_TOKEN).name.split('ud=')[1] , type : `waledItemRemove`, item, emailUser  };
        const response = await fetch(`${process.env.GATSBY_SERVERLESS_URL}/sendGetData`, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(ob),
        });
        const d = await response.json();

        if (d) {
            setdataWaled(d);

            // console.log('dataWaled >>>', d.result )
            if( d.result == 'set' ) {

            }

            // console.log('Account >>>', dataAccount )

            // d?.result?.meta_data?.forEach((element) => {
            //     if(element.key === 'accoont_active' ) {
            //         // console.log('Account >>> for', element.value);
            //         setDataAccountStatus( Number(element.value) );
            //     }
            // });

            isLoadingSetWaled(false)
        }
    };

    const removeWalletItem = (item) => {
        console.log('removeWalletItem', item)
        fetchWaled(item+1, data?.result?.email)
        document.getElementById(`tableListItem-s-${item}`).classList.add('hide');

    }


    return (
        <>
            {
                createArrayFromNumber(items).map((item, index) => (
                    <div id={`tableListItem-s-${index}`} className="tableListItem" key={`WalletItem-${item}`}>
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
                            <div className="col-auto  d-flex align-items-center">
                                <div style={{margin: `0`}} className="tableTitle">
                                        {
                                            data?.result?.meta_data?.filter(element => element.key === 'wallet_address_' + item + '_name')?.slice(0, 1)[0].value
                                        }
                                </div>
                                <span onClick={()=>removeWalletItem(item)} style={{marginRight: `1rem`}} className="exit style-1"></span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )


}
export default Wallet;