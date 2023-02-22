import React from 'react';
import Layout from "../../components/Layout"
import {AuthLayout} from "../../function/AuthLayout"
import WrapAccount from "../../components/account/WrapAccount"

const WrapSectionHashrate = () => {
    return (
        <AuthLayout logIn={false} page='account' go='sign-in'>
            <Layout title="Account hashrate" desc="desc">
                <WrapAccount content='Account hashrate' />
            </Layout>
        </AuthLayout>
    );
};
export default WrapSectionHashrate;
