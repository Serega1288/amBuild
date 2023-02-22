import styled from "styled-components";
import ArrowLeft from './../assets/img/svg/arrowLeft.svg'
import ArrowRight from './../assets/img/svg/arrowReft.svg'
import Star from './../assets/img/svg/star.svg'
import StarOk from './../assets/img/svg/starOk.svg'
import {minCol} from "../function/SizeCol";

const Section1 = styled.div`
  margin-bottom: 10rem;
  padding-top: 3rem;
  .post { 
      padding: 2rem;
        @media(min-width: ${minCol.sm}) {
          padding: 4rem;
        }
    .item-post {
      border: 1px solid #C3C3CF;
      border-radius: 1.8rem;
      padding: 2.4rem;
      margin-bottom: 1.6rem;
      display: block;
      .desc {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 130%;
        color: #000;
      }
      .title {
        font-size: 1.8rem;
        padding-right: 3rem;
        position: relative;
        color: #000;
        margin-bottom: 2.5rem;
        &:before {
          content: '';
          display: block;
          background-image: url(${ArrowRight});
          background-repeat: no-repeat;
          background-position: center right;
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          z-index: 1;
          width: 1.6rem;
          height: 1.6rem;
          margin: auto;
        }
      }
    }
    .star-title {
      font-weight: 700;
      font-size: 1.2rem;
      margin-bottom: 0.7rem;
      color: #000;
    }
    .star { 
      width: 8rem; 
      height: 0.6rem;
      background-repeat: no-repeat;
      background-size: 8rem 0.6rem;
      background-image: url(${Star});
      background-position: left center;
      position: relative;
      span {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
        width: 0;
        background-image: url(${StarOk});
        background-size: 8rem 0.6rem;
        background-position: left center;
        display: block;
      }
    }
  }
  .category-title {
    font-weight: 400;
    font-size: 2.4rem;
    margin-bottom: 2rem;
    @media(min-width: ${minCol.sm}) {
      margin-bottom: 4rem;
    }
    strong {
      margin-left: 1.6rem;
      display: inline-block;
    }
  }
  .WrapMenu {
    background: #F5F5F7;
    padding: 4rem 0 4rem 3.2rem;
    @media(min-width: ${minCol.sm}) {
      min-height: 60rem;
      width: 31.2rem;
    }
    .title {
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 2.4rem;
      margin-bottom: 1.6rem;
    }
    .list {
      a { 
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.4rem;
        margin-bottom: 0.6rem;
        @media(min-width: ${minCol.sm}) {
          margin-bottom: 1.6rem;
        }
        color: #000;
        display: block;
        padding-right: 3.2rem;
        position: relative;
      }
      [aria-current="page"] {
        font-weight: 700;
        border-right: 2px solid #000;
      }
    }
  }
  .WrapListCategoryPost {
    background: #FFFFFF;
    box-shadow: 3px 4px 12px rgba(0, 0, 0, 0.05), 0px 1px 8px rgba(0, 0, 0, 0.05), 6px 4px 18px rgba(0, 0, 0, 0.08);
    border-radius: 1.8rem;
  }
  .ArrowLeft {
    background-image: url(${ArrowLeft});
    background-position: center left 0.25rem;
    color: #000;
    background-repeat: no-repeat;
    padding-left: 2.4rem;
    font-weight: 500;
    font-size: 1.4rem;
  }
  .WrapInput {
    position: relative;
  }
  .WrapForm {
    margin-top: 2.4rem;
    margin-bottom: 3.2rem; 
    width: 100%;
    input {
      width: 100%;
      border: 1px solid #D1D1D1;
      border-radius: 5rem;
      height: 6.4rem;
      padding: 0 3.4rem 0 7rem;
      font-size: 1.6rem;
      background-color: rgba(0,0,0,0);
    }
    button {
      padding: 0 2rem 0 3.4rem;
      border: none;
      position: absolute;
      cursor: pointer;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      background-color: rgba(0,0,0,0);
      svg {
        width: 2.2rem;
        height: 2.2rem;
      }
    }
  }
`
export default Section1;