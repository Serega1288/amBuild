import React from 'react';
import styled from 'styled-components';
import {maxCol} from "../../../function/SizeCol";
//import {Link} from "gatsby";

const BannerLite = ( {item, title} ) => {


    const imgUrl = item?.banner?.localFile?.publicURL;

    //console.log('item >>>', item);

    const Section = styled.section`
        background-color: #000000;
        .row {
            min-height: 30rem;
        }
        &.titleImg {
            
        } 
        &.title {
            .BannerTitle {
                background: linear-gradient(180deg, #6BF8C5 0.01%, #2DB0CD 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;  
            }
            @media(max-width: ${maxCol.sm}) {
                .row {
                    min-height: inherit;
                }
            }
        }
        .BannerTitle { 
            color: #fff;
            font-size: 6.4rem;
            line-height: 7.2rem;
            font-weight: 700;
            @media(max-width: ${maxCol.sm}) {
                font-size: 3.8rem;
                line-height: 1.5;
                br {
                    display:none;
                }
            }
        }
        h1 {
            margin-top: 0;
            margin-bottom: 4rem;
            @media(max-width: ${maxCol.sm}) {
                text-align: center !important;
                margin-top: 4rem;
            }
        }
    `;

    return (
        <>
            <Section className={`banner-lite d-flex align-items-center ${item.style}`}>
                <div className={`container`}>
                    <div className="row">
                        <div className="col-12 col-sm-6 d-block d-sm-flex align-items-center">
                            <h1
                                style={{textAlign: item.alignhor}}
                                className="BannerTitle"
                                dangerouslySetInnerHTML={{__html: item.title ? item.title : title }} />
                        </div>
                        {item.style === "titleImg" ? (
                            item.banner ? (
                                <div className="col-12 col-sm-6 d-flex align-items-end">
                                    <img src={imgUrl} alt=""/>
                                </div>
                            ) : ('')
                        ) : ``}
                    </div>
                </div>
            </Section>
        </>
    )
};

export default BannerLite;



