import React, {useEffect, useState} from 'react';
import Layout from '../components/Layout';
import {graphql, Link, useStaticQuery} from "gatsby";
import styled from "styled-components";
import ArrowLeft from './../assets/img/svg/arrowLeft.svg'
// import SliderPost from "../components/Blog/SliderPost";
import {localStoreService} from "../function/hook";
import {maxCol} from "../function/SizeCol";
// import useFormStar from "../function/useFormStar";


const PagePost = (props) => {

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
    const author = props.pageContext.author.node.ACFuser;
    // const rPosts = props.pageContext.related_posts;

    const Yes = props.pageContext.ACFpost.helpfulYes;
    const No = props.pageContext.ACFpost.helpfulNo;
    const All = Yes + No;

    // console.log('post >>>', props.pageContext )

    const [help] = useState( localStoreService.getLocal('Helpful') || [] );
    const [helpStart, setHelpStart] = useState( 0 )

    const id = props.pageContext.id;
    const baseID = props.pageContext.databaseId;

    useEffect(() => {
        help.forEach((item, index) => {
            // console.log('help >>>', index, item)
            if( item['id'] === id ) {
                setHelpStart(item['op'])
            }
        });
    }, []);

    // const helpful = async (op1, op2) => {
    //     if ( op2 === 0 ) {
    //         let ob = { id: id, baseID: baseID, op: op1 };
    //         help.push(ob);
    //         localStoreService.saveLocal('Helpful', help );
    //     }
    // }

    // const [dataStar, setDataStar] = useState({d: []});
    const [isLoadingStar, setIsLoadingStar] = useState(false);
    const [errStar, setErrStar] = useState('');

    const helpful = async (op1, op2) => {
        setIsLoadingStar(true);

        if ( op2 === 0 ) {
            let ob = { id: id, baseID: baseID, op: op1 };
            help.push(ob);
            // //setHelpStart(op1)
            localStoreService.saveLocal('Helpful', help );

            try {
                const responseStar = await fetch(`${process.env.GATSBY_SERVERLESS_URL}/sendStar`, {
                    method: 'POST',
                    headers: {
                        'content-Type': 'application/json',
                    },
                    body: JSON.stringify(ob),
                });

                if (!responseStar.ok) {
                    throw new Error(`Error! status: ${responseStar.status}`);
                }

                const resultStar = await responseStar.json();

                if ( resultStar.result[0] + resultStar.result[1] === '1_' ) {
                    help.push(ob);
                    setHelpStart(op1)
                    localStoreService.saveLocal('Helpful', help );
                }

                // console.log('result is: ', resultStar, resultStar.result[0] + resultStar.result[1]  );



                // setDataStar(resultStar);
            } catch (err) {
                setErrStar(errStar.message);
            } finally {
                setIsLoadingStar(false);
            }

        }

    };

    return (
        <>
            <Layout customClass="section-pad-left" title={ title === 'home' ? generalTitle : title } desc={ title === 'home' ? generalDescription : generalTitle } >
                <Section className="default-page">
                    <div className="container">
                        <div className="WrapNav">
                            <Link className='ArrowLeft' to="../">
                                <span style={{marginLeft: `1rem`}}>Back</span>
                            </Link>
                        </div>
                        {/*{typeof window !== 'undefined' && localStorage.clear()}*/}
                        <div className="WrapBox">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-6">
                                    <div className="WrapTop">
                                        <div>
                                            <div className="ProductTitle">
                                                {title}
                                            </div>
                                            <div className="autor d-flex align-items-center">
                                                <div className="circle">
                                                    <img src={author.avatar.localFile.publicURL} alt=""/>
                                                </div>
                                                <div>
                                                    <div className="name"><strong>{author.nickname}</strong></div>
                                                    {/*<div className="date"></div>*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6">
                                    <div className="WrapText" dangerouslySetInnerHTML={{__html: props.pageContext.content}} />
                                </div>
                            </div>
                        </div>

                        <div className="WrapHelpful WrapBox">
                            <div className="text-center">
                                <div className="ProductTitle">
                                    Was this article helpful?
                                </div>
                                <div className="boxBtn w100 d-inline-flex align-items-center justify-content-center">
                                    <span onClick={()=>helpful('yes', helpStart)} className={`btn style-4 w100 ${helpStart === 'yes' ? 'active' : ''}`}>
                                        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.49999 10.172L15.692 0.979004L17.107 2.393L6.49999 13L0.135986 6.636L1.54999 5.222L6.49999 10.172Z" fill="black"/>
                                        </svg>
                                        <strong>Yes</strong>
                                    </span>
                                    <span onClick={()=>helpful('no', helpStart)} className={`btn style-4 w100 ${helpStart === 'no' ? 'active' : ''}`}>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.99999 5.58623L11.95 0.63623L13.364 2.05023L8.41399 7.00023L13.364 11.9502L11.95 13.3642L6.99999 8.41423L2.04999 13.3642L0.635986 11.9502L5.58599 7.00023L0.635986 2.05023L2.04999 0.63623L6.99999 5.58623Z" fill="black"/>
                                        </svg>
                                        <strong>No</strong>
                                    </span>
                                </div>
                                { helpStart === 0 && <p className="result">{Yes === null ? 0 : Yes } out of {All} found this helpful</p> }
                                { helpStart === 'yes' && <p className="result">{Yes === null ? 0 : Yes+1 } out of {All+1} found this helpful</p> }
                                { helpStart === 'no' && <p className="result">{Yes === null ? 0 : Yes } out of {All+1} found this helpful</p> }
                                {/*{dataStar}*/}
                                {/*{isLoading}*/}
                            </div>
                        </div>

                        <div className="WrapBox">
                            {/*{*/}
                            {/*    rPosts ? (*/}
                            {/*        <SliderPost title="Related articles" item={rPosts} />*/}
                            {/*    ) : ''*/}
                            {/*}*/}

                        </div>

                    </div>
                </Section>
            </Layout>

        </>
    );
};
export default PagePost;

const Section = styled.section`
      .ProductTitle {
        font-weight: 600;
        font-size: 3.2rem;
        line-height: 4rem;
        @media(max-width: ${maxCol.sm}) {
          margin-bottom: 4rem;
        }
      } 
      .WrapBox {
        max-width: 116rem;
        padding-bottom: 10rem;
        border-bottom: 1px solid #C0BFBF;
        @media(max-width: ${maxCol.sm}) {
          padding-bottom: 5rem;
        }
      }
      .WrapHelpful {
        padding-top: 6rem;
        padding-bottom: 6rem;
        .boxBtn {
          margin-top: 4rem;
          margin-bottom: 4rem;
          max-width: calc(18rem * 2 + 1.6rem * 2);
          @media(max-width: ${maxCol.sm}) {
            margin-top: 0rem;
          }
          svg {
            margin-right: 1.3rem;
          }
          .btn {
            margin: 0.8rem;
          }
        } 
      }
      .WrapText {
          padding-left: 3rem;
            @media(max-width: ${maxCol.sm}) {
              margin-top: 6rem;
            }
      }
       .WrapTop {
         background: #FFFFFF;
         box-shadow: 3px 4px 12px rgba(0, 0, 0, 0.05), 0px 1px 8px rgba(0, 0, 0, 0.05), 6px 4px 18px rgba(0, 0, 0, 0.08);
         border-radius: 18px;
         padding-bottom: 100%;
         @media(max-width: ${maxCol.sm}) {
           padding-bottom: 0%;
         }
         position: relative;
         & > div {
           padding: 4rem 3rem;
           position: absolute;
           display: flex;
           flex-direction: column;
           top: 0;
           bottom: 0;
           left: 0;
           right: 0;
           @media(max-width: ${maxCol.sm}) {
             position: relative;
             display: block;
           }
         }
       }
       .WrapNav {
         margin-top: 2.4rem;
         margin-bottom: 2.4rem;
       }
      .autor {
        margin-top: auto;
        .circle {
          display: flex;
          width: 6rem;
          border-radius: 50%;
          img {
            width: 100%;
            height: auto; 
          }
        }
        .name {
          padding-left: 2rem;
        }
        .date {
          padding-left: 2rem;
        }
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
`;