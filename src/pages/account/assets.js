import React from 'react';
import Layout from "../../components/Layout"
import {AuthLayout} from "../../function/AuthLayout"
import WrapAccount from "../../components/account/WrapAccount"
import IconInfo from "../../function/IconInfo";
import LogoLite from "../../assets/img/svg/logo-lite.svg"
import BCH from "../../assets/img/pay/BCH.png"

const WrapSectionAssets = () => {
    return (
        <AuthLayout logIn={false} page='account' go='sign-in'>
            <Layout title="Account assets" desc="desc">
                <WrapAccount>
                    <div className="WrapTextTitle orderList ">

                        <div className="title">

                            <div className="row">
                                <div className="col">
                                    <div className="WrapIconInfo">
                                        <strong style={{marginRight: `0.9rem`}}>Assets Estimate</strong>
                                        <IconInfo  position="right" style="1" text="div div div div div div div" />
                                    </div>
                                    <div style={{padding: `0.8rem 0 0`}} className="title up">
                                        $ 0
                                    </div>
                                    <div className="text-2">
                                        Approximately 0 BTC
                                    </div>
                                </div>

                                <div className="col-auto d-flex align-items-end flex-column">
                                    <div className="text-2">
                                        <div className="row">
                                            <div className="col">
                                                <div style={{maxWidth: `12.4rem`}}>
                                                    Walet service is suppordet by
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <img src={LogoLite} alt=""/>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{marginTop: `auto`}}>
                                        <span style={{marginRight: `1.2rem`}} className="btn style-6">Address Management</span>
                                        <span className="btn style-10">History</span>
                                    </div>

                                </div>
                            </div>


                        </div>

                        <div className="WrapOrderDelails">
                            <div className="WrapScrollTable">
                                <div style={{minWidth: `95rem`}} className="table">
                                    <div className="row">
                                        <div className="col">
                                            <div style={{width: `15rem`}} className="tableTitle">
                                                Service/Product
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div style={{width: `12rem`}} className="tableTitle">
                                                Total
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div style={{width: `12rem`}} className="tableTitle">
                                                Available
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div style={{width: `13rem`}} className="tableTitle">
                                                On Hold
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="WrapList-result-1">
                                    <div style={{minWidth: `95rem`}} className="table list-result-1">
                                        <div className="row">
                                            <div className="col d-flex align-items-center">
                                                <div  style={{width: `15rem`}} className="tableTitle d-flex align-items-center">
                                                    <img style={{marginRight: `1rem`}} src={BCH} alt=""/>
                                                    <span className="text-3"><strong>BTC</strong></span>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div style={{width: `12rem`}} className="tableTitle">
                                                    <div style={{marginBottom: `0.6rem`}}>
                                                        0.00000000
                                                    </div>
                                                    <div className="text-2">
                                                        = $ 0.00
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div style={{width: `12rem`}} className="tableTitle">
                                                    0.00000000
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <div style={{width: `13rem`}} className="tableTitle">
                                                    0.00000000
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{minWidth: `95rem`}} className="table list-result-1">
                                        <div className="row">
                                            <div className="col d-flex align-items-center">
                                                <div  style={{width: `15rem`}} className="tableTitle d-flex align-items-center">
                                                    <img style={{marginRight: `1rem`}} src={BCH} alt=""/>
                                                    <span className="text-3"><strong>BTC</strong></span>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div style={{width: `12rem`}} className="tableTitle">
                                                    <div style={{marginBottom: `0.6rem`}}>
                                                        0.00000000
                                                    </div>
                                                    <div className="text-2">
                                                        = $ 0.00
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div style={{width: `12rem`}} className="tableTitle">
                                                    0.00000000
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <div style={{width: `13rem`}} className="tableTitle">
                                                    0.00000000
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{minWidth: `95rem`}} className="table list-result-1">
                                        <div className="row">
                                            <div className="col d-flex align-items-center">
                                                <div  style={{width: `15rem`}} className="tableTitle d-flex align-items-center">
                                                    <img style={{marginRight: `1rem`}} src={BCH} alt=""/>
                                                    <span className="text-3"><strong>BTC</strong></span>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div style={{width: `12rem`}} className="tableTitle">
                                                    <div style={{marginBottom: `0.6rem`}}>
                                                        0.00000000
                                                    </div>
                                                    <div className="text-2">
                                                        = $ 0.00
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div style={{width: `12rem`}} className="tableTitle">
                                                    0.00000000
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <div style={{width: `13rem`}} className="tableTitle">
                                                    0.00000000
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </WrapAccount>
            </Layout>
        </AuthLayout>
    );
};
export default WrapSectionAssets;