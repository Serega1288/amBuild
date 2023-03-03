import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout"
import {AuthLayout} from "../../function/AuthLayout"
import WrapAccount from "../../components/account/WrapAccount"
import ListCoupon from "../../components/account/ListCoupon"
import AccountData from "../../function/accountData";


const WrapSectionCoupon = () => {

    const [data, setData] = useState([]);
    const [isLoadingData, setIsLoadingData] = useState(true);
    const { dataAccountStatus, dataAccount, fetchDataAccount } = AccountData();


    // const [dataAccount, setDataAccount] = useState([]);

    useEffect(() => {
        fetchDataAccount()
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
        if (d) {
            setData(d);
            setIsLoadingData(false)
            console.log('d >>>', d )
        }



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
    // setData(d); dsd



    return (
        <AuthLayout logIn={false} statusAccount={dataAccountStatus} page='account/coupon' go='sign-in'>
            <Layout title="Account coupon" desc="desc">
                <WrapAccount status={dataAccountStatus}>
                    <div className="title">
                        Сoupon
                    </div>

                    {
                        isLoadingData === false ? (
                            <ListCoupon  list={data} />
                        ) : (
                            'loading...'
                        )
                    }

                </WrapAccount>
            </Layout>
        </AuthLayout>
    );
};
export default WrapSectionCoupon;

