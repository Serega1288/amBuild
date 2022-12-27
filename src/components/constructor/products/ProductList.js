import React from "react"
import ListProductItem from '../../constructor/products/ListProductItem'
import styled from "styled-components";


const ListProduct = ( {item} ) => {
    //console.log('ListProduct >>', item)
    return (
    <WrapProducts className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-2 row-cols-xl-3">
        {item.map( (item, index) => (
            <div className="product-item" key={index}>
                <ListProductItem key={index} item={item} />
            </div>
        ))}
    </WrapProducts>
)};
export default ListProduct;
const WrapProducts = styled.div`
    padding-top: 8rem;
    padding-bottom: 8rem;
    .product-item {
        margin-bottom: 2rem;
    }
`;