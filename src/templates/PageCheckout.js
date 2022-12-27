import React from 'react';
import Layout from '../components/Layout';
import {graphql, useStaticQuery} from "gatsby";
import Const from "../components/constructor/Constructor";

const PageCheckout = (props) => {

    const data = useStaticQuery(graphql`
        {
            wp {
                allSettings {
                    generalSettingsTitle
                    generalSettingsDescription
                } 
            }
        }
    `);

    const list = props.pageContext.ACFconstructor.const;
    const title = props.pageContext.title;
    const generalTitle = data.wp.allSettings.generalSettingsTitle;

    //console.log('pageCheckout >>>', props)

    return (
        <>
            <Layout customClass="section-pad" title={ title } desc={ generalTitle } >
                <Const href={props.location.href} props={list} />
            </Layout>

        </>
    );
};
export default PageCheckout;