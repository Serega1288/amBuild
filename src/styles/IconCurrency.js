import styled from "styled-components";
import CKB from "../assets/icon/CKB.png"
import DCR from "../assets/icon/DCR.png"
import FIL from "../assets/icon/FIL.png"
import HNS from "../assets/icon/HNS.png"
import KDA from "../assets/icon/KDA.png"
import LTC from "../assets/icon/LTC.png"
import ZEC from "../assets/icon/ZEC.png"

const IconCurrency = styled.div`
    .iCurrency {
      width: 3.2rem;
      height: 3.2rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      &:before {
        content: '';
        display: inline-flex;
        width: 100%;
        height: 58%;
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-position: center center;
      }
    }
    .KDA { background-color: #69009A; &:before {  background-image: url(${KDA}); } }
    .CKB { background-color: #69009A; &:before {  background-image: url(${CKB}); } }
    .DCR { background-color: #69009A; &:before {  background-image: url(${DCR}); } }
    .FIL { background-color: #69009A; &:before {  background-image: url(${FIL}); } }
    .HNS { background-color: #69009A; &:before {  background-image: url(${HNS}); } }
    .LTC { background-color: #69009A; &:before {  background-image: url(${LTC}); } }
    .ZEC { background-color: #69009A; &:before {  background-image: url(${ZEC}); } }
`;
export default IconCurrency;