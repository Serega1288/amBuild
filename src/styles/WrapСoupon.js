import dot from "../assets/img/svg/dot.svg";
import styled from "styled-components";

const WrapСoupon = styled.div` 
  .BlockCoupon {
    margin-bottom: 4rem;
    color: #fff;
    background-color: #000000;
    border-radius: 1.2rem;
    max-width: 63rem;
    .CouponBlock {
      padding: 3.2rem;
      min-height: 26rem;
      &.right {
        padding-left: 0;
      }
    }
    .CouponPrice {
      background: linear-gradient(180deg, #6BF8C5 0.01%, #2DB0CD 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      font-weight: 700;
      font-size: 4.8rem;
    }
    .blockLeft {

    }
    .obTop, .obBottom, .obDots, .obCircl {
      width: 0;
      height: 0;
      position: absolute;
      right: -2.8rem;
      right: 0;
      z-index: 1;
    }
    .obTop {
      top: 0;
      border-left: 1.4rem solid transparent;
      border-right: 1.4rem solid transparent;
      border-top: 2rem solid #fff;
    }
    .obDots {
      top: 2rem;
      bottom: 2rem;
      width: 2.8rem;
        //background-image: url("${dot}");
      background-size: 2.8rem 2.8rem;
      height: auto;
    }
    .obBottom {
      bottom: 0;
      border-left: 1.4rem solid transparent;
      border-right: 1.4rem solid transparent;
      border-bottom: 2rem solid #fff;
    }
    .CouponTitle {
      font-weight: 600;
      font-size: 3rem;
      margin-bottom: 1.2rem;
    }
    p {
      font-size: 1.6rem;
    }
    .CouponID {

    }
    .CouponData {
      margin-top: 3.6rem;
      margin-bottom: 3.6rem;
    }
    .obCircl {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
      background-color: #FFFFFF;
      right: -3.2rem;
      margin: auto;
      top: 0;
      bottom: 0;
    }
  }
`
export default WrapСoupon;
