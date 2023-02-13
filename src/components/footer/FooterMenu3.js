import React, {useState} from 'react';
import {graphql, Link, useStaticQuery} from 'gatsby';
import useFormPop from "../../function/useFormPop";


const FooterMenu = () => {
    const Menu = useStaticQuery(graphql`
        query ($menu: WpMenuLocationEnum = FOOTER_3) {
            menuTitle: allWpMenu(filter: {locations: {eq: $menu}}) {
                nodes {
                    name
                }
            }
            menu: allWpMenuItem(filter: { locations: { eq: $menu }, parentId: {eq: null} }) {
                nodes {
                    id
                    label
                    path
                    childItems {
                        nodes {
                            id
                            label
                            path
                        }
                    }
                }
            }

        }
    `);
    const title = Menu.menuTitle.nodes[0].name;
    const menu = Menu.menu.nodes;

    const [popBox, setPopBox] = useState(false);

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

        // console.log('popBox', popBox)

    }


    const ArrField = {garbage: '', firstName: '', lastName: '', workEmail: '', busType: '', like: '', lang: '', textarea: ''  };
    const { values, captureInput, submitForm, isLoading, error, message, setMessage} = useFormPop(ArrField);

    return (
        <>
            <h3 className="title style-1">
                {title}
            </h3>
            <div className="box-menu box-menu-3">
                {/*<FooterMenuUL t="3" menu={menu} />*/}
                <ul className="ul-clear box-menu-ul">
                    {menu.map(item => (
                        <li key={item.id} className={ item.childItems && item.childItems.length > 0 ? 'parents' : '' } >
                            <Link to={item.path} >{item.label}</Link>
                            { item.childItems && item.childItems.length > 0 ? (
                                <>
                                    <ul className="submenu ul-clear">
                                        {item.childItems.map(li => (
                                            <li key={li.id}>
                                                <Link  to={li.path}>{li.label}</Link>
                                            </li>
                                        ) )}
                                    </ul>
                                </>
                            ) : null }
                        </li>
                    ))}
                    <li>
                        <span onClick={()=>Pop()} className="a">Contact Us</span>
                    </li>
                </ul>
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
                                   disabled={isLoading}
                                   value={values.garbage}
                                   onChange={captureInput}
                                // isLoading={isLoading}
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
                                            // isLoading={isLoading}
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
                                            // isLoading={isLoading}
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
                                    // isLoading={isLoading}
                                       placeholder="Work Email"
                                       className="input"
                                />
                            </div>

                            <div className="WrapInput">
                                <label>
                                    <strong>Your Business Type:</strong>
                                </label>
                                <input type="text"
                                       required="required"
                                       name="busType"
                                       disabled={isLoading}
                                       value={values.busType}
                                       onChange={captureInput}
                                    // isLoading={isLoading}
                                       placeholder="busType"
                                       className="input"
                                />
                            </div>

                            <div className="WrapInput">
                                <label>
                                    <strong>I Would Like to Enquire On:</strong>
                                    <p>You can pick more than 1</p>
                                </label>
                                <input type="text"
                                       required="required"
                                       name="like"
                                       disabled={isLoading}
                                       value={values.like}
                                       onChange={captureInput}
                                    // isLoading={isLoading}
                                       placeholder="like"
                                       className="input"
                                />
                            </div>

                            <div className="WrapInput">
                                <label>
                                    <strong>Preferred Language:</strong>
                                </label>
                                <input type="text"
                                       required="required"
                                       name="lang"
                                       disabled={isLoading}
                                       value={values.lang}
                                       onChange={captureInput}
                                    // isLoading={isLoading}
                                       placeholder="lang"
                                       className="input"
                                />
                            </div>

                            <div className="WrapInput">
                                {/*{ console.log('values.textarea', values.textarea.length) }*/}
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
                                    maxlength='1000'
                                    placeholder="Your text"
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
                            {console.log('message', message)}
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
                    </div>
                </div>
                <div onClick={()=>Pop()} className="shadow"></div>
            </div>
        </>
    )
};
export default FooterMenu;