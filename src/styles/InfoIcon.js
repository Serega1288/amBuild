import styled from "styled-components";

const InfoIcon = styled.div`
    span {
        font-weight: 400;
        font-size: 1.4rem;
    }
    .desc {
         position: absolute;
         left: 0;
         z-index: 2; 
         padding: 2rem;
         font-size: 1.4rem;
         background: #000;
         display: inline-flex;
    }
`;
export default InfoIcon;