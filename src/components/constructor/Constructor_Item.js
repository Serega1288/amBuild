import React from 'react';

import Banner from "./banner/Banner";
import Content from "./content/Content";
import BlockTabs from "./tabs/BlockTabs";
import SliderContent from "./slider/SliderContent";
import SliderContentImage from "./slider/SliderContentImage";
import SliderImage from "./slider/SliderImage";
import HelpCenter from "./content/HelpCenter";
import BlockProducts from "./products/BlockProducts";
import BannerLite from "./banner/BannerLite";
import BlockCollapse from "./blockcollapse/BlockCollapse";


const Const = ( { item, href, type } ) => {
    const typeName = `${type === 'GlobalProductConst' ? 'ThemeGeneralSettings_Acfoptionthemes' : ''}${type === 'ProductD' ? 'ProductD_Acfconstructor' : ''}${type === 'page' ? 'Page_Acfconstructor' : ''}`;
    console.log('typeName >>', typeName );
    // ${type ? 'ProductD_Acfconstructor' : 'Page_Acfconstructor'} ThemeGeneralSettings_Acfoptionthemes_Const_Content

    return (
        <>

            { item.fieldGroupName ?
                (
                <>
                    { item.fieldGroupName === `${typeName}_Const_Banner` ? ( <Banner item={item} /> ) : null }
                    { item.fieldGroupName === `${typeName}_Const_BannerLite` ? ( <BannerLite item={item} /> ) : null }
                    { item.fieldGroupName === `${typeName}_Const_Content` ? ( <Content item={item} /> ) : null }
                    { item.fieldGroupName === `${typeName}_Const_BlockTabs` ? ( <BlockTabs item={item} /> ) : null }
                    { item.fieldGroupName === `${typeName}_Const_SliderContent` ? ( <SliderContent item={item} /> ) : null }
                    { item.fieldGroupName === `${typeName}_Const_SliderContentImage` ? ( <SliderContentImage item={item} /> ) : null }
                    { item.fieldGroupName === `${typeName}_Const_SliderImage` ? ( <SliderImage item={item} /> ) : null }
                    { item.fieldGroupName === `${typeName}_Const_HelpCenter` ? ( <HelpCenter item={item} /> ) : null }
                    { item.fieldGroupName === `${typeName}_Const_Blockproducts` ? ( <BlockProducts item={item} /> ) : null }
                    { item.fieldGroupName === `${typeName}_Const_Blockcollapse` ? ( <BlockCollapse item={item} /> ) : null }


                    {/*{ item.fieldGroupName === `${type ? 'Post_Acfconstructor' : 'Page_Acfconstructor'}_Const_BlockTabs` ? ( <BlockTabs item={item} /> ) : null }*/}

                    {/*{ item.fieldGroupName === `${type ? 'Post_Acfconstructor' : 'Page_Acfconstructor'}_Const_SliderContent` ? ( <SliderContent item={item} /> ) : null }*/}
                    {/*{ item.fieldGroupName === `${type ? 'Post_Acfconstructor' : 'Page_Acfconstructor'}_Const_SliderImage` ? ( <SliderImage item={item} /> ) : null }*/}

            {/*        { item.fieldGroupName === `${type ? 'Post_Acfconstructor' : 'Page_Acfconstructor'}_Const_Banner` ? ( <Banner item={item} /> ) : null }*/}
            {/*        { item.fieldGroupName === `${type ? 'Post_Acfconstructor' : 'Page_Acfconstructor'}_Const_Collections` ? ( <Collections item={item} /> ) : null }*/}
            {/*        { item.fieldGroupName === `${type ? 'Post_Acfconstructor' : 'Page_Acfconstructor'}_Const_Videovoutube` ? ( <Video item={item} /> ) : null }*/}
            {/*        { item.fieldGroupName === `${type ? 'Post_Acfconstructor' : 'Page_Acfconstructor'}_Const_Instagram` ? ( <Instagram item={item} /> ) : null }*/}
            {/*        { item.fieldGroupName === `${type ? 'Post_Acfconstructor' : 'Page_Acfconstructor'}_Const_Slider` ? ( <Slider item={item} /> ) : null }*/}
            {/*        { item.fieldGroupName === `${type ? 'Post_Acfconstructor' : 'Page_Acfconstructor'}_Const_Title` ? ( <Title item={item} /> ) : null }*/}
            {/*        { item.fieldGroupName === `${type ? 'Post_Acfconstructor' : 'Page_Acfconstructor'}_Const_ContentTextImgImg` ? ( <Content1 item={item} /> ) : null }*/}
            {/*        { item.fieldGroupName === `${type ? 'Post_Acfconstructor' : 'Page_Acfconstructor'}_Const_ContentImgTitleText` ? ( <Content2 item={item} /> ) : null }*/}
            {/*        { item.fieldGroupName === `${type ? 'Post_Acfconstructor' : 'Page_Acfconstructor'}_Const_Collaps` ? ( <Collaps item={item} /> ) : null }*/}
            {/*        { item.fieldGroupName === `${type ? 'Post_Acfconstructor' : 'Page_Acfconstructor'}_Const_Content` ? ( <Content3 item={item} /> ) : null }*/}

            {/*        { item.fieldGroupName === `${type ? 'Post_Acfconstructor' : 'Page_Acfconstructor'}_Const_Contactdata` ? ( <Contactdata item={item} /> ) : null }*/}
            {/*        { item.fieldGroupName == `${type ? 'Post_Acfconstructor' : 'Page_Acfconstructor'}_Const_Contactform` ? ( <Contactform href={href} item={item} /> ) : null }*/}

                </>
            ) : null }
        </>
    )
};
export default Const;