import React, {useState} from 'react';
import styled from "styled-components";
import IconMan from './../../assets/img/svg/men.svg'
import {maxCol} from "../../function/SizeCol";
import useFormPop from "../../function/useFormPop";

const CliendSend = () => {

    const [popBox, setPopBox] = useState(false);
    const [popBoxThanks, setPopBoxThanks] = useState(false);

    const PopThanks = () => {
        setPopBoxThanks(!popBoxThanks)
        if (popBoxThanks === false) {
            document.body.classList.add(
                'ovh',
            );
        }
        if (popBoxThanks === true) {
            document.body.classList.remove(
                'ovh',
            );
        }
    }

    const Pop = () => {
        setPopBox(!popBox)
        if (popBox === false) {
            document.body.classList.add(
                'ovh',
            );
        }
        if (popBox === true) {
            document.body.classList.remove(
                'ovh',
            );
        }
    }

    const ArrField = {garbage: '', firstName: '', lastName: '', workEmail: '', textarea: ''  };
    const { values, captureInput, submitForm, isLoading, error, message, setMessage} = useFormPop(ArrField, setPopBox, setPopBoxThanks);

    return (
        <Block>

            <div className={`pop anim PopThanks ${popBoxThanks ? 'active' : '' }`}>
                <div className="boxForm">
                    <span onClick={()=>PopThanks()} className="exit">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M6.99974 5.58599L11.9497 0.635986L13.3637 2.04999L8.41374 6.99999L13.3637 11.95L11.9497 13.364L6.99974 8.41399L2.04974 13.364L0.635742 11.95L5.58574 6.99999L0.635742 2.04999L2.04974 0.635986L6.99974 5.58599Z" fill="black"/>
                        </svg>
                    </span>
                    <div className="title">
                        Your message has been sent. <br />
                        We will contact you shortly. 2
                    </div>
                </div>
                <div onClick={()=>PopThanks()} className="shadow"></div>
            </div>

            <div className={`pop anim ${popBox ? 'active' : '' }`}>
                <div className="boxForm">
                    <span onClick={()=>Pop()} className="exit">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M6.99974 5.58599L11.9497 0.635986L13.3637 2.04999L8.41374 6.99999L13.3637 11.95L11.9497 13.364L6.99974 8.41399L2.04974 13.364L0.635742 11.95L5.58574 6.99999L0.635742 2.04999L2.04974 0.635986L6.99974 5.58599Z" fill="black"/>
                        </svg>
                    </span>
                    <div className="title">Contact Us</div>
                    <div className="WrapForm">
                        <form className="input styleFormNorm" onSubmit={submitForm}>
                            <input type="garbage"
                                   name="garbage"
                                   autoComplete="off"
                                   disabled={isLoading}
                                   value={values.garbage}
                                   onChange={captureInput}
                                   className="garbage"
                            />
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <div className="WrapInput">
                                        <input type="name"
                                               required="required"
                                               name="firstName"
                                               disabled={isLoading}
                                               value={values.firstName}
                                               onChange={captureInput}
                                               placeholder="First name"
                                               className="input"
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="WrapInput">
                                        <input type="text"
                                               required="required"
                                               name="lastName"
                                               disabled={isLoading}
                                               value={values.lastName}
                                               onChange={captureInput}
                                               placeholder="Last name"
                                               className="input"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="WrapInput">
                                <input type="text"
                                       required="required"
                                       name="workEmail"
                                       disabled={isLoading}
                                       value={values.workEmail}
                                       onChange={captureInput}
                                       placeholder="Work Email"
                                       className="input"
                                />
                            </div>
                            <div className="WrapInput">
                                <label>
                                    <div className="row">
                                        <div className="col">
                                            <strong>Message:</strong>
                                        </div>
                                        <div className="col-auto">
                                            <span className={`${values?.textarea?.length > 1000 ? 'maxTextError' : null }`}>
                                                {values?.textarea?.length}/1000
                                            </span>
                                        </div>
                                    </div>
                                </label>
                                <textarea
                                    maxLength='1000'
                                    placeholder="Your text"
                                    required="required"
                                    name="textarea"
                                    disabled={isLoading}
                                    value={values.textarea}
                                    onChange={captureInput}
                                    className="input"
                                />
                            </div>

                            <div className="text-right">
                                <button disabled={isLoading} type="submit"
                                        className="style-3 btn w100">
                                    {isLoading ? 'Submit...' : 'Submit'}
                                </button>
                            </div>
                            {/*{console.log('message', message)}*/}
                            {/*<h3 className={` statusInfo text-center */}
                            {/*    ${error || message ? ' active ' : ''}*/}
                            {/*    ${error ? ' error ' : ''} */}
                            {/*    */}
                            {/*    ${*/}
                            {/*    message?.result === '01' ||*/}
                            {/*    message?.result === '02' ||*/}
                            {/*    message?.result === '03' || */}
                            {/*    message?.result?.status === 400 ||*/}
                            {/*    message?.result === '04' ? 'error' : 'done'*/}
                            {/*    }*/}
                            {/*    `}>*/}
                            {/*    {error ? error : ''}*/}
                            {/*    {message ? message?.message : ''}*/}
                            {/*</h3>*/}

                        </form>
                    </div>
                </div>
                <div onClick={()=>Pop()} className="shadow"></div>
            </div>

            <div className="Box">
                <div className='icon'>
                    <img src={IconMan} alt=""/>
                </div>
                <h1 className="title">
                    Not finding what you are looking for?
                </h1>
                <div className="WrapBtn">
                        <span className="btn style-5">
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0H12C14.1217 0 16.1566 0.842855 17.6569 2.34315C19.1571 3.84344 20 5.87827 20 8C20 10.1217 19.1571 12.1566 17.6569 13.6569C16.1566 15.1571 14.1217 16 12 16V19.5C7 17.5 0 14.5 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0ZM10 14H12C12.7879 14 13.5681 13.8448 14.2961 13.5433C15.0241 13.2417 15.6855 12.7998 16.2426 12.2426C16.7998 11.6855 17.2417 11.0241 17.5433 10.2961C17.8448 9.56815 18 8.78793 18 8C18 7.21207 17.8448 6.43185 17.5433 5.7039C17.2417 4.97595 16.7998 4.31451 16.2426 3.75736C15.6855 3.20021 15.0241 2.75825 14.2961 2.45672C13.5681 2.15519 12.7879 2 12 2H8C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 11.61 4.462 13.966 10 16.48V14Z" fill="black"/>
                        </svg>
                        <strong>Chat with us</strong>
                    </span>
                </div>
                <div className="WrapBtn">

                    <span onClick={()=>Pop()} className="btn style-5">
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM18 4.238L10.072 11.338L2 4.216V16H18V4.238ZM2.511 2L10.061 8.662L17.502 2H2.511Z" fill="black"/>
                        </svg>
                        <strong>Send us an email</strong>
                    </span>
                </div>
            </div>
        </Block>
    )
}
export default CliendSend;

const Block = styled.div`
  padding-bottom: 12rem;
  padding-top: 3rem;
  .WrapBtn {
    margin-bottom: 1.6rem;
  }
  .Box {
    background: #FFFFFF;
    box-shadow: 3px 4px 12px rgba(0, 0, 0, 0.05), 0px 1px 8px rgba(0, 0, 0, 0.05), 6px 4px 18px rgba(0, 0, 0, 0.08);
    border-radius: 1.8rem;
    padding: 4rem 3rem;
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
    @media(max-width: ${maxCol.sm}) {
      margin-left: 2rem; 
      margin-right: 2rem;
    }
  }
  .title {
    font-weight: 600;
    font-size: 4.8rem;
    margin-top: 2rem;
    margin-bottom: 4.4rem;
    line-height: 5.6rem;
    
  }
  
`