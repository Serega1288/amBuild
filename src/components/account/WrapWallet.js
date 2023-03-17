import React, {useEffect, useState} from "react";
import {localStoreService} from "../../function/hook";
import Wallet from "./Wallet";
import AccountData from "../../function/accountData";

const WrapWallet = () => {

    const { dataAccountStatus, dataAccount, fetchDataAccount, isLoadingDataAccount } = AccountData();
    useEffect(() => {
        fetchDataAccount()
    }, []);



    const WalletAddress = isLoadingDataAccount === false && ( dataAccount?.result?.meta_data?.filter(element => element.key === 'wallet_address')?.slice(0, 1)[0].value )

    const walletAdd = () => {
      console.log('walletAdd', localStoreService.getLocal(process.env.LOCAL_TOKEN).name.split('ud=')[1] )

    }

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
            <div className="d-flex justify-content-end">
                <span onClick={()=>walletAdd()} className="btn">+ Add new WALLET address</span>
            </div>
        </div>
    )
}
export default WrapWallet;