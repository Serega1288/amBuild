import React from 'react';
import Layout from "../../components/Layout"
import {AuthLayout} from "../../function/AuthLayout"
import WrapAccount from "../../components/account/WrapAccount"
import IconInfo from "../../function/IconInfo";
import KDA from "../../assets/img/pay/KDA.png";

const WrapSectionHashrate = () => {
    return (
        <AuthLayout logIn={false} page='account' go='sign-in'>
            <Layout title="Account hashrate" desc="desc">
                <WrapAccount>

                    <div className="WrapTextTitle">
                        <div className="title">
                            <div className="WrapIconInfo">
                                <strong style={{marginRight: `0.9rem`}}>Hashrate Plans</strong>
                                <IconInfo  position="right" style="1" text="div div div div div div div" />
                            </div>
                            <div style={{padding: `0.8rem 0 0`}} className="title up">
                                $ 0
                            </div>
                            <div className="text-2">
                                <div className="row align-items-center">
                                    <div className="col">
                                        Approximately 0 BTC
                                    </div>
                                    <div className="col-auto">
                                        <span className="btn style-10">Purchase Hashrate</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="PayList WrapAccountList style-4">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="item d-flex flex-column">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <img src={KDA} alt=""/>
                                        </div>
                                        <div className="col-auto">
                                            <div className="text-3">
                                                <strong>BTC</strong>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-2 WrapItem">
                                        <div className="row">
                                            <div className="col">
                                                Latest Output:
                                            </div>
                                            <div className="col-auto">
                                                <strong>0 KDA</strong>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-2 WrapItem">
                                        <div className="row">
                                            <div className="col">
                                                Hashrate
                                            </div>
                                            <div className="col-auto">
                                                <strong>0 TH/s</strong>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-2 WrapItem">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 3V19H21V21H3V3H5ZM20.293 6.293L21.707 7.707L16 13.414L13 10.415L8.707 14.707L7.293 13.293L13 7.586L16 10.585L20.293 6.293V6.293Z" fill="black"/>
                                        </svg>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="title">
                        <div className="row d-flex align-items-center">
                            <div className="col">
                                <div className="text-3 d-flex align-items-center">
                                    <img style={{marginRight: `1rem`}} src={KDA} alt=""/>
                                    <strong>Hashrate list</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="orderList">
                        <div className="table">
                            <div className="row">
                                <div className="col">
                                    <div className="tableTitle">
                                        Hashrate Name
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="tableTitle">
                                        Status
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="tableTitle">
                                        Service Fee Remaining
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="tableTitle">
                                        Latest Output
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="tableTitle">
                                        Earnings
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tableList no">
                            <div>No Data</div>
                        </div>
                    </div>

                </WrapAccount>
            </Layout>
        </AuthLayout>
    );
};
export default WrapSectionHashrate;
