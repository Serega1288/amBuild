import React, {useState} from 'react';
import Layout from '../components/Layout';
import {graphql, Link, useStaticQuery} from "gatsby";
import styled from "styled-components";
import ArrowLeft from './../assets/img/svg/arrowLeft.svg'
import ArrowRight from './../assets/img/svg/arrowReft.svg'
import Star from './../assets/img/svg/star.svg'
import StarOk from './../assets/img/svg/starOk.svg'
import ClientSend from "../components/Blog/ClientSend";
import {minCol} from "../function/SizeCol";
import {gql, useQuery} from "@apollo/client";
import BlogItemPost from "../components/Blog/BlogItemPost";
// import SliderPost from "../components/Blog/SliderPost";


const Blog = (props) => {

    const WEATHER_QUERY = gql`
        query NewQuery($search: String, $categoryName: String ) {
            posts(where: {search: $search, categoryName: $categoryName}) {
                nodes {
                    id
                    title
                    content
                    uri
                    ACFpost {
                        helpfulYes
                        helpfulNo
                        briefDescription
                    }
                }
            }
        }
    `;

    const data2 = useStaticQuery(graphql`
        {
            wp {
                allSettings {
                    generalSettingsTitle
                    generalSettingsDescription
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

    const title = props.pageContext.name;
    const generalTitle = data2.wp.allSettings.generalSettingsTitle;
    const post = props.pageContext.posts;
    const categories = data2.allWpCategory;

    // console.log('page category >>>', props.pageContext )

    // const products = localStoreService.getLocal('ProductSave');

    const [handle, setHandle] = useState(false);
    function handleChange(event) {
        console.log(event.target.value);
        setHandle(event.target.value)
    }

    const { loading, error, data } = useQuery(WEATHER_QUERY, {
        variables: { search : handle, categoryName : props.pageContext.name },
    });

    return (
        <>
            <Layout customClass="section-pad" title={ title } desc={ generalTitle } >
                <Section1>
                    <div className="container">
                        <div className="WrapNav">
                            <Link className='ArrowLeft' to="../">
                                <span style={{marginLeft: `1rem`}}>Back</span>
                            </Link>
                        </div>
                        <form className="WrapForm">
                            <div className="WrapInput">
                                <input name="search" type="text" placeholder='Search' onChange={handleChange} />
                                <button>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 0C13.968 0 18 4.032 18 9C18 13.968 13.968 18 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0ZM9 16C12.867 16 16 12.867 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16ZM17.485 16.071L20.314 18.899L18.899 20.314L16.071 17.485L17.485 16.071Z" fill="black"/>
                                    </svg>
                                </button>
                            </div>
                        </form>

                        <div className="WrapListCategoryPost">
                            <div className="row">
                                <div className="col-12 col-sm-auto">
                                    <div className="WrapMenu h100">
                                        <div className="title">
                                            Categories
                                        </div>
                                        <div className="list">
                                            {categories.nodes.map( (item, index) => (
                                                <Link to={item.uri} key={`allWpCategory-${index}`}>
                                                    {item.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm">

                                    <div className="post h100">
                                        <div className="category-title">
                                            Articles on:<strong>{title}</strong>
                                        </div>
                                        <div className="category-post">
                                            {
                                                !handle ? (
                                                    <BlogItemPost post={post} />
                                                ) : (
                                                    <BlogItemPost post={data?.posts} loading={loading} error={error} />
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Section1>

                <Section2>
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
  margin-bottom: 10rem;
  padding-top: 3rem;
  .post { 
      padding: 2rem;
        @media(min-width: ${minCol.sm}) {
          padding: 4rem;
        }
    .item-post {
      border: 1px solid #C3C3CF;
      border-radius: 1.8rem;
      padding: 2.4rem;
      margin-bottom: 1.6rem;
      display: block;
      .desc {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 130%;
        color: #000;
      }
      .title {
        font-size: 1.8rem;
        padding-right: 3rem;
        position: relative;
        color: #000;
        margin-bottom: 2.5rem;
        &:before {
          content: '';
          display: block;
          background-image: url(${ArrowRight});
          background-repeat: no-repeat;
          background-position: center right;
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          z-index: 1;
          width: 1.6rem;
          height: 1.6rem;
          margin: auto;
        }
      }
    }
    .star-title {
      font-weight: 700;
      font-size: 1.2rem;
      margin-bottom: 0.7rem;
      color: #000;
    }
    .star { 
      width: 8rem; 
      height: 0.6rem;
      background-repeat: no-repeat;
      background-size: 8rem 0.6rem;
      background-image: url(${Star});
      background-position: left center;
      position: relative;
      span {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
        width: 0;
        background-image: url(${StarOk});
        background-size: 8rem 0.6rem;
        background-position: left center;
        display: block;
      }
    }
  }
  .category-title {
    font-weight: 400;
    font-size: 2.4rem;
    margin-bottom: 2rem;
    @media(min-width: ${minCol.sm}) {
      margin-bottom: 4rem;
    }
    strong {
      margin-left: 1.6rem;
      display: inline-block;
    }
  }
  .WrapMenu {
    background: #F5F5F7;
    padding: 4rem 0 4rem 3.2rem;
    @media(min-width: ${minCol.sm}) {
      min-height: 60rem;
      width: 31.2rem;
    }
    .title {
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 2.4rem;
      margin-bottom: 1.6rem;
    }
    .list {
      a { 
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.4rem;
        margin-bottom: 0.6rem;
        @media(min-width: ${minCol.sm}) {
          margin-bottom: 1.6rem;
        }
        color: #000;
        display: block;
        padding-right: 3.2rem;
        position: relative;
      }
      [aria-current="page"] {
        font-weight: 700;
        border-right: 2px solid #000;
      }
    }
  }
  .WrapListCategoryPost {
    background: #FFFFFF;
    box-shadow: 3px 4px 12px rgba(0, 0, 0, 0.05), 0px 1px 8px rgba(0, 0, 0, 0.05), 6px 4px 18px rgba(0, 0, 0, 0.08);
    border-radius: 1.8rem;
  }
  .ArrowLeft {
    background-image: url(${ArrowLeft});
    background-position: center left 0.25rem;
    color: #000;
    background-repeat: no-repeat;
    padding-left: 2.4rem;
    font-weight: 500;
    font-size: 1.4rem;
  }
  .WrapInput {
    position: relative;
  }
  .WrapForm {
    margin-top: 2.4rem;
    margin-bottom: 3.2rem; 
    width: 100%;
    input {
      width: 100%;
      border: 1px solid #D1D1D1;
      border-radius: 5rem;
      height: 6.4rem;
      padding: 0 3.4rem 0 7rem;
      font-size: 1.6rem;
      background-color: rgba(0,0,0,0);
    }
    button {
      padding: 0 2rem 0 3.4rem;
      border: none;
      position: absolute;
      cursor: pointer;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      background-color: rgba(0,0,0,0);
      svg {
        width: 2.2rem;
        height: 2.2rem;
      }
    }
  }
`