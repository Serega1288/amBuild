import React from 'react';
import styled from 'styled-components';
import {maxCol, minCol} from "../../../function/SizeCol";
import {Link} from "gatsby";


const Section = styled.section` 
        .boxWrap { 
            max-width: 100rem;
            @media(min-width: ${minCol.sm}) {
                padding-bottom: 5rem;
            }
        }
        .Wrap1, .Wrap2, .Wrap3 {
            box-shadow: 3px 4px 12px rgba(0, 0, 0, 0.05), 0px 1px 8px rgba(0, 0, 0, 0.05), 6px 4px 18px rgba(0, 0, 0, 0.08);
            border-radius: 18px;
            background: #FFFFFF;
            color: #000;
            padding: 4rem 3rem;
            margin: 2rem 0; 
            @media(max-width: ${maxCol.sm}) {
                height: auto !important;
                .text { 
                    margin-top: 2rem;
                }
            }
        }
        .text {
            margin-top: auto;
        }
        .icon {
            width: 6rem;
            height: 6rem; 
            background-size: cover;
            margin-right: 2rem;
        }
        .Wrap1 {
            background: linear-gradient(180deg, #1D084B 0%, #8824B1 100%);
            border-radius: 18px;
            @media(min-width: ${minCol.sm}) {
                min-height: 44rem;
            }
            color: #fff;
            .icon { 
                margin-bottom: 2rem;
            }
            
            @media(max-width: ${maxCol.sm}) {
                height: auto !important;
                margin-bottom: 0;
                .title {
                    margin-bottom: 4rem;
                }
            }
            
            @media(min-width: ${minCol.sm}) {
                height: calc(100% + 2rem) !important;
            }
            .title {
                font-weight: 600;
                font-size: 4.8rem;
                @media(min-width: ${minCol.sm}) {
                    max-width: 32rem;
                }
            }
            .text {
                @media(min-width: ${minCol.sm}) {
                    max-width: 32rem;
                }
            }
        }
        .Wrap2 {
            
        }
        .Wrap3 {
        
        }
        .title {
            font-size: 3.2rem;
            font-weight: 600;
        }
        .block-title {
            font-weight: 500;
            font-size: 2.8rem;
        }
    `;

const HelpCenter = ( {item} ) => {
    //console.log('HelpCenter >>>', item )

    return (
        <Section className="section HelpCenter">
            <div className="container">
                <h2 className="block-title text" dangerouslySetInnerHTML={{__html: item.title}} />
                <div className="row boxWrap">
                    <div className="col-12 col-sm-6">
                        <Link to={item.url1} className="h100 Wrap Wrap1 d-flex flex-column">
                            <div className="icon" style={{backgroundImage: `url(${item.icon1.localFile.publicURL})` }} />
                            <div className="title" dangerouslySetInnerHTML={{__html: item.title1}} />
                            <div className="text" dangerouslySetInnerHTML={{__html: item.text1}} />
                        </Link>
                    </div>
                    <div className="col-12 col-sm-6">
                        <Link to={item.url2} className="h50 Wrap Wrap2 d-flex flex-column">
                            <div className="row">
                                <div className="col-auto">
                                    <div className="icon" style={{backgroundImage: `url(${item.icon2.localFile.publicURL})` }} />
                                </div>
                                <div className="col d-flex align-items-center">
                                    <div className="title" dangerouslySetInnerHTML={{__html: item.title2}} />
                                </div>
                            </div>
                            <div className="text" dangerouslySetInnerHTML={{__html: item.text2}} />
                        </Link>
                        <Link to={item.url3} className="h50 Wrap Wrap3 d-flex flex-column">
                            <div className="row">
                                <div className="col-auto">
                                    <div className="icon" style={{backgroundImage: `url(${item.icon3.localFile.publicURL})` }} />
                                </div>
                                <div className="col d-flex align-items-center">
                                    <div className="title" dangerouslySetInnerHTML={{__html: item.title3}} />
                                </div>
                            </div>
                            <div className="text" dangerouslySetInnerHTML={{__html: item.text3}} />
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    )
};
export default HelpCenter;

