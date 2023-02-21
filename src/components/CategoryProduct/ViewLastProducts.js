import React from 'react';
import BlockProducts from "../constructor/products/BlockProducts";
// import {localStoreService} from "../../function/hook";
import styled from "styled-components";


// products
const ViewLastProducts = ({item}) => {

    return (
        <ViewLastProd>
            <BlockProducts item={{title: 'Recently viewed', products: item}} />
        </ViewLastProd>
    )
};
export default ViewLastProducts;

const ViewLastProd = styled.div`
      section {
        margin-top: 0;
      }
`;