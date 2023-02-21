import React, {useState} from 'react'
import {AuthLayout} from "../function/AuthLayout"
import Layout from "../components/Layout"
import { BoxForm, Section } from '../styles/formSign'
import useFormCode from "../function/userFormCode"
import BlockFormResPassSend from "../components/constructor/sign/BlockFormResPassSend"
import {Link} from "gatsby"

const ResetPass = (props) => {
    // const isBrowser = typeof window !== "undefined"

    const maxTime = 20;
    const t = 'rest-pass';
    // const [d, setD] = useState( new Date() );
    const [d] = useState( new Date() );
    const [timeSend, setTimeSend] = useState(0);
    const { values, captureInput, submitForm, isLoading, error, message, setMessage} = useFormCode(d, t);

    const SendCode = () => {
        setTimeSend(1)
        setMessage(null)
        setTimeout(function(){
            setTimeSend(0)
        }, maxTime * 1000);
    }
    const location = props.location.search?.split('=');



    return (
        <AuthLayout logIn={true} page='reset-pass' go='account'>
            <Layout title="Reset password" desc="desc">
                <Section className="pageLogin d-flex align-items-center">
                    <div className="Login container">
                        <div className="box">
                            <h1 className="title">
                                Reset password
                            </h1>
                            <BoxForm>
                                {/*{ typeof window !== 'undefined' && localStorage.getItem('user') }*/}
                                {
                                    message?.result === '1_' ?
                                        <>
                                                <span className="link-form sendcode anim text-center"
                                                      style={{display: 'block'}} onClick={() => SendCode()}> &lt; Resend the code</span>
                                            <BlockFormResPassSend location={location} d={d} email={values.email}
                                                                  type={t}/>
                                        </>
                                        :
                                        <>
                                            <form onSubmit={submitForm}>

                                                <input type="garbage"
                                                       name="garbage"
                                                       disabled={isLoading}
                                                       value={values.garbage}
                                                       onChange={captureInput}
                                                    // isLoading={isLoading}
                                                       className="garbage"
                                                />
                                                <label>
                                                    <input type="email"
                                                           required="required"
                                                           name="email"
                                                           disabled={isLoading}
                                                           value={values.email}
                                                           onChange={captureInput}
                                                        // isLoading={isLoading}
                                                           placeholder="Your email address"
                                                        //className={ message?.result === '03' ? ' error' : '' }
                                                    />
                                                </label>
                                                {
                                                    timeSend === 0 ?
                                                        <button disabled={isLoading} type="submit"
                                                                className="style-3 btn w100">
                                                            {isLoading ? 'Wait send email...' : 'Send Code'}
                                                        </button>
                                                        :
                                                        <span disabled={isLoading} className="style-3 btn w100">
                                                        Resending the code in {maxTime} seconds...
                                                    </span>
                                                }

                                                <div className="Boxlink">
                                                    <span>Already have an account?</span>
                                                    <Link
                                                        to={`/sign-in/${location[0] === '?r' ? (`?r=` + location[1]) : ''}`}>Sign
                                                        In</Link>
                                                </div>
                                                <h3 className={` statusInfo text-center 
                                                ${error || message ? ' active ' : ''}
                                                ${error ? ' error ' : ''}
                                                ${
                                                        message?.result === '01' ||
                                                        message?.result === '02' ||
                                                        message?.result === '03' ||
                                                        message?.result?.status === 400 ||
                                                        message?.result === '04' ? 'error' : 'done'
                                                    }
                                                `}>
                                                    {error ? error : ''}
                                                    {message ? message?.message : ''}
                                                </h3>
                                            </form>
                                        </>
                                }
                            </BoxForm>
                        </div>
                    </div>
                </Section>
            </Layout>
        </AuthLayout>
    )
}
export default ResetPass;
// export default () => (
//     <AuthLayout logIn={true} page='reset-pass' go='account'>
//         <ResetPass />
//     </AuthLayout>
// );

