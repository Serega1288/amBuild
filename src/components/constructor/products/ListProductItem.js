import React from "react"
import {Link} from "gatsby"
import ProductItem from "../../../styles/ProductItem"
import InfoIcon from "../../../styles/InfoIcon";
import IconInfo from "../../../function/IconInfo";

const ListProductItem = ( {item} ) => {

    // console.log('item > days', item );
    // console.log('item > hashrateFee', item.ACForderDateProduct.hashrateFee );
    // console.log('item > days', item.ACForderDateProduct.days );

    const days = item.ACForderDateProduct?.days;
    const hashrateFee = item.ACForderDateProduct?.hashrateFee;
    const priceResult = hashrateFee * days * 10;



    return (
        <ProductItem>
            {/*{console.log('item > days', item.ACForderDateProduct?.attention )}*/}
            <div className="a" style={{backgroundImage: `url(${item.featuredImage.node.localFile.publicURL})`}}>
                <Link
                    // style={{backgroundImage: `url(${item.icon.localFile.publicURL})` }}
                    to={item.uri}
                    className="LinkBox"
                >
                </Link>

                    <div className="category">
                        {/*{item.productCategories.nodes.map((item, index) => (*/}
                        {/*    <span key={index}>{item.name}</span>*/}
                        {/*))}*/}
                        {/*{*/}
                        {/*    console.log('item.productCategories[0].name', item.productCategories.nodes[1])*/}
                        {/*}*/}
                        <span>
                            {item.productCategories.nodes[1].name}
                        </span>
                    </div>
                    <div className="title">
                        {item.title}
                    </div>
                    <div className="row z-in-2">
                        <div className="col-6">
                            <div className="sor">
                                {item.staticOutputRatio.staticOutputRatioValue} %
                            </div>
                            <InfoIcon className="pos d-flex align-items-center">
                                <span className="WrapIconInfo d-flex align-items-center">
                                    <IconInfo position="left" style="2" text={item.staticOutputRatio.staticOutputRatioInfo} />
                                    <span>Static Output Ratio</span>
                                </span>
                            </InfoIcon>
                        </div>
                        <div className="col-6">
                            <Link to={item.uri} className="BtnWrap d-block">
                                <span className='anim price'>$ {(priceResult).toFixed(2)}</span>
                                <span className='anim textBtn'>Details</span>
                            </Link>
                        </div>
                    </div>

            </div>
        </ProductItem>
    )
};
export default ListProductItem;