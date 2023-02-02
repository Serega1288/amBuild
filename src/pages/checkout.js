import React, {useState} from 'react'
import Layout from '../components/Layout'
import {graphql, Link, navigate, useStaticQuery} from "gatsby"
import {localStoreService} from "../function/hook"
import BannerLite from '../components/constructor/banner/BannerLite'
import styled from "styled-components";
import {AuthLayout} from "../function/AuthLayout";
// import RegPage from "../pages/sign-up";
import useForm from "../function/useFormCheckout";

const PageCheckout = (props) => {
    // const isBrowser = typeof window !== "undefined"

    const data = useStaticQuery(graphql`
        {
            wp {
                allSettings {
                    generalSettingsTitle
                    generalSettingsDescription
                }
                themeGeneralSettings {
                  ACFoptionThemes {
                    acceptList { 
                      url {
                        ... on WpPage {
                          uri
                        }
                        ... on WpPost {
                          uri
                        }
                      }
                      name
                    }
                  }
                }
            }
        }
    `);

    // const title = props?.pageContext?.title;
    const generalTitle = data?.wp?.allSettings?.generalSettingsTitle;
    const list = data?.wp?.themeGeneralSettings?.ACFoptionThemes;

    // console.log('pageCheckout list >>>', list)


    const CartBuy = localStoreService.getLocal('CartBuy');
    // console.log('Cart >>', Cart)

    // if ( Cart === null ) {
    //     navigate('/shop');
    // }



    const [choose, setChoose ] = useState(null);
    // const [poolValid, setPoolValid ] = useState(null);
    const chooseMiningPool = (s) => {
        setChoose(s)
        // console.log('setChoose >>', s)
    };



    const buy = (choose) => {
        // console.log('buy >', choose)
        // if(choose === null) {
        //     setPoolValid(0)
        // } else {
        //     setPoolValid(1)
        // }



        // if(choose === null) {
        //     return
        // }

    }
    // localStoreService.getLocal('Cart');
    // const Cart = localStoreService.getLocal('Cart')[0];
    const [Cart, setCart ] = useState(CartBuy);
    // const [step, setStep ] = useState(Cart[0].step);

    // console.log('ClickAmount >>', Cart, step )

    const ClickAmount = (op) => {

        let step;
        // console.log('ClickAmount start >>', op, Cart )

        if ( op === 'min' ) {
            step = Cart[0].step - 1
            // setStep(step - 1)
            // Cart[0].step = step
        }
        if ( op === 'plus' ) {
            step = Cart[0].step + 1
            // setStep(step + 1)
            // Cart[0].step = step
        }

        console.log('ClickAmount step >>', step)

        const Arr = [
            {
                Img: Cart[0].Img,
                title: Cart[0].title,
                category: Cart[0].category,
                step,
                price: Cart[0].price,
                url: Cart[0].url,
                order: Cart[0].order
            },
        ];
        setCart(Arr)
        localStoreService.saveLocal('CartBuy', Arr );

        // console.log('ClickAmount end >>', op, Cart )
        // console.log('step end >>' , step)
    }

    // const { values, captureInput, submitForm, isLoading, error, message} = useForm(Cart);


        return (
            <AuthLayout logIn={false} page='sign-up' go='sign-in' redirectGoLogIn='checkout'>
                <Layout customClass="section-pad-min" title='checkout'  desc={ generalTitle } >
                    <BannerLite title='checkout' item={{ item: '' , title: `Confirm <br /> order`, style : 'title' }} />
                    <Section>
                        <div className="container">

                            {/*<h3 className={` statusInfo text-center */}
                            {/*        ${error || message ?  ' active '  : ''}*/}
                            {/*        ${error ?  ' error '  : ''}*/}
                            {/*        ${*/}
                            {/*    message?.result === '01' ||*/}
                            {/*    message?.result === '02' ||*/}
                            {/*    message?.result === '03' ||*/}
                            {/*    message?.result?.status === 400 ||*/}
                            {/*    message?.result === '04' ?  'error'  : 'done'*/}
                            {/*} */}
                            {/*    `}>*/}
                            {/*    {error ?  error  : ''}*/}
                            {/*    {message ? message?.message  : ''}*/}
                            {/*</h3>*/}

                            <form
                                // onSubmit={submitForm}
                                   className="form-checkout row">
                                <input type="garbage"
                                       name="garbage"
                                       // disabled={isLoading}
                                       // value={values.garbage}
                                       // onChange={captureInput}
                                       // isLoading={isLoading}
                                       className="garbage"
                                />
                                <div className="col">

                                    <div className="blocks itemOrder">
                                        <div className="title">
                                            Mining Pool <br />
                                            Payment
                                        </div>
                                        <div className="WrapPool row">
                                            <div className="col d-flex align-items-center">
                                                <strong>
                                                    Choose Mining Pool:
                                                </strong>
                                            </div>
                                            <div className="col-auto">
                                                <div className="WrapPoolBtn">
                                                    {Cart[0]?.order.chooseMiningPool?.map( (item, index) => (
                                                        <span key={index}>
                                                            <input required name="chooseMiningPool"
                                                                   id={`chooseMiningPool-${index}`}
                                                                   type="radio"
                                                                   // disabled={isLoading}
                                                                   // value={values.pool}
                                                                   // onChange={captureInput}
                                                                   // isLoading={isLoading}
                                                                   className="hidden-radio" />
                                                            <label for={`chooseMiningPool-${index}`} onClick={() => chooseMiningPool(item.option) }
                                                                  className={`btn style-4 ${ choose === item.option ? 'active' : '' }`}>
                                                                { item.title }
                                                            </label>
                                                        </span>

                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="subTitle">
                                            <strong>Attention:</strong>
                                        </div>
                                        <div className="attentions">
                                            {Cart[0]?.order.attention?.map( (item, index) => (
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

                                            <div className="tableItem tableTitle">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="productTitle">
                                                            Service/Product
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="price">
                                                            Price
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="amount">
                                                            Amount
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="day">
                                                            Days
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="total">
                                                            Total
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tableItem">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="productTitle">
                                                            {Cart[0]?.category.nodes?.map( (item, index) => (
                                                                <>
                                                                    {
                                                                        item.name === 'Cloud mining' ? '' : item.name
                                                                    }
                                                                </>
                                                            ))}&nbsp;
                                                            {Cart[0]?.title}
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="price">
                                                            $ {Cart[0]?.order.hashrateFee}/T/Days
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="amount">
                                                            <span onClick={() => ClickAmount('min')}>-</span>
                                                            <div>
                                                                {
                                                                    Cart[0].step * 10 + 'T'
                                                                }
                                                                {/*{*/}
                                                                {/*    console.log('-->', Cart[0])*/}
                                                                {/*}*/}
                                                            </div>
                                                            <span onClick={() => ClickAmount('plus')}>+</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="day">
                                                            {Cart[0]?.order.days}
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="total">
                                                            <div>$&nbsp;
                                                                <span>{ (Cart[0]?.order.hashrateFee * Cart[0]?.order.days * Cart[0]?.step * 10).toFixed(2) }</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tableItem">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="productTitle">
                                                            Service Fee
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="price">
                                                            $ {Cart[0]?.order.serviceFee}/T/Days
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="amount">
                                                            OT
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="day">
                                                            {Cart[0]?.order.days}
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="total">
                                                            <div>$&nbsp;
                                                                <span>
                                                                    {Cart[0]?.order.serviceFee * Cart[0]?.order.days * Cart[0]?.step * 10 }
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <p>
                                            <strong>Note:</strong>
                                            The remaining ransaction fees can be paid manually or be deducted automatically from your fund.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="blocks formOrder">

                                        <a href={Cart[0]?.url} className="itemProduct d-block">
                                            <div className="row">
                                                <div className="col-auto">
                                                    <div  style={{width: '14rem'}} className="img">
                                                        <img src={Cart[0]?.Img} alt=""/>
                                                    </div>
                                                </div>
                                                <div className="col d-flex flex-column justify-content-center">
                                                    <div className="cat">
                                                        {Cart[0]?.category.nodes?.map( (item, index) => (
                                                            <>
                                                                {
                                                                    item.name === 'Cloud mining' ? '' : item.name
                                                                }
                                                            </>
                                                        ))}
                                                    </div>
                                                    <div className="title">
                                                        {Cart[0]?.title}
                                                    </div>
                                                </div>
                                            </div>
                                        </a>

                                        <div className="WrapOrder">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="WrapOrderTitle">
                                                        Hashrate Fee:
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="WrapOrderValue">
                                                        <strong>$ <span>{(Cart[0]?.price*Cart[0]?.step).toFixed(2)}</span></strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="WrapOrder">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="WrapOrderTitle">
                                                        Service Fee:
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="WrapOrderValue">
                                                        <strong>$ <span>{Cart[0]?.order.serviceFee * Cart[0]?.order.days * Cart[0]?.step * 10 }</span></strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="WrapOrderTotalValue">
                                            Order Total:
                                            <strong>$&nbsp;
                                                <span>
                                                    {(Cart[0]?.price*Cart[0]?.step + ( Cart[0]?.order.serviceFee * Cart[0]?.order.days * Cart[0]?.step * 10 )).toFixed(2) }
                                                </span>
                                            </strong>
                                        </div>

                                        <div className="WrapBtnBuy">
                                            <button onClick={()=>buy(choose)} className="BtnBuy btn style-3 w100">Submit</button>
                                        </div>

                                    </div>
                                    <div className="acceptList">
                                        {list.acceptList.map( (item, index) => (
                                            <label for={`list-item-${index}`} key={index} className="list-item">
                                                <input required type="checkbox" id={`list-item-${index}`} />
                                                I accept <a target="_blank" href={item.url.uri} >{item.name}</a>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Section>
                </Layout>
            </AuthLayout>
        );

};
export default PageCheckout;
// export default () => (
//     <AuthLayout logIn={false} page='sign-up' go='sign-in' redirectGoLogIn='checkout' >
//         <PageCheckout />
//     </AuthLayout>
// );



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
      position: relative;
      input {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      }
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
        display: inline-flex;
        align-items: center;
        justify-content: center;
        div {
          display: inline-flex;
          align-items: center;
          height: 2rem;
          line-height: 2rem;
        }
        span {
          cursor: pointer;
          width: 2rem;
          height: 2rem;
          line-height: 2rem;
          display: inline-block;
        }
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
  .acceptList {
    label {
      font-size: 1.6rem;
      display: flex;
      align-items: center;
      color: #AEAEAE;
      margin-bottom: 1rem;
      cursor: pointer;
    }
    a {
      color: #000000;
      display: inline-block;
      margin-left: 0.4rem;
    }
    input {
      cursor: pointer;
      margin: 0 0.8rem 0 0.5rem;
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 2px;
      border: 2px solid #000;
      -webkit-appearance : none;
      appearance         : none;
      outline      : none;
      &:checked {
        background-color: #000;
      }
    }
  }
  .hidden-radio {
    padding: 0;
    margin: 0;
    width: 1px;
    height: 1px;
    appearance: none;
    outline: none;  
  }
  .error-input-text {
    color: darkred;
  }
`;