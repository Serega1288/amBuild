import React from 'react';
import {graphql, Link, useStaticQuery} from "gatsby";
import styled from "styled-components";
import {maxCol} from "../../function/SizeCol";

const FilterBox = (props) => {

    const data = useStaticQuery(graphql`
        {
            allWpProductCategory(sort: {fields: ACFOrderFilter___orderfilter}) {
                nodes { 
                    name
                    uri 
                    slug
                    ACFcategoryIcon {
                        icon {
                            localFile {
                                publicURL
                            }
                        }
                    }
                    ACFOrderFilter {
                        orderfilter
                    }
                }
            }
        }
    `)

    //console.log('page category >>>', data.allWpProductCategory.nodes )

    return (
        <Section>
            <div className="container">
                <div className="WrapFilters">
                    <div className="WrapFilCat d-flex align-items-center">
                        {data.allWpProductCategory.nodes.map( (item, index) => (
                            <div className="itemFilCat" key={index}>
                                <Link to={item.uri}>
                                    {
                                        item.ACFcategoryIcon?.icon ? (
                                            <img src={item.ACFcategoryIcon.icon.localFile.publicURL} alt=""/>
                                        ) : ''
                                    }

                                    <span>{item.ACFOrderFilter.orderfilter === 1 ? `All` : (item.name)}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}
export default FilterBox;


const Section = styled.section`
      .WrapFilters {
        margin-top: 4rem;
      }
      .WrapFilCat {
        margin-top: 4rem;
        flex-wrap: wrap;
        margin-left: -0.7rem;
        margin-right: -0.7rem;
        @media (max-width: ${maxCol.xl}) {
            margin-left: -0.3rem;
            margin-right: -0.3rem;
        }
        .itemFilCat {
              flex: 0 0 auto;
              width: 12.5%;
              @media (max-width: ${maxCol.md}) {
                width: 20%;
              }
              @media (max-width: ${maxCol.sm}) {
                width: 33%;
              }
              margin-bottom: 1rem;
           }
        }
      }
      .itemFilCat {
        padding-left: 0.7rem;
        padding-right: 0.7rem;
        @media (max-width: ${maxCol.xl}) {
            padding-left: 0.3rem;
            padding-right: 0.3rem;
        }
        width: 100%;
        img {
            padding: 0.2rem;
            border-radius: 0.2rem;
            max-width: 2.8rem;
            width: auto;
            & + span {
                margin-left: auto;
            }
        }
         a {
            height: 5rem;
            border-radius: 7.5rem;
            border: 1px solid #c3c3cf;
            display: flex; 
            align-items: center;
            justify-content: center;
            padding: 1rem 2rem;
            @media (max-width: ${maxCol.xl}) {
                padding: 1rem 1.5rem;
            }
            width: 100%;
            text-align: center;
            font-size: 1.4rem;
            font-weight: 600;
            color: #000;
            &[aria-current="page"] {
                background-color: #000000;
                border: 1px solid #000;
                color: #fff;
                img {
                    background: #fff;
                }
            }
            span {
                white-space: pre;
            }
         }
      }
`;