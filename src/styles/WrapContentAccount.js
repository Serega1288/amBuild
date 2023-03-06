import styled from "styled-components";
import {minCol} from "../function/SizeCol";
// import dot from "../assets/img/svg/dot.svg"

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
    &.up {
      font-weight: 600;
      font-size: 3.2rem;
    }
  }
  .text-1 {
    font-size: 1.8rem;
  }
  .text-2 {
    font-size: 1.6rem;
  }
  .text-3 {
    font-size: 1.4rem;
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
    &.style-2 {
      margin-bottom: 3rem;
      .item {
        min-height: 15.4rem;
        padding: 1.4rem 1.8rem 1.4rem;
        margin-bottom: 2rem;
      }
    }
    &.style-3 {
      margin-bottom: 3rem;
      img {
        display: flex;
      }
      .item {
        min-height: 24rem;
        padding: 1.4rem 1.8rem 1.4rem; 
        margin-bottom: 2rem;
      }
      .WrapItem {
        margin: 2rem 0 0;
      }
    }
    &.style-4 { 
      margin-bottom: 8rem;
      img {
        display: flex;
      }
      .item {
        min-height: 19rem;
        padding: 1.4rem 1.8rem 1.4rem;
        margin-bottom: 2rem;
        &.active {
          
          background: #F5F5F7;
          //color: #fff;
        }
      }
      .WrapItem {
        margin: 2rem 0 0;
      }
    }
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
  .WrapOrderDelails {
    .title {
      margin-top: 3.2rem;
      padding-bottom: 1.6rem;
      //margin-bottom: 3.2rem;
    }
    .list-result-1 {
      border-bottom: 1px solid #D1D1D1;
      .tableTitle {
        padding-top: 1.2rem;
        font-weight: 400;
        font-size: 2rem;
      }
    } 
    
  }

  .WrapTable-1 {
    margin-bottom: 6rem;
    & + .WrapTable-2 {
      margin-top: -2rem;
    }
  }

  .WrapTable-2, .WrapTable-3 .Wrap {
    //margin-top: -2rem;
    border: 1px solid #C3C3CF;
    border-radius: 1.8rem;
    padding: 0 2.4rem;
    .list-result-1 + .list-result-1 {
      padding-top: 1.2rem;
    }
  }
  .WrapTable-3 {
    margin-top: 6rem;
    .Wrap {
        margin-top: 2.4rem;
        padding: 4rem 4rem 2.8rem;
    }
    .tableTitle {
        padding: 0;
        
        font-size: 1.8rem;
    }
  }
  .list-result-2 {
    padding: 1.2rem 0;
    .tableTitle {
        font-weight: 400;
    }
  }
  .WrapScrollTable {
    overflow: auto;
    .row {
        margin: 0; 
        & > * {
            padding-left: 0;
            padding-right: 0;
        }
    }
    & > * {
      @media(min-width: ${minCol.xl}) {
        width: 100% !important;
      }  
    }
  }
  .WrapTextTitle {
    margin-bottom: 2rem;
  }
  .PayList {
    
  }
  
  .WrapTimer {
    padding: 1.2rem 1.8rem;
    background: #F5F5F7;
    border-radius: 1.8rem;
    margin-bottom: 4.5rem;
  }
  .WrapAccountList .Timer {
      display: none;
  }
  .TimeActive + * {
    & > *:not(.Timer) {
      opacity: 0.2;
    }
    .Timer {
      opacity: 1;
      display: block;
      background: #000000;
      border-radius: 0 0 1.8rem 1.8rem;
      color: #fff;
      opacity: 1;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
      padding: 1.3rem 1.8rem;
    }
  }
  .WrapList-result-1 {
    & > * {
      cursor: pointer;
    }
    .table .tableTitle {
      padding-top: 2.4rem !important;
    }
  }
  .AssetsDetails {
    padding: 4rem;
    background: #F9F9FB;
  }
  .WrapAssetsDetails {
    & > *.active {
      &.AssetsDetails {
        display: block !important;
      }
    }
  }
`;
export default WrapContentAccount;