import React from 'react';
import Layout from "../../components/Layout"
import {AuthLayout} from "../../function/AuthLayout"
import WrapAccount from "../../components/account/WrapAccount"

const WrapSectionSettings = () => {
    return (
        <AuthLayout logIn={false} page='account' go='sign-in'>
            <Layout title="Account settings" desc="desc">
                <WrapAccount content='Account settings' />
            </Layout>
        </AuthLayout>
    );
};
export default WrapSectionSettings;

