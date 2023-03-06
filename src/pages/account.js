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
    console.log('dPayList', dPayList )


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

                    <div className="WrapTimer">
                        <div className="row d-flex align-items-center">
                            <div className="col d-flex align-items-center">
                                <svg style={{marginRight: `1.5rem`}} width="18" height="21" viewBox="0 0 18 21" fill="none">
                                    <path d="M14.6176 4.968L16.0706 3.515L17.4846 4.929L16.0316 6.382C17.4673 8.17917 18.1605 10.4579 17.9687 12.7501C17.7768 15.0424 16.7146 17.1742 15.0001 18.7077C13.2856 20.2412 11.0489 21.0601 8.74956 20.9961C6.45018 20.9321 4.26258 19.9901 2.63604 18.3635C1.00951 16.737 0.0674995 14.5494 0.00348883 12.25C-0.0605218 9.95063 0.758322 7.71402 2.29185 5.99951C3.82538 4.285 5.95718 3.22275 8.24944 3.03092C10.5417 2.83909 12.8204 3.53223 14.6176 4.968ZM8.99957 19C9.91882 19 10.8291 18.8189 11.6784 18.4672C12.5276 18.1154 13.2993 17.5998 13.9493 16.9497C14.5993 16.2997 15.1149 15.5281 15.4667 14.6788C15.8185 13.8295 15.9996 12.9193 15.9996 12C15.9996 11.0807 15.8185 10.1705 15.4667 9.32122C15.1149 8.47194 14.5993 7.70026 13.9493 7.05025C13.2993 6.40024 12.5276 5.88463 11.6784 5.53284C10.8291 5.18106 9.91882 5 8.99957 5C7.14306 5 5.36258 5.7375 4.04982 7.05025C2.73707 8.36301 1.99957 10.1435 1.99957 12C1.99957 13.8565 2.73707 15.637 4.04982 16.9497C5.36258 18.2625 7.14306 19 8.99957 19ZM7.99957 7H9.99957V13H7.99957V7ZM4.99957 0H12.9996V2H4.99957V0Z" fill="black"/>
                                </svg>
                                <div className="text-2">
                                    Plans ends after:
                                </div>
                            </div>
                            <div className="col-auto">
                                <div style={{padding: `0`}} className="title">
                                    3d : 21h : 43m : 12s
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

