import React, {useEffect, useState} from 'react';
import {localStoreService} from "../../../function/hook";
import {format} from "date-fns";
import WrapСoupon from "../../../styles/WrapСoupon"
import moment from "moment-timezone";

const ListCoupon = ({list}) => {
    // console.log("listCoupon", list)

    const [dataAccount, setDataAccount] = useState([]);
    const [isLoadingDataAccount, isLoadingSetDataAccount] = useState(true);

    const fetchDataAccount = async () => {
        let ob = { get: `customers/${localStoreService.getLocal(process.env.LOCAL_TOKEN).name.split('ud=')[1]}`, type : `account` };
        const response = await fetch(`${process.env.GATSBY_SERVERLESS_URL}/sendGetData`, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(ob),
        });
        const d = await response.json();
        if (d) {
            d?.result?.meta_data?.forEach((element) => {
                if(element.key === 'active_coupon' ) {
                    // console.log('Account >>> for', element.value);
                    setDataAccount( Number(element.value) );
                }
            });
            isLoadingSetDataAccount(false)
        }

    };
    useEffect(() => {
        fetchDataAccount();
    }, []);

    const statusCoupon = async (coupons, setCoupons) => {
        // console.log('on click >>>', localStoreService.getLocal(process.env.LOCAL_TOKEN).name.split('ud=')[1] , coupons, setCoupons)
        let set = coupons;
        if (coupons === setCoupons) {
            set = 0
        }

        let ob = { set: set, ud: localStoreService.getLocal(process.env.LOCAL_TOKEN).name.split('ud=')[1], type : `setDataAccount` };
        const response = await fetch(`${process.env.GATSBY_SERVERLESS_URL}/sendGetData`, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(ob),
        });
        const d = await response.json();
        if (d) {
            setDataAccount( Number(d.result) );
            // localStoreService.saveLocal('CouponIDSave', Number(d.result) )
        }

        //

    }

    const expiryTime = moment.tz('America/New_York')


    const rules = (i) => {
        document.body.classList.add('ovh');
        document.getElementById('pop').classList.add('active');
        document.getElementById('boxForm').innerHTML=i;
    }

    return (
        <WrapСoupon>
            {
                isLoadingDataAccount == false ? (
                    list?.result?.map((item, index) => {
                        if ( expiryTime < new Date(item.date_expires) ) {
                            return (
                                <div key={`Сoupon-${index}`} className="BlockCoupon">
                                    <div className="row">
                                        <div className="col-5">
                                            <div className="CouponBlock pos h100 d-flex flex-column">
                                                <div className="CouponPrice">
                                                    ${item.amount}
                                                </div>
                                                <div style={{marginTop: `auto`}} className="CouponDetails">
                                                    Applicable over
                                                    <br/>
                                                    {item.minimum_amount}
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
                                                        <span onClick={()=>rules( item.description )} className="btn style-8">
                                                            Rules
                                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                <path
                                                                    d="M8.78068 5.33336L5.20468 1.75736L6.14735 0.814697L11.3327 6.00003L6.14735 11.1854L5.20468 10.2427L8.78068 6.6667H0.666016V5.33336H8.78068Z"
                                                                    fill="white"/>
                                                            </svg>
                                                        </span>

                                                        {/*<div className={`pop ${dataRules === index && 'active' }`}>*/}
                                                        {/*    <div className="exit"></div>*/}
                                                        {/*    <div className="block">*/}
                                                        {/*        {item.description}*/}
                                                        {/*    </div>*/}
                                                        {/*    <div className="shadow"></div>*/}
                                                        {/*</div>*/}

                                                    </div>
                                                </div>
                                                <p className="CouponID">ID: <strong>{item.code}</strong></p>

                                                <p className="CouponData">
                                                    Valid until: {format(new Date(item.date_expires_gmt), 'yyyy.MM.dd')}
                                                </p>

                                                <span
                                                    onClick={() => statusCoupon(item.id, dataAccount)}
                                                    style={{marginTop: `auto`}}
                                                    className={`btn style-9 w100 ${item.id === dataAccount ? 'active' : ''}`}>
                                                        {item.id === dataAccount ? 'Activated' : 'Activate'}
                                                </span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                ) : ('loadding ...')

            }
        </WrapСoupon>
    );
};
export default ListCoupon;

