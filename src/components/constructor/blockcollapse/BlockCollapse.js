import React from 'react';
import ItemCollapse from './ItemCollapse';
import styled from "styled-components";
import {maxCol} from "../../../function/SizeCol";

const Collapse = ({item} ) => {

// grey
    //console.log('BlockCollapse', item.collapse)
    return (
        <Section className="collaps">
            <div className="container">
                <h2 className="title"> { item.title } </h2>
                <div className="WrapCollapsList">
                    { item.collapse.map( (item, index) => {
                        return (
                            <ItemCollapse key={index} item={item} />
                        )
                    })}
                </div>
            </div>
        </Section>
    )
};
export default Collapse;

const Section = styled.section`
    @media (max-width: ${maxCol.sm} ) {
        
    }
    .box-collaps-list {
        border-bottom: 1px solid #C0BFBF;
        
    }
    .collaps-title {
        font-weight: 700;
        font-size: 1.6rem;
        padding: 1.6rem 3rem 1.6rem 0;
        cursor: pointer;
        &:before, &:after {
            content: '';
            display:  block;
            width: 1.4rem;
            height: 0.2rem;
            position: absolute;
            top: 0;
            bottom:0;
            right: 0.5rem;
            margin: auto;
            background: #000;
        }
        &:after {
            transform: rotate(90deg);
            transition: all 0.3s ease;
        }
        &[aria-expanded="true"] {
            &:after {
                transform: rotate(0deg);
            }
        }
    }
    .collaps-title + * {
        padding-top: 0.6rem;
        padding-bottom: 2.2rem;
        p {
            font-size: 2rem;    
            @media(max-width: ${maxCol.sm}) {
                font-size: 1.8rem; 
            }
        }
    }
    
    
`;
