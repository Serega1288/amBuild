import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout"
import {AuthLayout} from "../../function/AuthLayout"
import WrapAccount from "../../components/account/WrapAccount"
import {localStoreService} from "../../function/hook";
import {format} from "date-fns";

const WrapSectionCoupon = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let ob = { get: `coupons`, type : `coupons` };
        const response = await fetch(`${process.env.GATSBY_SERVERLESS_URL}/sendGetData`, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(ob),
        });
        const data = await response.json();
        setData(data);

        console.log('Сoupon >>>', data.result )
    };

    return (
        <AuthLayout logIn={false} page='account' go='sign-in'>
            <Layout title="Account coupon" desc="desc">
                <WrapAccount>
                    <div className="title">
                        Сoupon
                    </div>

                    {
                        data?.result?.map((item, index) => (
                            <div key={`Сoupon-${index}`} className="BlockCoupon">
                                <div className="row">
                                    <div className="col-5">
                                        <div className="CouponBlock pos h100 d-flex flex-column">
                                            <div className="CouponPrice">
                                                ${item.amount}
                                            </div>
                                            <div style={{marginTop: `auto`}} className="CouponDetails">
                                                {item.description}
                                            </div>
                                            <div className="obTop"></div>
                                            <div className="obDots"></div>
                                            <div className="obBottom"></div>
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <div className="CouponBlock right pos">
                                            <div className="obCircl"></div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="CouponTitle">
                                                        Coupon
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                            <span className="btn style-8">
                                                Rules
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                    <path d="M8.78068 5.33336L5.20468 1.75736L6.14735 0.814697L11.3327 6.00003L6.14735 11.1854L5.20468 10.2427L8.78068 6.6667H0.666016V5.33336H8.78068Z" fill="white"/>
                                                </svg>
                                            </span>
                                                </div>
                                            </div>
                                            <p className="CouponID">ID: <strong>{item.code}</strong></p>

                                            <p className="CouponData">
                                                {format( new Date( item.date_expires_gmt ), 'yyyy.mm.dd')}
                                            </p>
                                            <span style={{marginTop: `auto`}} className="btn style-9 w100">
                                                Buy Now
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }



                    {/*<div className="BlockCoupon">*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col-5">*/}
                    {/*            <div className="CouponBlock pos h100 d-flex flex-column">*/}
                    {/*                <div className="CouponPrice">*/}
                    {/*                    $120*/}
                    {/*                </div>*/}
                    {/*                <div style={{marginTop: `auto`}} className="CouponDetails">*/}
                    {/*                    Applicable over <br />*/}
                    {/*                    $5000*/}
                    {/*                </div>*/}
                    {/*                <div className="obTop"></div>*/}
                    {/*                <div className="obDots"></div>*/}
                    {/*                <div className="obBottom"></div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-7">*/}
                    {/*            <div className="CouponBlock right pos">*/}
                    {/*                <div className="obCircl"></div>*/}
                    {/*                <div className="row">*/}
                    {/*                    <div className="col">*/}
                    {/*                        <div className="CouponTitle">*/}
                    {/*                            Coupon*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="col-auto">*/}
                    {/*                        <span className="btn style-8">*/}
                    {/*                            Rules*/}
                    {/*                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">*/}
                    {/*                                <path d="M8.78068 5.33336L5.20468 1.75736L6.14735 0.814697L11.3327 6.00003L6.14735 11.1854L5.20468 10.2427L8.78068 6.6667H0.666016V5.33336H8.78068Z" fill="white"/>*/}
                    {/*                            </svg>*/}
                    {/*                        </span>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <p className="CouponID">ID: <strong>34598792637</strong></p>*/}
                    {/*                <p className="CouponData">2022.11.01 - 2022.12.01</p>*/}
                    {/*                <span style={{marginTop: `auto`}} className="btn style-9 w100">*/}
                    {/*                    Buy Now*/}
                    {/*                </span>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="BlockCoupon">*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col-5">*/}
                    {/*            <div className="CouponBlock pos h100 d-flex flex-column">*/}
                    {/*                <div className="CouponPrice">*/}
                    {/*                    $120*/}
                    {/*                </div>*/}
                    {/*                <div style={{marginTop: `auto`}} className="CouponDetails">*/}
                    {/*                    Applicable over <br />*/}
                    {/*                    $5000*/}
                    {/*                </div>*/}
                    {/*                <div className="obTop"></div>*/}
                    {/*                <div className="obDots"></div>*/}
                    {/*                <div className="obBottom"></div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-7">*/}
                    {/*            <div className="CouponBlock right pos">*/}
                    {/*                <div className="obCircl"></div>*/}
                    {/*                <div className="row">*/}
                    {/*                    <div className="col">*/}
                    {/*                        <div className="CouponTitle">*/}
                    {/*                            Coupon*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="col-auto">*/}
                    {/*                        <span className="btn style-8">*/}
                    {/*                            Rules*/}
                    {/*                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">*/}
                    {/*                                <path d="M8.78068 5.33336L5.20468 1.75736L6.14735 0.814697L11.3327 6.00003L6.14735 11.1854L5.20468 10.2427L8.78068 6.6667H0.666016V5.33336H8.78068Z" fill="white"/>*/}
                    {/*                            </svg>*/}
                    {/*                        </span>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <p className="CouponID">ID: <strong>34598792637</strong></p>*/}
                    {/*                <p className="CouponData">2022.11.01 - 2022.12.01</p>*/}
                    {/*                <span style={{marginTop: `auto`}} className="btn style-9 w100">*/}
                    {/*                    Buy Now*/}
                    {/*                </span>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </WrapAccount>
            </Layout>
        </AuthLayout>
    );
};
export default WrapSectionCoupon;

