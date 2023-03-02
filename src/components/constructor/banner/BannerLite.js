import React from 'react';
import styled from 'styled-components';
import {maxCol} from "../../../function/SizeCol";
import {Link} from "gatsby";
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
      &.order {
          background-image: url(/static/gradient-f0c75c7f2fad95511aee63e5fcfe09ee.jpg);
          width: 100%;
          h1 {
            color: #fff;
            font-size: 4rem;
            line-height: 1.2;
          }
          p {
             color: #fff;
             font-size: 2rem;
             line-height: 1.2;
          }
      }
    `;

    return (
        <>
            <Section className={`banner-lite d-flex align-items-center ${item.style}`}>
                <div className={`container`}>
                    <div className="row">
                        <div className={ item.style === 'order' ? (` col-12 d-block d-sm-flex flex-column align-items-center justify-content-center`) : (` col-12 col-sm-6 d-block d-sm-flex align-items-center`)}>

                            {item.style === 'order' ? (
                                <>
                                    <h1
                                        style={{textAlign: item.alignhor}}
                                        className="BannerTitle text-center"
                                        dangerouslySetInnerHTML={{__html: item.title ? item.title : title }} />
                                    <p className="d-flex align-items-center">To complete checkout, go <Link style={{marginLeft: `1rem`}} className="btn style-1" to="/account/settings/">here.</Link></p>
                                </>
                            ) : (
                                <h1
                                    style={{textAlign: item.alignhor}}
                                    className="BannerTitle"
                                    dangerouslySetInnerHTML={{__html: item.title ? item.title : title }} />
                            )}
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



