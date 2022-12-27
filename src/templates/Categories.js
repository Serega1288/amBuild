import React from 'react';
import Layout from '../components/Layout';
import {graphql, useStaticQuery} from "gatsby";
import BannerLite from '../components/constructor/banner/BannerLite'
import ProductList from '../components/constructor/products/ProductList'
import FilterBox from '../components/CategoryProduct/FilterBox';
import ViewLastProducts from "../components/CategoryProduct/ViewLastProducts";
import {localStoreService} from "../function/hook";



const Categories = (props) => {

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

    const title = props.pageContext.name;
    const generalTitle = data.wp.allSettings.generalSettingsTitle;

    //console.log('page category >>>', props.pageContext.productsD)
    const products = localStoreService.getLocal('ProductSave');
    return (
        <>
            <Layout customClass="shop-page section-pad" title={ title } desc={ generalTitle } >
                <BannerLite title={ title } item={props.pageContext.bannerLite} />
                <FilterBox />
                <div className="container">
                    <ProductList item={props.pageContext.productsD.nodes} />
                </div>
                {
                    products ? (<ViewLastProducts item={products} />) : ''
                }

            </Layout>

        </>
    );
};
export default Categories;