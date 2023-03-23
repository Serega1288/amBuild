import React, {useEffect, useState} from "react";
import {localStoreService} from "../../function/hook";
import Wallet from "./Wallet";
import AccountData from "../../function/accountData";
// import useFormWallet from "../../function/useFormWallet";

const WrapWallet = () => {

    const { dataAccountStatus, dataAccount, fetchDataAccount, isLoadingDataAccount } = AccountData();
    useEffect(() => {
        fetchDataAccount()
    }, []);



    const WalletAddress = isLoadingDataAccount === false && ( dataAccount?.result?.meta_data?.filter(element => element.key === 'wallet_address')?.slice(0, 1)[0].value )
    const emailAc = isLoadingDataAccount === false && ( dataAccount?.result?.email )


    const [dataWaled, setdataWaled] = useState([]);
    const [isLoadingWaled, isLoadingSetWaled] = useState(false);

    const fetchWaled = async (op1, op2, op3) => {
        isLoadingSetWaled(true)
        let ob = { idUser: localStoreService.getLocal(process.env.LOCAL_TOKEN).name.split('ud=')[1] , type : `waled`, currency: op1, wallet: op2, email: op3  };
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
                document.getElementById("currency").value = '';
                document.getElementById("wallet").value = '';
            }
            fetchDataAccount()


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

    const walletAdd = () => {

        const inputValueCurrency = document.getElementById("currency").value;
        const inputValueWallet = document.getElementById("wallet").value;

        console.log('walletAdd', inputValueCurrency.length, inputValueWallet.length, localStoreService.getLocal(process.env.LOCAL_TOKEN).name.split('ud=')[1] )

        if ( inputValueCurrency.length > 0 ) {
            document.getElementById(`currency`).classList.remove('error');
        } else {
            document.getElementById(`currency`).classList.add('error');
        }

        if ( inputValueWallet.length  > 0 ) {
            document.getElementById(`wallet`).classList.remove('error');
        } else {
            document.getElementById(`wallet`).classList.add('error');
        }

        if ( inputValueCurrency.length > 0 && inputValueWallet.length  > 0 ) {
            fetchWaled(inputValueCurrency, inputValueWallet, emailAc)

        } else {

        }

    }


    // const { values, captureInput, submitForm, isLoading, error, message} = useFormWallet();

    return (
        <div className="WrapOrderList">
            <strong>
                Wallet Address:
            </strong>
            <div className="orderList">
                    {
                        isLoadingDataAccount === false ? (
                            Number(WalletAddress) > 0 ? (
                                <div className="tableList yes">
                                    <Wallet items={Number(WalletAddress)} data={dataAccount} />
                                </div>
                            ) : (
                                <div className="tableList no"><div>No Address</div></div>
                            )
                        ) : (<div className="tableList no"><div>Loading ...</div></div>)
                    }
            </div>

            <div
                // onSubmit={submitForm}
            >
                <div className="d-flex justify-content-end">
                    <span onClick={()=>walletAdd()} className="btn">+ Add new WALLET address</span>
                </div>
                <div  className="orderList" style={{marginTop: `1.5rem`}}>
                    <div className="tableList yes" style={{minHeight: `0`}}>
                        <div className="tableListItem">
                            <div className="row">
                                <div className="col-auto WrapInputFirst">
                                    <div className="WrapInput">
                                        <input
                                            disabled={isLoadingWaled}
                                            name="currency"
                                            // value={values.currency}
                                            id="currency"
                                            type="text"
                                            placeholder="Currency"
                                        />
                                    </div>

                                </div>
                                <div className="col WrapInputLast">
                                    <div className="WrapInput">
                                        <input
                                            id="wallet"
                                            disabled={isLoadingWaled}
                                            name="wallet"
                                            // value={values.wallet}
                                            type="text"
                                            placeholder="WALLET address"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default WrapWallet;