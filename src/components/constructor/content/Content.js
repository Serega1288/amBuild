import React from 'react';
import styled from "styled-components";
import {maxCol} from "../../../function/SizeCol";

const Content = ( { item } ) => {
    //console.log('Content block >>>', item);
    return (
        <Section className={`section editor style-${item.style}`}>
            <div className="container">
                {
                    item.style === 'normal' ?
                        <>
                            <h2 style={{ textAlign : item.alignhor}} className="title" dangerouslySetInnerHTML={{__html: item.title}} />
                            <div style={{ textAlign : item.alignhor}} className="text" dangerouslySetInnerHTML={{__html: item.text}} />
                        </>
                    : null
                }
                {
                    item.style === 'border1' ?
                        <>
                            <div style={{ textAlign : item.alignhor}} className="text" dangerouslySetInnerHTML={{__html: item.text}} />
                            <div className="line"></div>
                        </>
                        : null
                }
                {
                    item.style === 'border2' ?
                        <>
                            <div className="row">
                                <div className={`col-md-5  d-flex align-items-${item.alignver}`}>
                                    <h2 style={{ textAlign : item.alignhor}}
                                        className={`title ${item.titleSize}`}
                                        dangerouslySetInnerHTML={{__html: item.title}} />
                                </div>
                                <div className={`col-md-7 d-flex align-items-${item.alignver}`}>
                                    <div style={{ textAlign : item.alignhor}}
                                         className="text"
                                         dangerouslySetInnerHTML={{__html: item.text}} />
                                </div>
                            </div>
                            <div className="line"></div>
                        </>
                    : null
                }

            </div>
        </Section>
    )
}
export default Content;

const Section = styled.section`
    @media (max-width: ${maxCol.sm} ) {
       br {
          display: none;
       }
    }
    h2 {
        margin-top: 0;
        margin-bottom: 4rem;
    }
    .line {
        border-bottom: 1px solid #C0BFBF;
        padding-bottom: 10rem;
    }
    .style-normal {
        .title {
            font-size: 2.8rem;
            line-height: 3.6rem;
        }
        .text {
             p {
                padding-bottom: 2.4rem;
             }
        }
    }
    &.style-border1, &.style-border2 {
        
    }
    &.style-border1 {
        .text {
            max-width: 90rem;
            margin: auto;
        }
    }
    &.style-border2 {GeneralSettings
        .title { 
            font-weight: 600;
            &.title-size-1 {
                font-size: 3.2rem;
                line-height: 4rem;
                @media (max-width: ${maxCol.sm}) {
                    font-size: 3.2rem;
                    line-height: 1.6;
                }
            } 
            &.title-size-2 {
                font-size: 4.8rem; 
                line-height: 5.8rem;
                @media (max-width: ${maxCol.sm}) {
                    font-size: 3.2rem;
                    line-height: 1.6;
                }
            }
        }
        .text {
            font-size: 1.6rem;
            line-height: 2.4rem;
        }
    }
    
`;

