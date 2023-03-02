import React, {useEffect, useState} from 'react';
import {localStoreService} from "../../function/hook";
import {format} from "date-fns";
import WrapСoupon from "../../styles/WrapСoupon"

const ListCoupon = ({listCoupon}) => {
    // console.log("listCoupon", listCoupon)
    const [dataAccount, setDataAccount] = useState([]);

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
        d?.result?.meta_data?.forEach((element) => {
            if(element.key === 'active_coupon' ) {
                console.log('Account >>> for', element.value);
                setDataAccount( Number(element.value) );
            }
        });
    };
    useEffect(() => {
        fetchDataAccount();
    }, []);

    const statusCoupon = async (coupons, setCoupons) => {
        console.log('on click >>>', localStoreService.getLocal(process.env.LOCAL_TOKEN).name.split('ud=')[1] , coupons, setCoupons)
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
        setDataAccount( Number(d.result) );

        console.log('Сoupon >>>', d.result )


    }

    return (
        <WrapСoupon>
            {
                listCoupon?.result?.map((item, index) => (
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

                                    <span
                                        onClick={()=>statusCoupon(item.id, dataAccount)}
                                        style={{marginTop: `auto`}} className={`btn style-9 w100 ${ item.id === dataAccount ? 'active' : '' }`}>
                                                        { item.id === dataAccount ? 'Activated' : 'Activate' }
                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </WrapСoupon>
    );
};
export default ListCoupon;

