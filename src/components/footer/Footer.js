import React, {useState} from 'react'
import styled from 'styled-components'
import {graphql, Link, useStaticQuery} from "gatsby";

import FooterMenu1 from './FooterMenu1';
import FooterMenu2 from './FooterMenu2';
import FooterMenu3 from './FooterMenu3';
import FooterMenu4 from './FooterMenu4';
import {maxCol} from "../../function/SizeCol";

const Footer = () => {

    const data = useStaticQuery(graphql`
        {
            wp {
                themeGeneralSettings {
                    ACFoptionThemes {
                        footerLogo {
                            localFile {
                                publicURL
                            }
                        }
                        footerDescription
                        footercopyright
                    }
                }
            } 
        }
    `);

    const {footerLogo, footerDescription, footercopyright} = data.wp.themeGeneralSettings.ACFoptionThemes;
    const [ first, firstOpen ] = useState(false);
    const [open, setOpen ] = useState(false);

    //console.log('>>', data.wp.themeGeneralSettings.ACFoptionThemes)

    const popOFF = () => {
        document.body.classList.remove('ovh');
        document.getElementById('pop').classList.remove('active');
    }

    return (
        <>
            <WrapFooter>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-7 col-lg-6 col-xl-8">
                            <Link className="a-style-clear logo a-style-clen " to='/'>
                                <img className="footerLogo" src={footerLogo.localFile.publicURL} />
                            </Link>
                            <div className="desc" dangerouslySetInnerHTML={{__html: footerDescription}} />
                        </div>
                        <div className="col-sm-6 col-md-5 col-lg-6 col-xl-4">
                            <div className="row">
                                <div className="col-6 col-sm">
                                    <FooterMenu1 />
                                </div>
                                <div className="col-6 col-sm">
                                    <FooterMenu2 />
                                </div>
                                <div className="col-12 col-sm-auto">
                                    <FooterMenu3 />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="box-row"></div>
                        </div>
                        <div className="col-12 col-sm">
                            <div className="copyright" dangerouslySetInnerHTML={{__html: footercopyright}} />
                        </div>
                        <div className="col-12 col-sm-auto">
                            <FooterMenu4 />
                        </div>
                    </div>
                </div>
            </WrapFooter>

            <div id="pop" className="pop anim">
                <div className="boxForm style-2">
                    <span onClick={()=>popOFF()} className="exit"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path
                        d="M6.99974 5.58599L11.9497 0.635986L13.3637 2.04999L8.41374 6.99999L13.3637 11.95L11.9497 13.364L6.99974 8.41399L2.04974 13.364L0.635742 11.95L5.58574 6.99999L0.635742 2.04999L2.04974 0.635986L6.99974 5.58599Z"
                        fill="black"></path></svg>
                    </span>
                    <div id="boxForm">
                        null
                    </div>
                </div>
                <div onClick={()=>popOFF()} className="shadow" />
            </div>
        </>

    )
};

export default Footer;

const WrapFooter = styled.footer`
    background-color: #000;
    padding-top: 6rem;
    padding-bottom: 3rem;
    color: #fff; 
    @media (max-width: ${maxCol.sm}) {
        text-align: center;
        padding-top: 3rem;
    }
    [aria-current="page"] {
        color: #00E7F7;
    }
    .desc {
        font-size: 2.4rem;
        line-height: 3.2rem;
        background: linear-gradient(180deg, #00E7F7 0%, #D36BF8 0.01%, #862DCD 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        margin-bottom: 10rem;
        @media (max-width: ${maxCol.sm}) { 
            margin-bottom: 5rem;
        }
    }
    a {
        color: #fff;
    }
    .footerLogo {
        margin-bottom: 5rem;
        @media (max-width: ${maxCol.sm}) { 
            margin-bottom: 2.5rem;
        }
        
    }
    .title.style-1 {
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.8rem; 
        margin-bottom: 2.4rem;
        margin-top: 0;
    }
    .box-menu-ul {
        li {
            padding-bottom: 1.2rem;
        }
        a, .a {
            font-size: 1.6rem;
            line-height: 2.4rem;
            white-space: nowrap;
            cursor: pointer;
        }
        .a:hover {
          color: #6357FF;
        }
    }
    .box-row {
        border-top: 1px solid #262626;
        padding-top: 2.3rem;
    }
    .box-menu {
        margin-bottom: 4rem;
    }
    
    .box-menu-4 .box-menu-ul {
        @media (max-width: ${maxCol.sm}) { 
            justify-content: center;
        }
        display: flex;
        li {
            margin-left: 3rem;
            @media (max-width: ${maxCol.sm}) { 
                margin-left: 2rem;
                margin-right: 2rem;
            }
        }
    }
    .copyright {
        color: #585858;
        font-size: 12px;
        line-height: 20px;
        a {
          color: #6357ff;
        }
    }
    
`;