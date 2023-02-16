import { createGlobalStyle } from 'styled-components'
import {minCol, maxCol} from "../function/SizeCol"
import imgBtn2 from "../assets/img/svg/imgBtn2.svg"
import imgBtn2W from "../assets/img/svg/imgBtn2W.svg"
import svgSelect from "../assets/img/svg/select.svg"

const GlobalStyles = createGlobalStyle`  
.ovh {
    overflow: hidden;
}
img {  
    max-width: 100%;
}
/* width */
::-webkit-scrollbar {
  width: 2px;
  height: 4px;
}
// #86644B
/* Track */
::-webkit-scrollbar-track {
  background-color: #f7f4ed; 
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #862DCD;
}

.grey { 
    //filter: grayscale(100%);
}
.grey_off { 
    filter: none;
}
 
.pos {
    position: relative;
}
.z-in-1 {
    z-index: 1;
}
.z-in-2 {
    z-index: 2;
}
.h100 {
    height: 100%;
} 
.h50 {
    height: 50%;
}
.mh100 {
  min-height: 100%;
}
.mh50 {
  min-height: 50%;
}
.w100 {
    width: 100%;
}

.ul-clear {
    margin: 0;
    padding: 0;   
}
.ul-clear li::marker {
   font-size: 0;
}

.p-0 {
    padding:0;
}
.m-0 {
    margin:0;
}

.text-center {
    text-align: center;
}
.text-right {
  text-align: right;
}

.body {
    overflow: hidden;   
    padding-top: 8rem;
}
 
p { 
    margin: 0 0 2rem;
    @media (max-width: ${maxCol.sm} ) {
        margin: 0 0 1rem;
    }
}

* {
  outline: none;
}

strong {
   font-weight: 700;
}

html {
    font-size: 50%;
    --bs-gutter-x: 1.6rem;
    @media (min-width: ${minCol.sm} ) { 
        font-size: 35%; 
    }
    
    @media (min-width: ${minCol.md} ) {
        
    }
    
    @media (min-width: ${minCol.lg} ) {
        font-size: 55%;
    }
    
    @media (min-width: ${minCol.xl}) {
        
    }
     
    @media (min-width: ${minCol.xxl}) {
        font-size: 62.5%;
    } 
}
 
body {
    min-height: 100vh;
    background-color: #F5F5F7; 
    margin: 0;
    font-size: 2rem; 
    line-height: 1.4;  
    font-family: 'Inter';
    color: #000;
    font-weight: 400;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    @media (max-width: ${maxCol.sm}) {

    }
} 
a {
    color: #6357FF;
    text-decoration: none;
}
ul {
    a {
        color: #6357FF;
        &:hover {
            color: #6357FF; 
        }
    }
}
.anim, a, .a, .btn, .btn svg, .btn path, .btn:before, .btn:after , input, a:after, a:before, a div, .WrapSelect .list, .WrapSelect .input:before {
    transition: all 0.5s ease;  
}
  
.a-style-clear {
    display: initial;
    text-decoration: none;
}
 
.btn {
    cursor: pointer; 
    display: inline-block;
    text-decoration: none;
    &.w100 {
        width: 100%;
    }
    &.style-1 {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 1; 
        padding: 1rem 2.4rem;
        border: 1px solid #FFFFFF;
        border-radius: 5rem;
           
        color: #fff;
        & +  &.style-1 { 
            margin-left:1.2rem;
        } 
        &:hover, &:focus, &[aria-current="page"] { 
            background-color: #FFFFFF;
            color: #000;
        }
    } 
    &.style-2 {
        font-size: 1.2rem;
        border: 1px solid #000;
        color: #000; 
        border-radius: 5rem;
        padding: 1.4rem 4.6rem 1.4rem 2.4rem;
        background-image: url(${imgBtn2});
        background-position: center right 2.4rem;
        background-repeat: no-repeat;
        &:hover, &:focus, &[aria-current="page"] { 
            background-image: url(${imgBtn2W});
            background-color: #000;
            color: #fff;
        }
    }
    &.style-3 {
        font-size: 1.6rem;
        border: 1px solid #000;
        color: #fff; 
        text-align: center;
        border-radius: 5rem;
        padding: 1.6rem 2.4rem;
        background-color: #000;  
        &:hover, &:focus { 
            background-color: rgba(0,0,0,0);
            color: #000;
        }
    }
      &.style-4, &.style-5 {
        font-size: 1.6rem;
        border: 1px solid #000;
        color: #000;
        text-align: center;
        border-radius: 5rem;
        padding: 1.6rem 2.4rem;
        background-color: rgba(0,0,0,0);
        &:hover, &:focus, &.active { 
          color: #fff;
          background-color: #000;
          svg path { 
            fill: #fff;
          }
        }
      }

      &.style-5 {
        display: inline-flex;
        align-items: center;
        padding: 2rem 3.4rem;
        strong {
          margin-left: 1.2rem;
          font-size: 1.6rem;
        }
      }
} 
      
.garbage {
        position: absolute;
       height: 0 !important; 
       width: 0 !important; 
       opacity: 0 !important;
       z-index: -1000 !important;
}

.section {
    margin-top: 10rem;
    margin-bottom: 10rem;
    @media (max-width: ${maxCol.sm}) {
        margin-top: 5rem;
        margin-bottom: 5rem;
    }
}

.block-title {
    font-weight: 500;
    span.color {
        color: #B9B9B9;
    }
} 

@media (min-width: ${minCol.lg} ) { 
    main { 
        &.section-pad-left { 
            .container { 
                padding-left: 8rem;
            }
        }   
        &.section-pad {
            .container { 
                padding-left: 8rem;
                padding-right: 8rem;
            } 
        }

        &.section-pad-min { 
          .container { 
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }
      
    }
}
 .icon-info {
        & + span {
            padding: 0.7rem;
        } 
        display: inline-flex;
        border-radius: 50%;
        width: 1.4rem; 
        height: 1.4rem;
        position: relative;
        &.style-1 {
            svg path {
                fill: #C0BFBF;
            }
        }
        &.style-2 { 
            svg path {
                fill: #fff;
            }
        }
        
        &.position-left {
        
        }
        
        &.position-left {
                .visBlock {
                    right: calc(100% + 1.4rem);
                    left: auto;
                    &:before {
                        right: -1rem;
                        left: auto;
                            transform: rotate(180deg);
                    }
                }
        }
    }
    .visBlock {
        z-index: 10;
        display: none;
        position: absolute;
        left: calc(100% + 2rem);
        transform: translate(0px, calc(-50% + 0.7rem) );
        top: 0;
        width: 25rem;
        @media (max-width: ${maxCol.sm}) {
          width: 20rem;
        }
        font-size: 1.4rem;
        padding: 1rem; 
        background: #000;
        border-radius: 1.6rem;
        color: #fff;
        &:before {
            content: '';
            display: block;
            position: absolute;
            margin: auto;
            top: 0;
            bottom: 0;
            left: -1rem;
            width: 0;
            height: 0;
            border-top: 0.7rem solid transparent;
            border-right: 1rem solid #000;
            border-bottom: 0.7rem solid transparent;
        }
    }
    .WrapIconInfo {
        cursor: pointer;
    }
    .WrapIconInfo:hover {
        .visBlock {
            display: block;
        }
    }
    
    .pop {
      overflow: auto;
      position: fixed;
      padding-top: 10rem;
      padding-bottom: 10rem;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      @media (max-width: ${maxCol.md}) {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }
      z-index: 100;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      &.active {
        opacity: 1;
        visibility: visible;
      }
      .exit {
        position: absolute;
        top: 2.5rem;
        right: 2.5rem;
        z-index: 2;
        cursor: pointer;
      }
      .shadow {
        cursor: pointer;
        background-color: rgba(0,0,0,0.78);
        z-index: 1;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      .boxForm {
        position: relative;
        color: black;
        z-index: 2;
        background-color: #ffff;
        padding: 8rem 12rem 6rem;
        border-radius: 1.8rem;
        box-shadow: 3px 4px 12px rgba(0, 0, 0, 0.05), 0px 1px 8px rgba(0, 0, 0, 0.05), 6px 4px 18px rgba(0, 0, 0, 0.08);
        @media (max-width: ${maxCol.md}) {
          padding: 4rem 3rem 4rem;
        }
      }
      .WrapForm {
        max-width: 56rem;
        width: 100%;
      }
      .title {
        font-weight: 700;
        font-size: 6.4rem;
        margin-bottom: 6rem;
        @media (max-width: ${maxCol.md}) {
          font-size: 4rem;
          margin-bottom: 3rem;
        }
      }
    }
    
    .maxTextError {
      color: darkred !important;
    }
    .PopThanks {
      .title {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
    }
    .styleFormNorm {
      .WrapRadio {
        position: relative;
        input {
          position: absolute;
          border: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;
          border: none;
          padding: 0;
          height: 1px;
          width: 1px;
          margin: auto;
        }
        .list {
          .item {
            cursor: pointer;
            font-size: 1.6rem;
            margin-bottom: 1rem;
            display: flex;
            align-items: center; 
            span {
              display: inline-block;
              border-radius: 0.4rem;
              width: 1.8rem;
              height: 1.8rem;
              border: 2px solid #000;
              margin-right: 1.3rem;
              background-color: rgba(0,0,0,0);
              transition: all 0.5s ease;
            }
            &.active {
              span {
                background-color: black;
              }
            }
          }
        }
      } 
      
      .WrapSelect {
        position: relative;
        input {
          position: absolute;
          border: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2; 
          border: none;
          padding: 0;
          height: 1px;
          width: 1px; 
          margin: auto;
        }
        .BoxSelect {
          
        }
        .input {
          position: relative;
          cursor: pointer;
          display: flex;
          align-items: center;
          &:before {
            content: '';
            position: absolute;
            width: 1.38rem;
            top: 0;
            bottom: 0;
            right: 2.45rem;
            height: 0.8rem;
            background-image: url(${svgSelect});
            background-repeat: no-repeat;
            background-position: center center;
            transform: rotate(0deg);
            background-size: cover;
            margin: auto;
          }
        }
        .list {
          opacity: 0;
          visibility: hidden;
          position: absolute;
          top: calc(100% + 1rem);
          left: 0;
          right: 0;
          z-index: 3;
          font-size: 1.4rem;
          border: 1px solid #000000;
          border-radius: 2rem;
          background-color: #fff;
          div {
            padding: 1rem 2rem;
            cursor: pointer;
            &:first-child {
              padding-top: 1.5rem;
              border-radius: 2rem 2rem 0 0;
            }
            &:last-child {
              padding-bottom: 1.5rem;
              border-radius: 0 0 2rem 2rem;
            }
            &:hover, &.active {
              background-color: black;
              color: #fff;
            }
          }
        }
        &.open-true {
          .input {
            &:before {
              transform: rotate(180deg);
            }
          }
          .list {
            opacity: 1;
            visibility: visible;
          }
        }
      }
      .input {
        font-weight: 400;
        font-size: 1.6rem;
        border: 1px solid #000000;
        border-radius: 5rem;
        padding: 0 3rem;
        height: 5.6rem;
        width: 100%;
      }
      .WrapInput {
        margin-bottom: 1.6rem;
      }
      label {
        margin-top: 3.2rem;
        margin-bottom: 1.8rem;
        display: block;
        font-size: 1.6rem;
        line-height: 1;
        strong {
          font-weight: 700;
          font-size: 1.8rem;
        }
        p { 
          color: #AEAEAE;
          margin: 0.8rem 0 0;
          font-size: 1.6rem;
          line-height: 1;
        }
      }
      textarea {
        font-size: 1.6rem !important;
        padding: 2.4rem !important;
        min-height: 16rem;
        border-radius: 1.8rem !important;
      }
      button {
        height: 5.6rem;
        margin-top: 2.5rem;
        max-width: 18rem;
      }
    }
`;

export default GlobalStyles;
