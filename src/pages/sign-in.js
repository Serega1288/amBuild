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
import { BoxForm, Section } from '../styles/formSign'
const LoginPage = () => {

    const RedirectPage = '/account/';

    const { values, captureInput, submitForm, isLoading, error, message} = useForm(RedirectPage);

    // useEffect(()=>{
    //     //message?.result[0] + message?.result[1] ? handleLogin() : ''
    //     console.log('instanceAuthService', message?.result[0], instanceAuthService.isLogined );
    // },[])

    return (
        <Layout title="Login" desc="desc">
            <Section className="pageLogin d-flex align-items-center">
                <div className="Login container">
                    <div className="box">
                        <h1 className="title">
                            Login
                        </h1>
                        <BoxForm>
                            {/*{ typeof window !== 'undefined' && localStorage.getItem('user') }*/}
                        <form onSubmit={submitForm}>

                            <input type="garbage"
                                   name="garbage"
                                   disabled={isLoading}
                                   value={values.garbage}
                                   onChange={captureInput}
                                   isLoading={isLoading}
                                   className="garbage"
                            />
                            <label>
                                <input type="email"
                                       required="required"
                                       name="email"
                                       disabled={isLoading}
                                       value={values.email}
                                       onChange={captureInput}
                                       isLoading={isLoading}
                                       placeholder="Your email address"
                                    //className={ message?.result === '03' ? ' error' : '' }
                                />
                            </label>
                            <label>
                                <input type="password"
                                       required="required"
                                       name="password"
                                       disabled={isLoading}
                                       value={values.password}
                                       onChange={captureInput}
                                       isLoading={isLoading}
                                       placeholder="Password"
                                    //className={ message?.result === '04' ? ' error' : '' }
                                />
                                <span className="text-right d-block">
                                    <Link className="link-form" to="/reset-pass/">Lost Password?</Link>
                                </span>

                            </label>
                            <button disabled={isLoading} type="submit" className="style-3 btn w100">
                                { isLoading ? 'Sign In...' :  'Sign In'  }
                            </button>
                            <div className="Boxlink">
                                <span>Don’t have an account?</span>
                                <Link to="/sign-up/">Sign Up</Link>
                            </div>
                            <h3 className={` statusInfo text-center 
                                ${error || message ?  ' active '  : ''}
                                ${error ?  ' error '  : ''}
                                ${
                                     message?.result === '01' || 
                                     message?.result === '02' ||
                                     message?.result === '03' || 
                                     message?.result?.status === 400 || 
                                     message?.result === '04' ?  'error'  : 'done'
                                }
                            `}>
                                    {error ?  error  : ''}
                                    {message ? message?.message  : ''}
                            </h3>
                        </form>
                        </BoxForm>
                    </div>
                </div>
            </Section>
        </Layout>
    );
};
// export default LoginPage;
export default () => (
    <AuthLayout logIn={true} page='sign-in' go='account'>
        <LoginPage />
    </AuthLayout>
);


