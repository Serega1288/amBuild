import {AuthLayout} from "../function/AuthLayout";
import Layout from "../components/Layout";
import BannerLite from "../components/constructor/banner/BannerLite";
// import {Link} from "gatsby";
import React from "react";

const PageOrder = () => {
    return (
        <AuthLayout logIn={false} page='sign-up' go='sign-in' triger="checkout" redirectGoLogIn='checkout' >
            <Layout customClass="section-pad-min d-flex" title='order'  desc='order'>
                <BannerLite title='checkout' item={{ item: '' , title: `Your order has been accepted.`, style: 'order' }} />
            </Layout>
        </AuthLayout>
    )
}
export default PageOrder;
