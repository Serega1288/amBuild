import React, {useEffect, useState} from "react"
import Layout from "../components/Layout"
import useFormCode from "../function/userFormCode"
import styled from 'styled-components'
import {minCol, maxCol} from "../function/SizeCol"
import Bg from '../assets/img/gradient.jpg'
import {Link} from "gatsby"
import {AuthLayout} from "../function/AuthLayout"
import BlockFormSend from "../components/constructor/sign/BlockFormSend"
// import BtnResetCode from "../components/constructor/sign/BtnResetCode";

// import BlockFormSend from ''

const RegPage = () => {
    const d = new Date();
    const { values, captureInput, submitForm, isLoading, error, message} = useFormCode(d);
    const [timeSend, setTimeSend] = useState(0);
    const maxTime = 5;

    const SendCode = () => {
        setTimeSend(1)
        // setTimeout(function(){
        //
        // }, maxTime * 1000);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeSend(1)
        }, maxTime * 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Layout title="Sign Up" desc="desc">
            <Section className="pageLogin d-flex align-items-center">
                <div className="Login container">
                    <div className="box">
                        <h1 className="title">
                            Sign Up
                        </h1>
                        <BoxForm>
                            {/*{ typeof window !== 'undefined' && localStorage.getItem('user') }*/}
                            {
                                message?.result === '1_' ?
                                <>
                                    {/*<BtnResetCode event={()=>SendCode()} time={maxTime} />*/}
                                    {
                                        timeSend === 0 ?
                                            <>
                                                <span className="link-form sendcode anim">Sending next code in 5 seconds...</span>
                                            </>
                                            :
                                            <>
                                                <span className="link-form sendcode anim" onClick={()=>SendCode()}> &lt; Resend the code</span>
                                            </>
                                    }
                                    <BlockFormSend date={d} email={values.email}  />
                                </>
                                :
                                <>
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
                                        <button disabled={isLoading} type="submit" className="style-3 btn w100">
                                            { isLoading ? 'Wait send email...' :  'Send Code'  }
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
                                </>
                            }


                        </BoxForm>
                    </div>
                </div>
            </Section>
        </Layout>
    );
};
export default () => (
    <AuthLayout logIn={true} page='sign-up' go='account'>
        <RegPage />
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

const BoxForm = styled.div`
    //overflow: hidden;
    // &.sectionHeight {
    //     min-height: calc(100vh - 13.4rem);
    //     @media(max-width:${maxCol.sm}) {
    //         min-height: calc(100vh - 8.8rem);
    //     }
    // }
    // max-width: 75rem;
    // margin: auto;
      form {
        position: relative;
      }
     .statusInfo {
        margin: 2rem 0;
        position: absolute;
        top: 100%;
        display: none;
        padding: 1.5rem;
        width: 100%;
        font-size: 1.6rem;
        color: #fff;
        &.done {
            background: #1a0f07;
        }
        &.active {
            display: block;
        }
       &.error {
         background: darkred;
         color: #fff;
       }
     }

     // button {
     //    min-height: 6rem;
     //    width: 100%;
     //    display: block;
     //    max-width: calc(100% - 5rem*2);
     //    margin-left: auto;
     //    margin-right: auto;
     //    @media(max-width:${maxCol.sm}) {
     //        min-height: 5rem;
     //        max-width: 100%;
     //    }
     // }
     .Boxlink {
       margin-top: 1.6rem;
       font-weight: 400;
       font-size: 1.2rem;
       color: #fff;
       text-align: center;
       span {
         margin-right: 0.8rem;
       }
       a {
         color: #000000;
         &:hover {
           color: #fff;
         }
       }
     }
      .sendcode {
        margin-bottom: 1.6rem;
        cursor: pointer;
      }
     .link-form {
        color: #000000;
        margin-top: 1.6rem;
        //margin-bottom: 1.6rem;
        display: inline-block;
        text-decoration: none;
        position: relative;
        font-size: 1.6rem;
        //&:after {
        //    content: '';
        //    width: 100%;
        //    height: 1px;
        //    background: #000;
        //    margin-top: 1px;
        //    display: block;
        //}
        &:hover {
            color: #fff;
            //&:after {
            //    background: #fff;
            //}
        }
     }
     label {
        width: 100%;
        display: block;
        margin-bottom: 1.6rem;
     }
     input {
        padding: 0 3.2rem;
        border: 1px solid #FFFFFF;
        border-radius: 5rem;
        width: 100%;
        display: block;
        height: 5.6rem;
        font-size: 1.6rem;
       color: #fff;
       background-color: rgba(0,0,0,0);
        &.error {
            border-color: #A12A2E;
        }
        &::placeholder {
            color: #fff;
            font-weight: 400;
        }
     }
`
