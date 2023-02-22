import React from 'react';
import Layout from "../components/Layout"
import {AuthLayout} from "../function/AuthLayout"
import WrapAccount from "../components/account/WrapAccount"

const WrapSectionAccount = () => {
    return (
        <AuthLayout logIn={false} page='account' go='sign-in'>
            <Layout title="Account dashboard" desc="desc">
                <WrapAccount content='Account dashboard' />
            </Layout>
        </AuthLayout>
    );
};
export default WrapSectionAccount;

