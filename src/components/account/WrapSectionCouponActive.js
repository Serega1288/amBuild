import React, {useEffect, useState} from 'react'
import SectionCouponActive from "../../components/account/SectionCouponActive"
// import {localStoreService} from "../../function/hook";


const WrapSectionCouponActive = ({data}) => {
    console.log('WrapSectionCouponActive', data)

    const [dataCouponActive, setDataCouponActive] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let ob = { get: `coupons`, type : `getCouponsForID`, ud: data };
        const response = await fetch(`${process.env.GATSBY_SERVERLESS_URL}/sendGetData`, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(ob),
        });
        const d = await response.json();
        setDataCouponActive( d.result );

        console.log('setDataCouponActive >>> 11111111', d.result )
    };

    return (
        <>
            {
                dataCouponActive?.id ? (
                    <div className="blocks itemOrder">
                        <div className="title">
                            Active coupon
                        </div>

                        <div className="WrapСoupon">
                            <SectionCouponActive data={dataCouponActive} />
                        </div>
                    </div>
                ) : ('')
            }
        </>
    )
}
export default WrapSectionCouponActive;