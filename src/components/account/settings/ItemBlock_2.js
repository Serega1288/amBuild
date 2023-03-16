import React, {useState} from 'react'
import useForm from "../../../function/useFormSetPass";
import EYE from "../../../styles/EyeStyle"

// !!!!!!!!!!! use-password-strength

const ItemBlock_2 = ({style}) => {
    const { values, captureInput, submitForm, isLoading, error, message} = useForm();

    const [pCurrent, setPCurrent] = useState(false);
    const [p_1, setp_1] = useState(false);
    const [p_2, setp_2] = useState(false);
    const ClickEye = (i) => {
        if (i === 'passCurrent') {
            setPCurrent(!pCurrent)
        }
        if (i === 'pass_1') {
            setp_1(!p_1)
        }
        if (i === 'pass_2') {
            setp_2(!p_2)
        }

        // console.log('ClickEye', i)
    }
    return (
        <div className="Wrap">
            <div className="title">
                Personal password
            </div>
            <form onSubmit={submitForm} className="styleFormNorm">
                <input type="garbage"
                       name="garbage"
                       disabled={isLoading}
                       value={values.garbage}
                       onChange={captureInput}
                    // isLoading={isLoading}
                       className="garbage"
                />

                <div className="row">
                    <div className="col-4">
                        <EYE className="WrapInput">
                            <label>
                                <strong>Current password</strong>
                            </label>
                            <div className="WrapPassword">
                                <span className={pCurrent && 'active'} onClick={()=>ClickEye('passCurrent')}></span>
                                <input type={pCurrent ? 'text' : 'password'}
                                       required="required"
                                       name="passwordCurrent"
                                       disabled={isLoading}
                                       value={values.passwordCurrent}
                                       onChange={captureInput}
                                       className="input"
                                />
                            </div>
                        </EYE>
                    </div>
                    <div className="col-4">
                        <EYE className="WrapInput">
                            <label>
                                <strong>New password</strong>
                            </label>
                            <div className="WrapPassword">
                                <span className={p_1 && 'active'} onClick={()=>ClickEye('pass_1')}></span>
                                <input type={p_1 ? 'text' : 'password'}
                                       required="required"
                                       name="password_1"
                                       disabled={isLoading}
                                       value={values.password_1}
                                       onChange={captureInput}
                                       className="input"
                                       minLength={6}
                                />
                            </div>
                        </EYE>
                    </div>
                    <div className="col-4">
                        <EYE className="WrapInput">
                            <label>
                                <strong>Confirm new password</strong>
                            </label>
                            <div className="WrapPassword">
                                <span className={p_2 && 'active'} onClick={()=>ClickEye('pass_2')}></span>
                                <input type={p_2 ? 'text' : 'password'}
                                       required="required"
                                       name="password_2"
                                       disabled={isLoading}
                                       value={values.password_2}
                                       onChange={captureInput}
                                       className="input"
                                       minLength={6}
                                />
                            </div>
                        </EYE>
                    </div>
                    <div className="col-4">
                        <div className="d-flex h100 align-items-end w100">
                            <div className="WrapInput mt-auto w100">
                                <button disabled={isLoading} type="submit" className="style-3 btn w100" style={{maxWidth: `100%`}}>
                                    {isLoading ? 'Send...' : 'Send'}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 d-flex align-items-end">
                        {
                            isLoading === false ? (
                                <h4 className={`WrapInput mt-auto w100 statusInfo massage ${ message?.status } `}>
                                    {message ? message?.result : ''}
                                </h4>
                            ) : ('')
                        }
                    </div>
                </div>
            </form>

        </div>
    )
}
export default ItemBlock_2;