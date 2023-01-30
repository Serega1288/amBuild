import styled from "styled-components";
import {maxCol} from "../function/SizeCol";
import Bg from "../assets/img/gradient.jpg";

export const BoxForm = styled.div`
    //overflow: hidden; 
    // &.sectionHeight {
    //     min-height: calc(100vh - 13.4rem);
    //     @media(max-width:${maxCol.sm}) {
    //         min-height: calc(100vh - 8.8rem);
    //     }
    // }
    // max-width: 75rem;
    // margin: auto;
      form {
        position: relative;
      }
     .statusInfo {
        margin: 2rem 0;
        position: absolute;
        top: 100%;
        display: none;
        padding: 1.5rem;
        width: 100%;
        font-size: 1.6rem;
        color: #fff;
        &.done {
            background: #1a0f07;
        }
        &.active {
            display: block;
        }
       &.error {
         background: darkred;
         color: #fff;
       }
     }

     // button {
     //    min-height: 6rem;
     //    width: 100%;
     //    display: block;
     //    max-width: calc(100% - 5rem*2);
     //    margin-left: auto;
     //    margin-right: auto;
     //    @media(max-width:${maxCol.sm}) {
     //        min-height: 5rem;
     //        max-width: 100%;
     //    }
     // }
     .Boxlink {
       margin-top: 1.6rem;
       font-weight: 400;
       font-size: 1.2rem;
       color: #fff;
       text-align: center;
       span {
         margin-right: 0.8rem;
       }
       a {
         color: #000000;
         &:hover {
           color: #fff;
         }
       }
     }
     .link-form {
        color: #000000;
        margin-top: 1.6rem;
        //margin-bottom: 1.6rem;
        display: inline-block;
        text-decoration: none;
        position: relative;
        font-size: 1.6rem;
        //&:after {
        //    content: '';
        //    width: 100%;
        //    height: 1px;
        //    background: #000;
        //    margin-top: 1px;
        //    display: block;
        //}
        &.sendcode {
          margin-top: 0rem;
          margin-bottom: 1.6rem;
          cursor: pointer;
        }
        &:hover {
            color: #fff;
            //&:after {
            //    background: #fff;
            //}
        }
     }
     label {
        width: 100%;
        display: block;
        margin-bottom: 1.6rem;
     }
     input {
        padding: 0 3.2rem;
        border: 1px solid #FFFFFF;
        border-radius: 5rem;
        width: 100%;
        display: block;
        height: 5.6rem;
        font-size: 1.6rem;
       color: #fff;
       background-color: rgba(0,0,0,0);
        &.error {
            border-color: #A12A2E;
        }
        &::placeholder {
            color: #fff;
            font-weight: 400;
        }
     }
`
export const Section = styled.section`
  min-height: calc(100vh - 8rem);
  background-image: url(${Bg});
  background-size: cover;
  background-position: center top;
  .box {
    max-width: 36rem;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  .title {
    font-weight: 700;
    font-size: 6.4rem;
    line-height: 7.2rem;
    color: #FFFFFF;
    margin: 0 0 6rem;
  }
  
`;
