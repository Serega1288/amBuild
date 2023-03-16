import styled from "styled-components";
import EyeOn from '../assets/img/svg/eye-on.svg'
import EyeOff from '../assets/img/svg/eye-off.svg'

const EYE = styled.div` 
  .WrapPassword {
    position: relative;
    span {
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 1.5rem;
      z-index: 1;
      width: 3.5rem;
      height: 3.5rem;
      background-color: black;
      cursor: pointer;
      margin: auto;
      border-radius: 50%;
      background-image: url(${EyeOff});
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 2.5rem auto;
      &.active {
        background-size: 2.25rem auto;
        background-image: url(${EyeOn});
      }
    }
    input {
      padding-right: 5rem !important;
    }
  }
`
export default EYE;