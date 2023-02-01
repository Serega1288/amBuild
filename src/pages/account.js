import React from 'react';
import Layout from "../components/Layout";
import styled from 'styled-components';
import Bg from '../assets/img/gradient.jpg';
import {AuthLayout} from "../function/AuthLayout";


const LoginAccount = () => {



    return (
        <Layout title="Account" desc="desc">
            <Section className="pageLogin d-flex align-items-center">
                <div className="Login container">
                    <div className="box">
                        <h1 className="title">
                            Account
                        </h1>
                    </div>
                </div>
            </Section>
        </Layout>
    );
};
// export default LoginAccount;

const isBrowser = typeof window !== "undefined"
export default () => {
    if( isBrowser ) {
        return (
            <AuthLayout logIn={false} page='account' go='sign-in'>
                <LoginAccount/>
            </AuthLayout>
        )
    } else {
        return (
            <LoginAccount/>
        )
    }
};




const Section = styled.section`
  min-height: calc(100vh - 8rem);
  background-image: url(${Bg});
  background-size: cover;
  background-position: center top;
  .box {
    max-width: 36rem;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  .title {
    font-weight: 700;
    font-size: 6.4rem;
    line-height: 7.2rem;
    color: #FFFFFF;
    margin: 0 0 6rem;
  }
  
`;

