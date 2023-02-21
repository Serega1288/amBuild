import React, {useEffect, useState} from 'react'
import Layout from '../components/Layout'
import {graphql, navigate, useStaticQuery} from "gatsby"
import styled from "styled-components"
import {localStoreService} from "../function/hook"
import ViewLastProducts from "../components/CategoryProduct/ViewLastProducts"
import Const from "../components/constructor/Constructor"
import GlobalConst from '../components/constructor/GlobalConstructor'
import iconStat from '../assets/img/iconStat.png'
import {maxCol} from "../function/SizeCol"
import IconInfo from '../function/IconInfo'
// import {SwiperSlide} from "swiper/react";
// import ListProductItem from "../components/constructor/products/ListProductItem";



const PageProduct = (props) => {

    const data = useStaticQuery(graphql`
        {
            wp {
                allSettings {
                    generalSettingsTitle
                    generalSettingsDescription
                }
                themeGeneralSettings {
                    ACFoptionThemes { 
                        const {
                            ... on WpThemeGeneralSettings_Acfoptionthemes_Const_Content {
                                alignhor
                                alignver
                                fieldGroupName
                                style
                                text
                                title
                                titleSize
                            }
                            ... on WpThemeGeneralSettings_Acfoptionthemes_Const_Banner {
                                alignhor
                                fieldGroupName
                                text
                                title
                                banner {
                                    localFile {
                                        publicURL
                                    }
                                }
                            }

                            ... on WpThemeGeneralSettings_Acfoptionthemes_Const_BannerLite {
                                title
                                fieldGroupName
                                style
                                alignhor
                                banner {
                                    localFile {
                                        publicURL
                                    }
                                }
                            }

                            ... on WpThemeGeneralSettings_Acfoptionthemes_Const_BlockTabs {
                                fieldGroupName
                                title
                                tabs {
                                    fieldGroupName
                                    title
                                    list {
                                        title
                                        editir
                                    }
                                }
                            }
                            ... on WpThemeGeneralSettings_Acfoptionthemes_Const_SliderContent {
                                fieldGroupName
                                title
                                slider {
                                    title
                                    text
                                    subTitle
                                    icon {
                                        localFile {
                                            publicURL
                                        }
                                    }
                                }
                            }

                            ... on WpThemeGeneralSettings_Acfoptionthemes_Const_SliderContentImage {
                                fieldGroupName
                                title
                                slider {
                                    style
                                    title
                                    text
                                    icon {
                                        localFile {
                                            publicURL
                                        }
                                    }
                                }
                            }

                            ... on WpThemeGeneralSettings_Acfoptionthemes_Const_SliderImage {
                                fieldGroupName
                                title
                                slider {
                                    url
                                    image {
                                        localFile {
                                            publicURL
                                        }
                                    }
                                }
                            }

                            ... on WpThemeGeneralSettings_Acfoptionthemes_Const_HelpCenter {
                                fieldGroupName
                                title
                                text1
                                text2
                                text3
                                title1
                                title2
                                title3
                                url1
                                url2
                                url3
                                icon1 {
                                    localFile {
                                        publicURL
                                    }
                                }
                                icon2 {
                                    localFile {
                                        publicURL
                                    }
                                }
                                icon3 {
                                    localFile {
                                        publicURL
                                    }
                                }
                            }


                            ... on WpThemeGeneralSettings_Acfoptionthemes_Const_Blockproducts {
                                fieldGroupName
                                button
                                buttonUrl
                                title
                                products {
                                    ... on WpProductD {
                                        title
                                        uri
                                        featuredImage {
                                            node {
                                                localFile {
                                                    publicURL
                                                }
                                            }
                                        }
                                        staticOutputRatio {
                                            staticOutputRatioInfo
                                            staticOutputRatioValue
                                        }
                                        productCategories {
                                            nodes {
                                                name
                                            }
                                        }
                                    }
                                }
                            }


                            ... on WpThemeGeneralSettings_Acfoptionthemes_Const_Blockcollapse {
                                fieldGroupName
                                title
                                collapse {
                                    title 
                                    editor
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    // const list = props.pageContext.ACFconstructor.const;
    const title = props.pageContext.title;
    const generalTitle = data.wp.allSettings.generalSettingsTitle;
    // const generalDescription = data.wp.allSettings.generalSettingsDescription;

    // const [d, setData] = useState([]);
    const [d] = useState([]);
    useEffect(() => {

        const get = localStoreService.getLocal('ProductSave');

        if ( get === undefined || get === null ) {
            const Arr = [
                { ...props.pageContext }
            ];
            localStoreService.saveLocal('ProductSave', Arr);
            //console.log('localStoreService > null', Arr );
        } else {

            if( get.length > 8 ) {
                get.pop()
            }

            // get.forEach(entry => {
            //     const [key, value] = entry;
            //     if ( key === props.pageContext.title ) {
            //         console.log('key > ', key)
            //     }
            // });

            // !!! не працює !!!
            get.filter(el => el.title !== '180 days')

            //console.log('get > get', get );

            const Arr = [
                {...props.pageContext},
                ...get
            ];
            localStoreService.saveLocal('ProductSave', Arr );
            //console.log('localStoreService > 1',  Arr );
        }



    }, [d]);
 
    // state.selectedInvitation.vehicleAccess.filter((visitor: { visitorId: any; }) => visitor.visitorId !== action.vehicleAccess.visitorId)

    const products = localStoreService.getLocal('ProductSave');
    const list = props.pageContext.ACFconstructor.const;
    const dataGlobalConst = data.wp.themeGeneralSettings.ACFoptionThemes.const;

    const stat = props.pageContext.ACFstat;
    const Img = props.pageContext.featuredImage.node.localFile.publicURL;

    const ACFdescription = props.pageContext.ACFdescription;
    const ACFpageProductsTopDetails = props.pageContext.ACFpageProductsTopDetails;

    const days = props.pageContext.ACForderDateProduct.days;
    const hashrateFee = props.pageContext.ACForderDateProduct.hashrateFee;
    const price = hashrateFee * days * 10;

    //console.log('GlobalConst', list, GlobalConst)
    console.log('product', props.pageContext)

    const [step, setStep ] = useState(1);
    const [result, setResult ] = useState(1);

    const stepFun = (s) => {
        setStep(s);
    };

    const stepPlus = (s) => {
        if (result < s) {
            setResult(1)
        } else if(result === 0) {
        } else if(result === 1) {
            setResult(1)
        } else {
            setResult(result - s)
        }
    };
    const stepMinus = (s) => {
        setResult(result + s)
    };

    const onBuy = (step, Img, category, title, id) => {
        const Arr = [
            {
                Img: Img,
                title: title,
                category: category,
                step: step,
                id: id,
                price: +price,
                url: props.uri,
                order: props.pageContext.ACForderDateProduct
            },
        ];
        localStoreService.saveLocal('CartBuy', Arr );

        navigate('/checkout');
    };

    return (
        <>
            <Layout customClass="section-pad" title={ title } desc={ generalTitle } >

                {/*{console.log('CartBuy >>>', localStoreService.getLocal('CartBuy') )}*/}
                {/*{localStoreService.localStoreClear()}*/}
                {/*{localStoreService.saveLocal('ProductSave', props.pageContext)}*/}
                {/*{localStorage.clear()}*/}

                <Section className="product-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <div style={{backgroundImage: `url(${Img})`}} className="FirstImg">
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="WrapContent d-flex flex-column h100">
                                    <div className="row align-items-end">
                                        <div className="col-12">
                                            <div className="categoryProduct">
                                                {props.pageContext.productCategories.nodes?.map( (item, index) => (
                                                    <span key={`productCategories-${index}`}>
                                                        {
                                                            item.name === 'Cloud mining' ? '' : item.name
                                                        }
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col">
                                            <h1>{props.pageContext.title}</h1>
                                        </div>
                                        <div className="col-auto">
                                            <div className="WrapPrice">

                                                <span className="WrapIconInfo">
                                                     <strong>$ {(price*result).toFixed(2)}</strong>
                                                     <IconInfo  position="left" style="1" text='text' />
                                                </span>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="WrapTopDescriptionList">
                                        {ACFpageProductsTopDetails?.wraptopdescriptionlist?.map( (item, index) => (
                                            <div key={`ACFpageProductsTopDetails-${index}`} className="descWrap d-flex align-items-center">
                                                <div className="WrapDescTitle">{item.title}:</div>
                                                <div className="WrapDescValue">
                                                    {
                                                        item.infoListActiveTop === true ?
                                                            <span className="WrapIconInfo d-flex align-items-center">
                                                            <strong className="value">{item.value}</strong>
                                                            <IconInfo  position="right" style="1" text={item.infoListDesc} />
                                                        </span>
                                                            : <strong className="value">{item.value}</strong>
                                                    }
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="WrapBoxProduct">
                                        <div className="title"><span>Amount</span></div>
                                        <div className="WrapPriceButton">
                                            <div className="row">
                                                <div className="col">
                                                    <button onClick={() => stepFun(1) } name="priceStep" value="10" className={step === 1 ? 'active' : '' } >10 T</button>
                                                    <button onClick={() => stepFun(3) } name="priceStep" value="30" className={step === 3 ? 'active' : '' } >30 T</button>
                                                    <button onClick={() => stepFun(5) } name="priceStep" value="50" className={step === 5 ? 'active' : '' } >50 T</button>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="WrapStep d-flex justify-content-between">
                                                        <div onClick={() => stepPlus(step)} className="min">-</div>
                                                        <div className="step"><span>{result}</span>0&nbsp;T</div>
                                                        <div onClick={() => stepMinus(step)} className="plus">+</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="WrapBoxProduct">
                                        <div className="title"><span>Miner Model</span></div>
                                        <div className="WrapAttr">
                                            <div className="row">
                                                <div className="col">
                                                    <strong className="attr">{ACFpageProductsTopDetails.minerModel}</strong>
                                                </div>
                                                <div className="col-auto">
                                                    Power: <strong>{ACFpageProductsTopDetails.power}</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="WrapBoxProductOption">
                                        <div className="row">
                                            {ACFpageProductsTopDetails.options?.map( (item, index) => (
                                                <div key={`ACFpageProductsTopDetails-${index}`} className="col-4">
                                                    <div className="item">
                                                        <div className="title">{item.title}</div>
                                                        <div className="text"><strong>{item.valuevalue}</strong></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="row WrapButtonBuy">
                                        <div className="col-6">
                                            <span onClick={() => onBuy(result, Img, props.pageContext.productCategories, props.pageContext.title, props.pageContext.databaseId)} className="btn w100 style-3">
                                                Buy Now
                                            </span>
                                        </div>
                                        <div className="col-6 d-flex align-items-center">
                                            <div className="text" dangerouslySetInnerHTML={{__html: props.pageContext.ACFpageProductsTopDetails.textInfo}} />
                                        </div>
                                    </div>

                                    <div className="text" dangerouslySetInnerHTML={{__html: props.pageContext.content}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <Description>
                    <div className="container">
                        <div className="Wrap">
                            <h2 className="title">{ACFdescription.descriptionTitle}</h2>
                            <div className="row">
                                {ACFdescription.descriptionList?.map( (item, index) => (
                                    <div key={`ACFdescription-${index}`} className="col-6 col-md-3">
                                        <div className="descWrap">
                                            <div className="WrapDescTitle">{item.title}</div>
                                            <div className="WrapDescValue">
                                                {
                                                    item.infoListActive === true ?
                                                        <span className="WrapIconInfo">
                                                            <strong className="value">{item.value}</strong>
                                                            <IconInfo  position="right" style="1" text={item.infoListDesc} />
                                                        </span>
                                                     : <strong className="value">{item.value}</strong>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </Description>

                <WrapStat>
                    <div className="container">
                        <div className="WrapStatBlock">
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <div className="WrapItemStat style-1">
                                        <div className="itemStat">
                                            <div className="icon">
                                                <img src={iconStat} />
                                            </div>
                                            <div className="ItemStatTitle">
                                                {stat.title}
                                            </div>
                                            <div className="WrapDateStat">
                                                <div className="ItemStatSubTitle">Static Cost Recovery Time</div>
                                                <div className="ItemDate">
                                                    <span className="WrapIconInfo">
                                                        <strong>{stat.staticCostRecoveryTime}</strong>
                                                        <IconInfo  position="right" style="1" text={stat.desc1} />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="WrapDateStat">
                                                <div className="ItemStatSubTitle">Static Output Ratio:</div>
                                                <div className="ItemDate">
                                                    <span className="WrapIconInfo">
                                                        <strong>{stat.staticOutputRatio}</strong>
                                                        <IconInfo  position="right" style="1" text={stat.desc2} />
                                                    </span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="WrapItemStat style-2 h100 d-flex flex-column">
                                        <div className="BoxItemStat h100">
                                            <div className="itemStat h100 d-flex flex-column">
                                                <div className="ItemStatSubTitle">Duration Static Output:</div>
                                                <div className="ItemDate">
                                                    <span className="WrapIconInfo">
                                                        <strong>{stat.durationStaticOutput}</strong>
                                                        <IconInfo  position="right" style="1" text={stat.desc3} />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="BoxItemStat h100">
                                            <div className="itemStat h100 d-flex flex-column">
                                                <div className="ItemStatSubTitle">Static Currency Acquisition Price:</div>
                                                <div className="ItemDate">
                                                    <span className="WrapIconInfo">
                                                        <strong>{stat.staticCurrencyAcquisitionPrice}</strong>
                                                        <IconInfo  position="right" style="1" text={stat.desc4} />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="BoxItemStat h100">
                                            <div className="itemStat h100 d-flex flex-column">
                                                <div className="ItemStatSubTitle">Static Annual Output Ratio:</div>
                                                <div className="ItemDate">
                                                    <span className="WrapIconInfo">
                                                        <strong>{stat.staticAnnualOutputRatio}</strong>
                                                        <IconInfo  position="right" style="1" text={stat.desc5} />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </WrapStat>
                <div className="section-constructor-product">
                    <Const type='ProductD' href={props.location.href} props={list} />
                    <GlobalConst type='GlobalProductConst' href={props.location.href} props={dataGlobalConst} />
                </div>
                {
                    products ? (<ViewLastProducts item={products} />) : ''
                }
            </Layout>

        </>
    );
};
export default PageProduct;
const Description = styled.section`
        position: relative;
        padding-bottom: 5rem;
        padding-top: 5rem;
        @media (max-width: ${maxCol.sm}) {
            padding-bottom: 2.5rem;
            padding-top: 2.5rem;
        }
        .title {
            font-weight: 600;
            margin-bottom:2rem;
            margin-top:0rem;
        }
        &:before {
            background: #ededef;
            position: absolute;
            content: '';
            top: 50%;
            bottom: 0;
            left:0;
            right: 0;
            display: block;
            z-index: -1;
        }
        .Wrap {
            padding: 4rem 3rem;
            @media (max-width: ${maxCol.sm}) {
                padding: 2rem 2rem;
            }
            background: #FFFFFF;
            box-shadow: 3px 4px 12px rgba(0, 0, 0, 0.05), 0px 1px 8px rgba(0, 0, 0, 0.05), 6px 4px 18px rgba(0, 0, 0, 0.08);
            border-radius: 1.8rem;
        }
        .descWrap {
            margin-top: 3rem;
            @media (max-width: ${maxCol.sm}) {
                margin-top: 2rem;
            }
        }
        .WrapDescTitle {
            margin-bottom: 0.8rem;
            line-height: 1;
            @media (max-width: ${maxCol.sm}) {
               font-size: 1.8rem;         
           }
        }
       .WrapDescValue {
           @media (max-width: ${maxCol.sm}) {
               font-size: 1.4rem;         
           }
       }
       .WrapIconInfo {
            
       }
       .value {
            margin-right: 0.7rem;
       }
`;
const WrapStat = styled.section`
      background: #ededef;
      padding: 6rem 0;
      .WrapDateStat {
         padding-top: 3rem;
      }
      .WrapStatBlock {
        max-width: 100rem;
      }
      .ItemStatSubTitle {
        margin-bottom: auto;
      }
      .BoxItemStat {
        padding-bottom: 2rem;
      }
      .itemStat {
            border-radius: 1.8rem;
      }
      .ItemStatTitle {
        font-weight: 600;
        font-size: 4.8rem;
        @media (max-width: ${maxCol.sm}) {
            font-size: 3.2rem; 
        }
        margin-bottom: 3.5rem;
      }
      .icon {
         margin-bottom: 2rem;
      }
      .ItemDate {
           strong {
               margin-right: 1rem;
           }
      }
      .WrapItemStat {
        &.style-1 {
            margin-bottom: 2rem;
            color: #fff;
            .itemStat {
                background: linear-gradient(180deg, #000000 0%, #2F654B 100%);
                border-radius: 18px;
                padding: 4rem 3rem; 
            }
            .ItemDate {
                margin-top: 0.8rem;
            }
            .ItemStatTitle {
        
            }
        }
        &.style-2 {
            .ItemDate {
                strong {
                    color: #40B768;
                    font-size: 2.4rem;
                    display: inline-block;
                }
            }
            .itemStat { 
                background: #FFFFFF;
                padding: 2.4rem 3rem;
                box-shadow: 3px 4px 12px rgba(0, 0, 0, 0.05), 0px 1px 8px rgba(0, 0, 0, 0.05), 6px 4px 18px rgba(0, 0, 0, 0.0);
            }
            .ItemStatTitle {
                   margin-bottom: auto;
            }
        }
      }
`

const Section = styled.section`
      padding-left: 2.4rem;
      padding-right: 2.4rem;
      @media (max-width: ${maxCol.sm}) {
        padding-top: 3rem;
        padding-left: 0rem;
        padding-right: 0rem;
      }
      padding-top: 6rem;
      padding-bottom: 6rem;
      font-weight: 700; 
      font-size: 1.2rem;
      .WrapButtonBuy {
        margin-top: auto;
        padding-top: 2rem;
        .text {
            font-size: 1.2rem;
        }
      }
      .WrapBoxProductOption {
        font-weight: 400;
        font-size: 1.2rem;
        .title {
          padding-bottom: 0.8rem;
        }
        .item {
            border: 1px solid #C3C3CF;
            border-radius: 1.8rem; 
            padding: 1.5rem;
            @media (max-width: ${maxCol.sm}) {
              padding: 1rem;
              font-size: 1.1rem;
            }
        }
        .row {
          margin-left: -0.7rem;
          margin-right: -0.7rem;
          & > * {
            padding-left: 0.7rem;
            padding-right: 0.7rem;
          }
        }
      }
      .WrapAttr {
        padding-top: 2.4rem;
        padding-bottom: 1.9rem;
        font-weight: 400;
        font-size: 1.2rem;
        .attr {
            font-size: 1.8rem;
        }
      }
      .WrapStep {
        width: 12.4rem;
        height: 100%; 
        border-radius: 6.7rem;
        border: 1px solid #000000;
        .min, .plus, .step {
            height: 4.4rem;
            display: flex;
            align-items: center;
            justify-content: center;
            user-select: none;
        }
        .min, .plus {
            cursor: pointer;
        }
        .min {
            padding-left: 2.4rem;
            padding-right: 0.9rem;
        }
        .plus { 
            padding-left: 0.9rem;
            padding-right: 2.4rem;
        }
        .step {
            height: 4.4rem;
        }
      }
      .WrapBoxProduct {
        margin-top: 3rem; 
        .title {
            font-weight: 700;
            font-size: 1.6rem;
            position: relative;
            &:before {
                content: '';
                display: block;
                border-bottom: 1px solid #C0BFBF;
                left: 0;
                right: 0;
                bottom: 0;
                position: absolute;
                z-index: -1;
            }
            span {
                display: inline-block;
                border-bottom: 1px solid #000000;
                padding-bottom: 1.6rem;
            }
        }
      }
      .FirstImg {
        padding-top: 110%;
        background: #000000;
        border-radius: 1.8rem;
        background-size: contain;
        background-position: center bottom;
        background-repeat: no-repeat;
        margin-bottom: 2rem;
      }
      .WrapContent {
        padding-bottom: 2rem;
        padding-left: 1rem;
        h1 {
            margin: 0;
        }
      } 
      .categoryProduct {
        letter-spacing: 0.1em;
        font-weight: 600;
        font-size: 2rem; 
        color: #C0BFBF;
        margin-bottom: 1.5rem;
      } 
      .WrapPriceButton { 
        padding-top: 1.6rem;
        button {  
            cursor: pointer;
            border-radius: 6.7rem;
            padding: 1.4rem 1.2rem;
            color: #000000;
            font-weight: 700;
            font-size: 1.2rem;
            margin-right: 1.6rem; 
            border: 1px solid #C3C3CF; 
            width: 7.6rem;
            &:last-child {
              margin-right: 0rem !important;
            } 
            @media (max-width: ${maxCol.sm}) {
              width: 6rem;
              margin-right: 1rem;
            }
            &.active {
                background: #000000;
                color: #FFFFFF; 
            }
        }
      }
      .WrapPrice {
        font-weight: 700;
        font-size: 1.8rem;
        strong {
            margin-right: 1rem; 
        }
      } 
      
      .WrapTopDescriptionList {
        margin-top: 3rem;
        .WrapDescTitle {
            margin-right: 0.8rem;
            font-size: 1.2rem;
        }
        .WrapDescValue {
            font-size: 1.2rem;
        }
        .descWrap {
            margin-bottom: 1.2rem;
        }
        .WrapIconInfo {
            .value {
                margin-right: 0.8rem;
            }
        }
      }
      
`;