import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout"
import {AuthLayout} from "../function/AuthLayout"
import WrapAccount from "../components/account/WrapAccount"
import IconInfo from "../function/IconInfo";
// import BTC from "../assets/img/pay/BTC.png"
// import BCH from "../assets/img/pay/BCH.png"
// import ETH from "../assets/img/pay/ETH.png"
// import USDT from "../assets/img/pay/USDT.png"
// import KDA from "../assets/img/pay/KDA.png"
// import {localStoreService} from "../function/hook";
import AccountData from "../function/accountData";
import WrapOrderList from "../components/account/dashboard/WrapOrderList";
import {graphql, Link, useStaticQuery} from "gatsby";
import {SwiperSlide} from "swiper/react";

const WrapSectionAccount = () => {

    const dataOption = useStaticQuery(graphql`
        {
            wp {
                themeGeneralSettings {
                    ACFoptionThemes {
                        assets {
                            assetsDetailsInfo
                            listOfAvailableCurrencies {
                                currency
                                exchangeRate
                                fieldGroupName
                                icon {
                                    localFile {
                                        publicURL
                                    }
                                }
                            }
                        }
                        hashrate {
                            hashrateDetailsInfo
                        }
                        totalAssets {
                            totalAssetsDetailsInfo
                        }
                    }
                }
            }
        }
    `);
    const dPayList = dataOption.wp.themeGeneralSettings.ACFoptionThemes;
    // console.log('dPayList', dPayList )


    const { dataAccountStatus, dataAccount, fetchDataAccount, isLoadingDataAccount } = AccountData();
    useEffect(() => {
        fetchDataAccount()
    }, []);

    // console.log('dataAccountStatus', dataAccount.result.id )



    return (
        <AuthLayout logIn={false} statusAccount={dataAccountStatus} page='account' go='sign-in'>
            {/*<AuthLayout logIn={false}   page='account' go='sign-in'>*/}
            <Layout title="Account dashboard" desc="desc">
                <WrapAccount status={dataAccountStatus}>
                {/*<WrapAccount>*/}

                    <div className="WrapTextTitle">
                        <div className="title">
                            <div  style={{marginBottom: `0.4rem`}} className="WrapIconInfo">
                                 <strong style={{marginRight: `0.9rem`}}>Total Assets</strong>
                                 <IconInfo  position="right" style="1" text={dPayList.totalAssets.totalAssetsDetailsInfo} />
                            </div>
                            <div className="text-2">
                                Approximately 0 BTC
                            </div>
                        </div>
                    </div>

                    <div className="WrapTextTitle">
                        <div className="title">
                            <div className="WrapIconInfo">
                                <strong style={{marginRight: `0.9rem`}}>Assets</strong>
                                <IconInfo  position="right" style="1" text={dPayList.assets.assetsDetailsInfo} />
                            </div>
                            <div className="text-2">
                                <div className="row align-items-center">
                                    <div className="col">
                                        Approximately 0 BTC
                                    </div>
                                    {/*<div className="col-auto">*/}
                                    {/*    <span style={{marginRight: `1.2rem`}} className="btn style-6">Details</span>*/}
                                    {/*    <span className="btn style-10">Deposit</span>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="PayList WrapAccountList style-2">
                        <div className="row">

                            {dPayList?.assets?.listOfAvailableCurrencies?.map( (item, index) => (
                                <div key={`dPayList-${index}`} className="col-6 col-sm-4 col-md-3">
                                    <div className="item d-flex flex-column">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                {/*<div className={`iCurrency ${item.currency}`}></div>*/}
                                                <img src={item.icon.localFile.publicURL} alt=""/>
                                            </div>
                                            <div className="col-auto">
                                                <div className="text-3">
                                                    <strong>{item.currency}</strong>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{margin: `1rem 0`}} className="text-1">
                                            <strong>0.00000000</strong>
                                        </div>
                                        <div style={{marginTop: `auto`}} className="text-2">
                                            $ 0
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className="title">
                        <div className="WrapIconInfo">
                            <strong style={{marginRight: `0.9rem`}}>Hashrate Plans</strong>
                            <IconInfo  position="right" style="1" text={dPayList.hashrate.hashrateDetailsInfo} />
                        </div>
                        <div className="text-2">
                            <div className="row align-items-center">
                                <div className="col">
                                    Approximately 0 BTC
                                </div>
                                <div className="col-auto">
                                    <Link to="/account/hashrate/" style={{marginRight: `1.2rem`}} className="btn style-6">Details</Link>
                                    <Link to='/shop/cloud-mining/' className="btn style-10">Buy</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <WrapOrderList />


                </WrapAccount>
            </Layout>
        </AuthLayout>
    );
};
export default WrapSectionAccount;

