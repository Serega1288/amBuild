import styled from "styled-components";
import {minCol} from "../function/SizeCol";
import dot from "../assets/img/svg/dot.svg"

const WrapContentAccount = styled.div`
   padding-top: 4rem;
   padding-bottom: 4rem;
   padding-left: 1rem;
   padding-right: 4rem;
  .Wrap {
    margin-bottom: 10rem;
    &:last-child {
      margin-bottom: 4rem;
    }
    .title {
      & + .block {
        padding-top: 2rem;
      }
    }
  }
  .title {
    font-size: 2.4rem;
    padding-bottom: 4rem;
  }
  .text-1 {
    font-size: 1.8rem;
  }
  .text-2 {
    font-size: 1.6rem;
  }
  .block {
    padding-bottom: 2.4rem;
    padding-top: 4rem;
    border-bottom: 1px solid #D1D1D1;
    .text-2 {
      margin-bottom: 2.5rem;
    }
  }
  .WrapAccountList {
    .row {
      margin-left: -0.9rem;
      margin-right: -0.9rem;
      & > * {
        padding-left: 0.9rem;
        padding-right: 0.9rem;
      }
    }
    .item {
      border: 1px solid #C3C3CF;
      border-radius: 1.8rem; 
      padding: 2.4rem;
      min-height: 12.5rem;
    }
    .icon-list {
      display: flex;
      align-content: center;
      .icon {
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 50%;
        margin-right: 1.2rem;
        background: #DADADA;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &.active {
          background: #000000;
        }
      }
      
    }
  }
  .ItemBlock {
    .title {
      padding-top: 3.2rem;
      padding-bottom: 3.2rem;
    }
  }
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
  
  .orderList {
    .tableTitle {
      padding-top: 2.4rem;
      padding-bottom: 2.4rem;
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 1;
    }
    .tableList {
      background: #F9F9FB;
      margin-bottom: 2rem;
      color: #CBCBCB;
      min-height: 13rem;
      font-size: 1.6rem;
      &.no {
        display: flex;
        align-items: center;
        justify-content: center;
      }
 
      &.yes {
        padding: 1rem;
      }

      .tableListItem {
        background-color: #fff;
        min-height: 2rem;
        margin-bottom: 1rem;
        &:last-child {
          margin-bottom: 0;
        }
        cursor: pointer;
      }
      
      .tableTitle {
        color: #000;
        font-weight: 400;
        padding: 2rem 1rem;
        font-size: 1.4rem;
        display: flex;
        align-items: center;
      }
      
    }
  }

`;
export default WrapContentAccount;