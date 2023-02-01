import React, {useState} from 'react'
import {maxCol} from "../../function/SizeCol"
import styled from 'styled-components'
import ImgSub from '../../assets/img/sub.png'
import { graphql, useStaticQuery, Link } from "gatsby"
import MenuTop from "./MenuTop"
import LoginSvg from '../../assets/img/svg/login.svg'
import LoginSignUp from '../../assets/img/svg/sign-up.svg'

import LoginSvgBlack from '../../assets/img/svg/login-black.svg'
import LoginSignUpBlack from '../../assets/img/svg/sign-up-black.svg'
import {instanceAuthService} from "../../function/auth";

const Header = ( props ) => {

    const data = useStaticQuery(graphql`
        {
            wp { 
                themeGeneralSettings {
                    ACFoptionThemes {
                        headerLogo {
                            localFile {
                                publicURL
                            }
                        }
                    }
                }
            }
        }
    `);

    const headerLogo = data.wp.themeGeneralSettings.ACFoptionThemes.headerLogo.localFile.publicURL;
    const [ first, firstOpen ] = useState(false);
    const [open, setOpen ] = useState(false);

    const clickHandler = () => {

        setOpen(!open)
        if (first === false) {
            firstOpen(!first)
        }

        if (open === false) {
            document.body.classList.add(
                'ovh',
            );
        }
        if (open === true) {
            document.body.classList.remove(
                'ovh',
            );
        }
    };

    const LogoutUser = () => {
        instanceAuthService.logout()
    }

    return (
        <>
            <WrapHeader className="d-flex align-items-center">
                <div className="container">
                    <div className="row box-navigate">
                        <div className="col-auto d-flex align-items-center z-in-1">
                            <Link className="a-style-clear logo a-style-clen " to='/'>
                                <img className="d-block" src={headerLogo} />
                            </Link>
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                            <div className={`boxMenuTop anim h100 ` + (open ? 'open' : '')}>
                                <MenuTop />
                            </div>
                        </div>

                        <div className="col-auto d-flex align-items-center justify-content-end z-in-1">

                            {/*{*/}
                            {/*    // console.log('instanceAuthService.isLogined()', instanceAuthService.isLogined())*/}
                            {/*}*/}

                            {
                                instanceAuthService.isLogined() ?
                                    <>
                                        <Link className="btn style-1 login" to="/account/">Account</Link>
                                        <span className="btn style-1 sign-up" onClick={()=>LogoutUser()}>Logout</span>
                                    </> :
                                    <>
                                        <Link className="btn style-1 login" to="/sign-in/">Login</Link>
                                        <Link className="btn style-1 sign-up" to="/sign-up/">Sign Up</Link>
                                    </>
                            }

                            <div className='d-inline-block d-xl-none menu-wrapper jsMenuOpen' onClick={clickHandler}>
                                <span className={'hamburger-menu jsMenuOpen' + (open ? ' open animate' : '')} ></span>
                            </div>
                        </div>




                    </div>
                </div>
            </WrapHeader>

        </>
    )
};

export default Header;


const bar_width = 3;
const bar_height = 0.2;
const bar_spacing = 0.9;
const m = 0.9;


 const WrapHeader = styled.header`
     border: 1px solid #000000;
     position: fixed;
     top:0;
     left:0;
     right: 0;
     z-index:100;
     background-color: #000;
     .box-navigate {
        min-height: 8rem;
     }
     @media (max-width:  ${maxCol.sm} ) {
        .sign-up, .login {
            background-repeat: no-repeat;
            background-position: center center;
            padding: 1.8rem !important;
            background-size: 55%;
            font-size: 0 !important; 
        }
        .sign-up {
            background-image: url(${LoginSvg});  
            &[aria-current="page"] {
                background-image: url(${LoginSvgBlack}); 
            }
        }
        .login {
            background-image: url(${LoginSignUp});
            &[aria-current="page"] {
                background-image: url(${LoginSignUpBlack});
            }
        }
     }
     
     @media (max-width:  ${maxCol.xl} ) {
        .boxMenuTop {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 100%;
            width: 100%;
            background-color: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            .menu {
               height: auto;
               text-align: center;
            }
            &.open {
               left: 0;
                width: 100%;
            }
            .ul-sub {
                opacity: 1;
                visibility: visible;
                top: calc(0% + 2rem);
            }
            .sub:hover {
                &:before {
                    transform: rotate(0deg);
                }
            }
            .menu.style-1 a {
                font-size: 2.5rem;
                line-height: 1.4;
                @media (max-width:  ${maxCol.sm} ) {
                    font-size: 2.5rem;
                }
            }
            li {
                margin-top: 2.5rem;
                margin-bottom: 2.5rem;
            }
        }
     }
     .ul-sub {
        transition: all 0.7s ease;
        position: absolute;
        top: calc(100% + 2rem);
        opacity:0;
        visibility: hidden;
        left: 0;
        /*min-width: calc(100% + 3.2rem * 2);*/
        background: #000;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        li {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
        @media (max-width:  ${maxCol.xl} ) {
            position: relative;
            padding-top: 0rem;
            padding-bottom: 0rem;
            li {
                padding-top: 0rem;
                padding-bottom: 0rem;
            }
        }
     }
 
     .menu-wrapper {
        margin-left: 2.8rem;
        @media(max-width:${maxCol.sm}) {
            margin-left: 2rem;
        }
        width: ${bar_width}rem;
        height: ${bar_height + bar_spacing * 2 }rem;
        @media (max-width:${maxCol.sm}) {
            width: ${bar_width*m}rem;
            height: ${ (bar_height + bar_spacing * 2 )*m }rem;  
        }
        cursor: pointer;
    }
    
    .hamburger-menu,
    .hamburger-menu:after,
    .hamburger-menu:before {
        width: ${bar_width}rem;
        height: ${bar_height}rem;
        @media (max-width:${maxCol.sm}) {
            width: ${bar_width*m}rem;
            height: ${bar_height*m}rem;  
        }
        border-radius: 0.8rem
    }
    
    .hamburger-menu {
        display:block;
        position: relative;
        transform: translateY(${bar_spacing}rem);
        @media (max-width:${maxCol.sm}) {
            transform: translateY(${bar_spacing*m}rem);
        }
        background: rgba(255, 255, 255, 1);
        transition: all 0ms 300ms;
      
      &.animate {
        background: rgba(255, 255, 255, 1);
      }
      &.open {
        background: rgba(0, 0, 0, 1);
      }
    }
    
    .hamburger-menu:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: ${bar_spacing}rem;
        @media (max-width:${maxCol.sm}) {
            bottom: ${bar_spacing*m}rem;
        }
        background: rgba(255, 255, 255, 1);
        transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    
    .hamburger-menu:after {
        content: "";
        position: absolute;
        left: 0;
        top: ${bar_spacing}rem;
        @media (max-width:${maxCol.sm}) {
            top: ${bar_spacing*m}rem;
        }
        background: rgba(255, 255, 255, 1);
        transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    
    .hamburger-menu.animate:after {
        top: 0;
        transform: rotate(45deg);
        transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);;
    }
     
    .hamburger-menu.animate:before {
        bottom: 0;
        transform: rotate(-45deg);
        transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);;
    } 
     
     
     .menu {
        &.style-1 {
            [aria-current="page"] {
                color: #00E7F7;
            }
            a {
                font-weight: 500;
                white-space: nowrap;
                font-size: 1.6rem;
                line-height: 2.4rem;
                position: relative;
                color: #fff;
                &:hover {
                    color: #00E7F7;
                }
            }
            li {
                display: flex;
                align-items: center;
                padding-left: 3.2rem;
                padding-right: 3.2rem;
                @media (max-width:  ${maxCol.xl} ) {
                   display: block;
                }
                &.sub {
                    position: relative;
                    & > a {
                        padding-right: 2.4rem;
                        &:before {
                            content: '';
                            display:block;
                            background-position: center center;
                            background-repeat: no-repeat;
                            background-image: url(${ImgSub});
                            position: absolute;
                            top: 0;
                            right: 0;
                            bottom: 0;
                            z-index: 1;
                            width: 1.4rem;
                            heightL 0.8rem;
                            transform: rotate(0deg);
                        }
                    }
                    &:hover {
                        & > a {
                            &:before {
                                transform: rotate(180deg);
                                @media (max-width:  ${maxCol.xl} ) {
                                   transform: rotate(0deg);
                                }
                            }
                        }
                        .ul-sub {
                            opacity: 1;
                            visibility: visible; 
                            top: 100%;
                            transition: all 0.3s ease;
                        }
                    }
                }
            }
        }
     }
`;

