import React, {useState} from 'react'
import Layout from '../components/Layout'
import {graphql, navigate, useStaticQuery} from "gatsby"
import {localStoreService} from "../function/hook"
import BannerLite from '../components/constructor/banner/BannerLite'
import styled from "styled-components";

const PageCheckout = (props) => {

    const data = useStaticQuery(graphql`
        {
            wp {
                allSettings {
                    generalSettingsTitle
                    generalSettingsDescription
                } 
            }
        }
    `);

    const title = props.pageContext.title;
    const generalTitle = data?.wp?.allSettings?.generalSettingsTitle;

    //console.log('pageCheckout >>>', props)


    const CartBuy = localStoreService.getLocal('CartBuy');
    const ServicePrice = 45;

    if ( CartBuy === null ) {

    } else {
        navigate('/');
    }

    // console.log('CartBuy >>', CartBuy[0])

    const [choose, setChoose ] = useState(null);
    const chooseMiningPool = (s) => {
        setChoose(s)
    };

    return (
        <>
            <Layout customClass="section-pad-min" title={ title } desc={ generalTitle } >
                <BannerLite title={ title } item={{ item: '' , title: `Confirm <br /> order`, style : 'title' }} />
                <Section>
                    <div className="container">
                        <div className="row">
                            <div className="col">

                                <div className="blocks itemOrder">
                                    <div className="title">
                                        Mining Pool <br />
                                        Payment
                                    </div>
                                    {/*<div className="WrapPool row">*/}
                                    {/*    <div className="col d-flex align-items-center">*/}
                                    {/*        <strong>Choose Mining Pool:</strong>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="col-auto">*/}
                                    {/*        <div className="WrapPoolBtn">*/}
                                    {/*            {CartBuy[0]?.order.chooseMiningPool?.map( (item, index) => (*/}
                                    {/*                <span onClick={() => chooseMiningPool(item.option) }*/}
                                    {/*                      className={`btn style-4 ${ choose === item.option ? 'active' : '' }`}>*/}
                                    {/*                { item.title }*/}
                                    {/*                </span>*/}
                                    {/*            ))}*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    <div className="subTitle">
                                        <strong>Attention:</strong>
                                    </div>
                                    <div className="attentions">
                                        {CartBuy[0]?.order.attention?.map( (item, index) => (
                                            <div className="attention">
                                                { item.text }
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="blocks itemOrder">
                                    <div className="title">
                                        Order Information
                                    </div>
                                    <div className="table">

                                        {/*<div className="tableItem tableTitle">*/}
                                        {/*    <div className="row">*/}
                                        {/*        <div className="col">*/}
                                        {/*            <div className="productTitle">*/}
                                        {/*                Service/Product*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*        <div className="col">*/}
                                        {/*            <div className="price">*/}
                                        {/*                Price*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*        <div className="col-auto">*/}
                                        {/*            <div className="amount">*/}
                                        {/*                Amount*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*        <div className="col-auto">*/}
                                        {/*            <div className="day">*/}
                                        {/*                Days*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*        <div className="col-auto">*/}
                                        {/*            <div className="total">*/}
                                        {/*                Total*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*<div className="tableItem">*/}
                                        {/*    <div className="row">*/}
                                        {/*        <div className="col">*/}
                                        {/*            <div className="productTitle">*/}
                                        {/*                {CartBuy[0]?.category.nodes?.map( (item, index) => (*/}
                                        {/*                    <>*/}
                                        {/*                        {*/}
                                        {/*                            item.name === 'Cloud mining' ? '' : item.name*/}
                                        {/*                        }*/}
                                        {/*                    </>*/}
                                        {/*                ))}&nbsp;*/}
                                        {/*                {CartBuy[0]?.title}*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*        <div className="col">*/}
                                        {/*            <div className="price">*/}
                                        {/*                $ {CartBuy[0]?.order.hashrateFee}/T/Days*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*        <div className="col-auto">*/}
                                        {/*            <div className="amount">*/}
                                        {/*                OT*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*        <div className="col-auto">*/}
                                        {/*            <div className="day">*/}
                                        {/*                {CartBuy[0]?.order.days}*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*        <div className="col-auto">*/}
                                        {/*            <div className="total">*/}
                                        {/*                <div>$&nbsp;*/}
                                        {/*                    <span>{CartBuy[0]?.order.hashrateFee * CartBuy[0]?.order.days * CartBuy[0]?.step * 10 }</span>*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*<div className="tableItem">*/}
                                        {/*    <div className="row">*/}
                                        {/*        <div className="col">*/}
                                        {/*            <div className="productTitle">*/}
                                        {/*                Service Fee*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*        <div className="col">*/}
                                        {/*            <div className="price">*/}
                                        {/*                $ {CartBuy[0]?.order.serviceFee}/T/Days*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*        <div className="col-auto">*/}
                                        {/*            <div className="amount">*/}
                                        {/*                OT*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*        <div className="col-auto">*/}
                                        {/*            <div className="day">*/}
                                        {/*                {CartBuy[0]?.order.days}*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*        <div className="col-auto">*/}
                                        {/*            <div className="total">*/}
                                        {/*                <div>$&nbsp;*/}
                                        {/*                    <span>*/}
                                        {/*                        {CartBuy[0]?.order.serviceFee * CartBuy[0]?.order.days * CartBuy[0]?.step * 10 }*/}
                                        {/*                    </span>*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}

                                    </div>
                                    <p>
                                        <strong>Note:</strong>
                                        The remaining ransaction fees can be paid manually or be deducted automatically from your fund.
                                    </p>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="blocks formOrder">

                                    {/*<a href={CartBuy[0]?.url} className="itemProduct d-block">*/}
                                    {/*    <div className="row">*/}
                                    {/*        <div className="col-auto">*/}
                                    {/*            <div  style={{width: '14rem'}} className="img">*/}
                                    {/*                <img src={CartBuy[0]?.Img} alt=""/>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="col d-flex flex-column justify-content-center">*/}
                                    {/*            <div className="cat">*/}
                                    {/*                {CartBuy[0]?.category.nodes?.map( (item, index) => (*/}
                                    {/*                    <>*/}
                                    {/*                        {*/}
                                    {/*                            item.name === 'Cloud mining' ? '' : item.name*/}
                                    {/*                        }*/}
                                    {/*                    </>*/}
                                    {/*                ))}*/}
                                    {/*            </div>*/}
                                    {/*            <div className="title">*/}
                                    {/*                {CartBuy[0]?.title}*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</a>*/}

                                    {/*<div className="WrapOrder">*/}
                                    {/*    <div className="row">*/}
                                    {/*        <div className="col">*/}
                                    {/*            <div className="WrapOrderTitle">*/}
                                    {/*                Hashrate Fee:*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="col-auto">*/}
                                    {/*            <div className="WrapOrderValue">*/}
                                    {/*                <strong>$ <span>{(CartBuy[0]?.price*CartBuy[0]?.step).toFixed(2)}</span></strong>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}

                                    {/*<div className="WrapOrder">*/}
                                    {/*    <div className="row">*/}
                                    {/*        <div className="col">*/}
                                    {/*            <div className="WrapOrderTitle">*/}
                                    {/*                Service Fee:*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="col-auto">*/}
                                    {/*            <div className="WrapOrderValue">*/}
                                    {/*                <strong>$ <span>{CartBuy[0]?.order.serviceFee * CartBuy[0]?.order.days * CartBuy[0]?.step * 10 }</span></strong>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}

                                    {/*<div className="WrapOrderTotalValue">*/}
                                    {/*    Order Total:*/}
                                    {/*    <strong>$&nbsp;*/}
                                    {/*        <span>*/}
                                    {/*            {(CartBuy[0]?.price*CartBuy[0]?.step + ( CartBuy[0]?.order.serviceFee * CartBuy[0]?.order.days * CartBuy[0]?.step * 10 )).toFixed(2) }*/}
                                    {/*        </span>*/}
                                    {/*    </strong>*/}
                                    {/*</div>*/}
                                    
                                    <div className="WrapBtnBuy">
                                        <span className="BtnBuy btn style-3 w100">Submit</span>
                                    </div>

                                </div>
                                <div className="list">
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </Layout>

        </>
    );

};
export default PageCheckout;


const Section = styled.section`
    background-color: #F5F5F7;
    padding-top: 8rem; 
    padding-bottom: 7rem;
    .WrapPool {
      padding-bottom: 4.5rem;
      margin-bottom: 4.5rem;
      border-bottom: 1px solid #D1D1D1;
    }
    .WrapPoolBtn {
      .btn {
        margin-left: 1rem; 
        min-width: 18.5rem;
      }
    }
    .table {
      margin-bottom: 3.2rem;
    }
    .tableItem {
      padding-top: 2.4rem;
      padding-bottom: 2.4rem;
      border-bottom: 1px solid #D1D1D1; 
      .productTitle {
        
      }
      .price {
        min-width: 16rem;
      }
      .amount {
        min-width: 18rem;
        text-align: center; 
      }
      .day {
        min-width: 9rem;
      }
      .total {
        min-width: 11rem;
      }
    }
    .tableTitle {
      margin-bottom: 0.8rem;
      border: none;
    }
    .WrapBtnBuy {
      
    }
    .WrapOrder {
      border: 1px solid #C3C3CF;
      border-radius: 1.8rem;
      margin-bottom: 2rem; 
      padding: 2.8rem 2.4rem;
      font-size: 1.6rem;
      .WrapOrderTitle {
        
      }
      .WrapOrderValue {
         
      }
    } 
      .WrapOrderTotalValue {
        margin-top: 4.5rem;
        margin-bottom: 4.5rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 1.6rem;
        strong {
          margin-left: 1rem;
          font-size: 1.8rem;
        }
      }
    .blocks {
      background: #FFFFFF;
      box-shadow: 3px 4px 12px rgba(0, 0, 0, 0.05), 0px 1px 8px rgba(0, 0, 0, 0.05), 6px 4px 18px rgba(0, 0, 0, 0.08);
      border-radius: 1.8rem;
      margin-bottom: 3rem;
    }
  .itemOrder {
    padding: 4rem 3rem 3rem;
    .title {
      font-weight: 600;
      font-size: 2.8rem;
      margin-bottom: 6rem;
    } 
    .subTitle {
      font-size: 1.8rem;
    }
    .attentions {
      .attention {
        margin-top: 3rem;
        font-size: 2rem;
      }
    }
  }
  .formOrder {
    padding: 2.4rem 2.4rem 3.5rem;
    width: 40rem;
    .cat {
      font-weight: 600;
      font-size: 2rem;
      letter-spacing: 0.1em;
      color: #C0BFBF;
      margin-bottom: 1rem;
      line-height: 1;
      margin-left: 1rem;
    }
    .title {
      font-weight: 600;
      font-size: 3.2rem;
      color: #000000;
      line-height: 1;
      margin-left: 1rem;
    }
  }
  .itemProduct {
      margin-bottom: 5rem;
      .img {
        overflow: hidden;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        padding-top: 100%;
        background: #000000;
        border-radius: 0.9rem;
        position: relative; 
        img {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }
      }
  }
`;