import styled from "styled-components";
import {maxCol, minCol} from "../function/SizeCol";



const ProductItem = styled.div`
    padding-top: 125%;
    position: relative;
    .LinkBox {
        position: absolute;
        top: 0;
        bottom:0;
        right:0;
        left:0;
        z-index: 1;
    }
    .a {
        color: #fff;
        background: #000000;
        border-radius: 1.8rem;
        padding: 3rem;
        padding: 3rem 1rem 3rem 3rem;
        @media (max-width: ${maxCol.sm}) {
            padding: 2rem;
        }
        display: flex;
        flex-direction: column;
        position: absolute;
        top:0;
        bottom:0;
        left: 0;
        right:0;
        background-repeat: no-repeat;
        background-position: center bottom;
        & > .row {
            margin-top: auto;
        }
    }
    .category {
        letter-spacing: 0.1em;
        color: #C0BFBF;
        font-weight: 600;
        font-size: 2rem;
        margin-bottom: 1.6rem;
    }
    .title {
        font-weight: 600;
        font-size: 4.8rem;
    }
    .sor {
        font-weight: 700;
        font-size: 2.4rem;
    }
    .BtnWrap {
        padding: 1.5rem 2rem;
        text-align: center;
        background: #FFFFFF;
        border-radius: 5rem;
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2.6rem;
        color: #000;
        position: relative;
        span {
            
        }
        .price {
            opacity: 1;
        }
        .textBtn { 
            position: absolute;
            top:0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1;
            opacity:0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &:hover {
            .price {
                opacity: 0;
            }
            .textBtn {
                opacity: 1;
            }
        }
    }
`;
export default ProductItem;