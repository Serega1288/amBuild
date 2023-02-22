import React from 'react';
import Layout from "../../components/Layout"
import {AuthLayout} from "../../function/AuthLayout"
import WrapAccount from "../../components/account/WrapAccount"

const WrapSectionOrder = () => {
    return (
        <AuthLayout logIn={false} page='account' go='sign-in'>
            <Layout title="Account order" desc="desc">
                <WrapAccount content='Account order' />
            </Layout>
        </AuthLayout>
    );
};
export default WrapSectionOrder;