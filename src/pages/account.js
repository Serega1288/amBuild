import React from 'react';
import Layout from "../components/Layout";
//import React, {useEffect} from 'react';
//import Layout from '../components/Layout';
import useForm from "../function/useFormLogin";
import styled from 'styled-components';
//import Title from '../components/constructor/Title'
import {minCol, maxCol} from "../function/SizeCol";
//import {Link, navigate} from "gatsby";
import Bg from '../assets/img/gradient.jpg';
import {Link} from "gatsby";
import {AuthLayout} from "../function/AuthLayout";
import {instanceAuthService} from "../function/auth";


const LoginAccount = () => {



    return (
        <Layout title="Account" desc="desc">
            <Section className="pageLogin d-flex align-items-center">
                <div className="Login container">
                    <div className="box">
                        <h1 className="title">
                            Account
                        </h1>

                        { typeof window !== 'undefined' && localStorage.getItem('name') }
                    </div>
                </div>
            </Section>
        </Layout>
    );
};
// export default LoginPage;
export default () => (
    <AuthLayout logIn={false} page='account' go='sign-in' >
        <LoginAccount />
    </AuthLayout>
);

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

