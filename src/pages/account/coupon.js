import React from 'react';
import Layout from "../../components/Layout"
import {AuthLayout} from "../../function/AuthLayout"
import WrapAccount from "../../components/account/WrapAccount"

const WrapSectionCoupon = () => {
    return (
        <AuthLayout logIn={false} page='account' go='sign-in'>
            <Layout title="Account coupon" desc="desc">
                <WrapAccount content='Account coupon' />
            </Layout>
        </AuthLayout>
    );
};
export default WrapSectionCoupon;

