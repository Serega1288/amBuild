import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout"
import {AuthLayout} from "../../function/AuthLayout"
import WrapAccount from "../../components/account/WrapAccount"
import ListCoupon from "../../components/account/ListCoupon"


const WrapSectionCoupon = () => {

    const [data, setData] = useState([]);

    // const [dataAccount, setDataAccount] = useState([]);

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
        const d = await response.json();
        setData(d);

        // console.log('Сoupon >>>', data.result )
    };



    // const response = fetch(`${process.env.GATSBY_SERVERLESS_URL}/sendGetData`, {
    //     method: 'POST',
    //     headers: {
    //         'content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ get: `coupons`, type : `coupons` }),
    // });
    // const d = response.json();
    // setData(d);



    return (
        <AuthLayout logIn={false} page='account' go='sign-in'>
            <Layout title="Account coupon" desc="desc">
                <WrapAccount>
                    <div className="title">
                        Сoupon
                    </div>
                    <ListCoupon  listCoupon={data} />
                </WrapAccount>
            </Layout>
        </AuthLayout>
    );
};
export default WrapSectionCoupon;

