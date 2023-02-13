import styled from "styled-components";
import {maxCol, minCol} from "../function/SizeCol";

const Section = styled.section` 
         &.black {
           .item {
             background: #000000;
           }
           .title {
             color: #fff;
           }
         }
         &.post {
           padding-top: 8rem;
           padding-bottom: 7rem;
           + .post {
             padding-top: 0;
           }
           .swiper-slide {
             width: 31.3rem;
           }
           .item {
             padding: 4rem 3rem;
             max-width: 31.3rem;
             min-height: 24rem;
             .title {
               font-weight: 600;
               font-size: 2.8rem;
             }
           }
           .block-title {
             font-size: 2.8rem;
             font-weight: 500;
           }
           .text {
             padding-top: 0rem !important;
           }
         }
         .icon-img {
            border-radius: 50%;
            overflow: hidden; 
            width: 13.6rem;
            height: 13.6rem;
            margin-bottom: 3.2rem;
            background-size: contain;
         }
         .h2 {
            color: #000000; 
            font-weight: 600; 
            margin-bottom: 0.8rem;
            margin-top: 0rem; 
         }
         .item {
            height: 100%;
            background: #FFFFFF;
            box-shadow: 3px 4px 12px rgba(0, 0, 0, 0.05), 0px 1px 8px rgba(0, 0, 0, 0.05), 6px 4px 18px rgba(0, 0, 0, 0.08);
            border-radius: 1.8rem;
            padding: 3rem;
            max-width: 48rem;
         }
         .box-img {
            padding: 0;
            padding-top: 24rem;
            .img {
                position: absolute;
                top:0;
                bottom:0;
                left: 0;
                right: 0;
                z-index: 1;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            img {
                width: auto;
                height: auto;
                max-width: 80%;
            }
         }
         .h4 {
            margin: 0;
         }
         .text {
            margin-top: auto;
            padding-top: 2rem;
         }
         &:not(.boxSlider):not(.BtnWrap) {
            .text { 
                padding-top: 6rem;
                @media (max-width: ${maxCol.sm}) {
                    padding-top: 3rem;
                }
             }
         }
         &.boxSlider {
            .swiper-slide {
                 width: 100%;
                 width: 31.7rem;
                 margin-right: 0rem;
            }
            .item {
                position: relative;
            }
            .block-title {
                font-size: 2.8rem;
            }
         }
         .swiper-slide {
            height: auto;
            width: 48rem;
            @media (max-width: ${maxCol.sm}) {
                width: 34rem;
            }
            margin-right: 1rem; 
            @media (min-width: ${minCol.sm}) {
                margin-right: 1rem; 
            }
            @media (min-width: ${minCol.md}) {
                margin-right: 2rem;  
            }
            margin-top: 2rem;
            margin-bottom: 2rem;
         }
         .swiper-scrollbar {
            display: none;
         }
         .swiper {
            overflow: inherit;
             
         }
         .swiper-button-lock {
            display: none;
         }
         .swiper-button-next, .swiper-button-prev {
            position: absolute;
            top: -9rem;
            right: 0;
            z-index: 10;
            width: 5.6rem;
            height: 5.6rem;
            border: 1px solid #000000;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.5s ease;
            svg {
              width: 1.6rem;
              height: 1.6rem;  
            }
            svg, svg path {
                    fill: #000;
                    transition: all 0.5s ease;
            }
            &.swiper-button-disabled {
                border: 1px solid #cbcbcb;
                svg, svg path {
                    fill: #cbcbcb
                }
            }
            @media (max-width: ${maxCol.sm}) {
                position: static;
            }
         }
         
         .swiper-button-next {
         
         }
         .swiper-button-prev {
            right: calc( 5.6rem + 2.4rem );
            @media (max-width: ${maxCol.sm}) {
                margin-right: 2rem;
            }
         }
         .block-title {
            margin-bottom: 3rem;
         }
         .swiper-wrapper {
            height: auto;
         }
         
         &.SliderContentImage {
            .swiper-slide {
                width: 98rem;
                @media (max-width: ${maxCol.lg}) {
                    width: 65rem;
                }
                @media (max-width: ${maxCol.sm}) {
                    width: 34rem !important; 
                }
                h2 {
                    font-size: 2.8rem;
                    font-weight: 500; 
                }
                .item {
                    max-width: 100%;
                    min-height: 50rem;
                    padding: 4rem 3rem;
                    background-size: contain;
                    text-shadow: 0.5px 0.5px 0.5px #fff; 
                    @media (max-width: ${maxCol.sm}) {
                        text-shadow: 0.5px 0.5px 1px #fff; 
                    }
                    &.style-color * {
                        color: #fff;
                        @media (max-width: ${maxCol.sm}) {
                            text-shadow: 0.5px 0.5px 1px #000000;
                        }
                    }
                    @media (max-width: ${maxCol.lg}) {
                        min-height: initial;
                        background-size: cover;
                        background-position: right;
                    }
                }
            }
         }
         
`;
export default Section;