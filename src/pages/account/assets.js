import React from 'react';
import Layout from "../../components/Layout"
import {AuthLayout} from "../../function/AuthLayout"
import WrapAccount from "../../components/account/WrapAccount"

const WrapSectionAssets = () => {
    return (
        <AuthLayout logIn={false} page='account' go='sign-in'>
            <Layout title="Account assets" desc="desc">
                <WrapAccount content='Account assets' />
            </Layout>
        </AuthLayout>
    );
};
export default WrapSectionAssets;