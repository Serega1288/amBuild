import {createGlobalStyle} from "styled-components";
import {minCol, maxCol} from "../function/SizeCol";
import Inter from '../assets/fonts/Inter/Inter-Regular.woff2';
import InterBold from '../assets/fonts/Inter/Inter-Bold.woff2';
import InterMedium from '../assets/fonts/Inter/Inter-Medium.woff2';
import InterSemiBold from '../assets/fonts/Inter/Inter-SemiBold.woff2';


const GlobalFonts = createGlobalStyle`
@font-face {
    font-family: 'Inter';
    font-style: normal; 
    font-weight: 400; 
    src: url("${Inter}") format("woff2");
}
@font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;  
    src: url("${InterMedium}") format("woff2");
} 
@font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;  
    src: url("${InterSemiBold}") format("woff2");
}
@font-face {
    font-family: 'Inter'; 
    font-style: normal;
    font-weight: 700; 
    src: url("${InterBold}") format("woff2");
} 

        h1, h2, h3, h4 {
             
         }
         h1, .h1 {
            font-size: 4.8rem;
            line-height: 5.6rem;
            margin-top: 4rem;
            margin-bottom: 4rem;
            @media (max-width: ${maxCol.sm}) {
                font-size: 3.2rem;
                line-height: 4rem;
                margin-top: 3rem;
                margin-bottom: 3rem;
            } 
         }
         h2, .h2 {
            font-size: 3.2rem; 
            line-height: 4rem;
            margin-top: 3rem;
            margin-bottom: 3rem;
            @media (max-width: ${maxCol.sm}) {
                font-size: 2.8rem;
                line-height: 3.6rem;
                margin-top: 2rem;
                margin-bottom: 2rem;
            }
         }
         h3, .h3 {
            font-size: 2.8rem;
            line-height: 3.6rem;
            margin-top: 2rem;
            margin-bottom: 2rem;
            @media (max-width: ${maxCol.sm}) {
               font-size: 2rem;
                line-height: 3rem;
                margin-top: 1rem;
                margin-bottom: 1rem; 
            }
         }
         h4, .h4 {
            font-size: 2rem;
            line-height: 3rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
            @media (max-width: ${maxCol.sm}) {
                font-size: 1.8rem;
                line-height: 2.6rem;
            }
         }
         p, ul, ol {
            font-size: 1.8rem;
            line-height: 2.6rem;
            @media (max-width: ${maxCol.sm}) {
                font-size: 1.6rem;
                line-height: 1.5;
            }
         }
         ul, ol {
            padding-left: 2rem; 
         }

`;
export default GlobalFonts;