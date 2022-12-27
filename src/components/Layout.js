import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalFonts from '../styles/GlobalFonts';
import GlobalCols from '../styles/GlobalCols';
import  GlobalStyles from '../styles/GlobalStyles';
import  Header from './header/Header';
import  Footer from './footer/Footer';
import styled from "styled-components";
import {maxCol} from "../function/SizeCol";

const Layout = ( {children, title, desc, customClass } ) => {
    return (
        <div className="body">
            <Helmet>
                <title>{ title } | { desc }</title>
            </Helmet>
            <GlobalFonts />
            <GlobalCols />
            <GlobalStyles />
            <Header/> 
            <Main className={customClass} >{children}</Main>
            <Footer/>
        </div>
    )
};

export default Layout;

const Main = styled.main`
      min-height: 50vh;
`;
