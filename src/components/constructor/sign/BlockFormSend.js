import React from "react"
import {Link} from "gatsby"
import useFormReg from "../../../function/useFormReg"

const BlockFormSend = (date, email) => {
    const { values, captureInput, submitForm, isLoading, error, message} = useFormReg(date, email);
    return (
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
                <input type="text"
                       required="required"
                       name="code"
                       disabled={isLoading}
                       value={values.code}
                       onChange={captureInput}
                       isLoading={isLoading}
                       placeholder="Your code"
                    //className={ message?.result === '03' ? ' error' : '' }
                />
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
    )
}
export default BlockFormSend;