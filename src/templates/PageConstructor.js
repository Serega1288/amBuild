import React from 'react';
import Layout from '../components/Layout';
import {graphql, useStaticQuery} from "gatsby";
import Const from "../components/constructor/Constructor";

const FrontPage = (props) => {

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
    const generalDescription = data.wp.allSettings.generalSettingsDescription;


    //console.log('page >>>', props)

    return (
        <>
            <Layout customClass="section-pad-left" title={ title === 'home' ? generalTitle : title } desc={ title === 'home' ? generalDescription : generalTitle } >
                <Const type='page' href={props.location.href} props={list} />
            </Layout>

        </>
    );
};
export default FrontPage;