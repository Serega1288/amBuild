import React from 'react';
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import {maxCol} from "../../../function/SizeCol";

const Content = ( { item } ) => {
    // console.log('Content block tabs >>>', item);
    return (
        <Section className={`section tabs`}>
            <div className="container">
                <h2 className="title h1" dangerouslySetInnerHTML={{__html: item.title}} />
                {/*<div style={{ textAlign : item.alignhor}} className="text" dangerouslySetInnerHTML={{__html: item.text}} />*/}


                <Tabs className="tabs-style-1">
                    <TabList className="row">
                        {item.tabs.map( (itemWrap, index) => (
                            <Tab className="col" key={index}>
                                <div className="wrapBtn">
                                    {itemWrap.title}
                                </div>
                            </Tab>
                        ))}
                    </TabList>

                    {item.tabs.map( (itemWrap, index) => (
                        <TabPanel key={index}>
                            {itemWrap.list.map( (itemClild, index) => (
                                 <div key={index} className='row wrapItem'>
                                    <div className="col-12 col-sm-4">
                                        <div className="itemClild-title">
                                            {itemClild.title}
                                        </div>
                                    </div>
                                     <div className="col-12 col-sm-8">
                                         <div className="text" dangerouslySetInnerHTML={{__html: itemClild.editir}}></div>
                                     </div>
                                 </div>
                            ))}
                        </TabPanel>
                    ))}

                </Tabs>
            </div>
        </Section>
    )
}
export default Content;

const Section = styled.section`
     .tabs-style-1 {
        ul {
            background: #fff;
            border-radius: 10.7rem;
            margin: 0;
            padding: 1.8rem;
            margin-bottom: 6rem;
            // display: flex;
            // align-items: center;
            // justify-content: space-around;
        }
        li {
            display: block;
        }
        .wrapBtn {
            font-size: 1.2rem;
            font-weight: 700;
            border-radius: 6.7rem;
            border: 1px solid #c3c3cf;
            text-align: center;
            cursor: pointer;
            padding: 1.4rem;
        }
        [aria-selected="true"] {
            .wrapBtn {
                background: #000000;
                color: #fff;
            }  
        }
        .itemClild-title {
            font-weight: 700;
            font-size: 1.8rem;
            line-height: 2.6rem;
            margin-bottom: 1rem;
        }
        .wrapItem {
            margin-bottom: 3.2rem;
            p:last-child {
                margin-bottom: 0;
            }
        }
     }
    
`;

