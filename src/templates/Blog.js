import React, {useState} from 'react';
import Layout from '../components/Layout';
import {graphql, useStaticQuery} from "gatsby";
import styled from "styled-components";
import SliderPost from "../components/Blog/SliderPost";
import ClientSend from "../components/Blog/ClientSend";
import {maxCol} from "../function/SizeCol";
// import { useQuery, gql } from '@apollo/client';

// import BannerLite from '../components/constructor/banner/BannerLite'
// import ProductList from '../components/constructor/products/ProductList'
// import FilterBox from '../components/CategoryProduct/FilterBox';
// import ViewLastProducts from "../components/CategoryProduct/ViewLastProducts";
// import {localStoreService} from "../function/hook";

// const WEATHER_QUERY = gql`
//         query NewQuery($search: String! ) {
//             posts(where: {search: $search}) {
//                 nodes {
//                     id
//                     title
//                     content
//                     uri
//                 }
//             }
//         }
// `;

const Blog = (props) => {

    const data2 = useStaticQuery(graphql`
        {
            wp {
                allSettings {
                    generalSettingsTitle
                    generalSettingsDescription
                }
            }
            allWpPost {
                nodes {
                    title
                    uri
                }
            }
            allWpCategory {
                nodes {
                    title:name
                    uri
                }
            }
        }
    `);

    const title = props.pageContext.title;
    const generalTitle = data2.wp.allSettings.generalSettingsTitle;
    const allWpPost = data2.allWpPost;
    const allWpCategory = data2.allWpCategory;

    // console.log('page category >>>', props.pageContext)
    // const products = localStoreService.getLocal('ProductSave');

    // (where: {search: "output rate of hashrate"})

    // const [handle, setHandle] = useState(false);
    // function handleChange(event) {
    //     console.log(event.target.value);
    //     setHandle(event.target.value)
    // }
    //
    // const { loading, error, data } = useQuery(WEATHER_QUERY, {
    //     variables: { search : handle },
    // });

    // console.log('WEATHER_QUERY > data', data?.posts );
    // console.log('WEATHER_QUERY > allWpPost', allWpPost );

    return (
        <>
            <Layout customClass="section-pad-left" title={ title } desc={ generalTitle } >
                <Section1>
                    <div className="container">


                        <h1 className="title">
                            How can we
                            help you?
                        </h1>
                        <form className="WrapForm">
                            <div className="WrapInput">
                                {/*<input name="search" type="text" placeholder='Search' onChange={handleChange} />*/}
                                <button>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 0C13.968 0 18 4.032 18 9C18 13.968 13.968 18 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0ZM9 16C12.867 16 16 12.867 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16ZM17.485 16.071L20.314 18.899L18.899 20.314L16.071 17.485L17.485 16.071Z" fill="black"/>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </Section1>

                <Section2>
                    <div className="container">
                        {/*{*/}

                        {/*    !handle ? (*/}
                        {/*        <SliderPost s='white' title="Frequently Read Articles" item={allWpPost} />*/}
                        {/*    ) : (*/}
                        {/*        <SliderPost s='white' title="Frequently Read Articles" item={data?.posts} loading={loading} error={error} />*/}
                        {/*    )*/}
                        {/*}*/}
                        {/*<SliderPost s='white' title="Frequently Read Articles" item={allWpPost} />*/}
                        <SliderPost s='black' title="Browse All Categories" item={allWpCategory} />
                    </div>
                    <ClientSend />
                </Section2>



            </Layout>

        </>
    );
};
export default Blog;


const Section2 = styled.section`
  
`

const Section1 = styled.section`
    padding-top: 8rem;
    padding-bottom: 6rem;
      @media(max-width: ${maxCol.sm}) {
        padding-top: 6rem;
        padding-bottom: 4rem; 
      }
    border-bottom: 1px solid #D1D1D1;
    .title {
      background: linear-gradient(180deg, #D36BF8 0.01%, #862DCD 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      margin-bottom: 6rem;
      @media(max-width: ${maxCol.sm}) {
        margin-bottom: 2rem;
        margin-top: 0;
      }
    }
  
    .WrapInput {
      position: relative;
    }
    .WrapForm {
      max-width: 60rem;
      width: 100%;
      input {
        width: 100%;
        border: 1px solid #D1D1D1;
        border-radius: 5rem;
        height: 6.4rem;
        padding: 0 3.4rem 0 6.4rem;
        font-size: 1.6rem;
        background-color: rgba(0,0,0,0);
      }
      button {
        padding: 2.2rem 2rem 2.2rem 3.4rem;
        border: none;
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: rgba(0,0,0,0);
      }
    }
`