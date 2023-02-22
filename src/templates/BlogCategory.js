import React, {useState} from 'react';
import Layout from '../components/Layout';
import {graphql, Link, useStaticQuery} from "gatsby";
import ClientSend from "../components/Blog/ClientSend";

import {gql, useQuery} from "@apollo/client"
import BlogItemPost from "../components/Blog/BlogItemPost"
import Section1 from '../styles/boxNav'

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

                <section>
                    <ClientSend />
                </section>



            </Layout>

        </>
    );
};
export default Blog;
