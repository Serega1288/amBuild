import React from 'react';
import Layout from '../components/Layout';
import {graphql, useStaticQuery} from "gatsby";
import styled from "styled-components";

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

    // const list = props.pageContext.ACFconstructor.const;
    const title = props.pageContext.title;
    const generalTitle = data.wp.allSettings.generalSettingsTitle;
    const generalDescription = data.wp.allSettings.generalSettingsDescription;


    // console.log('page >>>', props.pageContext.content)

    return (
        <>
            <Layout customClass="section-pad" title={ title === 'home' ? generalTitle : title } desc={ title === 'home' ? generalDescription : generalTitle } >
                <Section className="section default-page">
                    <div className="container">
                        <div className="text" dangerouslySetInnerHTML={{__html: props.pageContext.content}} />
                    </div>
                </Section>
            </Layout>

        </>
    );
};
export default FrontPage;

const Section = styled.section`
      
`;