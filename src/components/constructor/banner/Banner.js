import React from 'react';
import styled from 'styled-components';
import {maxCol} from "../../../function/SizeCol";
//import {Link} from "gatsby";

const Banner = ( {item} ) => {


    const imgUrl = item.banner?.localFile?.publicURL;
    //const imgUrlMobile = item.bannerMobile.localFile.publicURL;

    //console.log('item >>>', item);

    const Section = styled.section`
        height: calc(100vh - 8rem); 
        background-image: url(${ imgUrl });
        background-size: cover;
        background-position: top center;
        .BannerTitle {
            color: #fff;
            font-size: 6.4rem;
            line-height: 7.2rem;
            @media(max-width: ${maxCol.sm}) {
                font-size: 3.8rem;
                line-height: 1.5;
                br {
                    display:none;
                }
            }
        }
        .text {
            font-size: 3.2rem;
            line-height: 4rem;
            color: #fff;
            @media(max-width: ${maxCol.sm}) {
                font-size: 2.6rem; 
                line-height: 1.5;
                br {
                    display:none;
                }
            }
        }
        h1 {
            margin-top: 0;
            margin-bottom: 4rem;
        }
    `;
    // const [active, setActive] = useState(false);
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setActive(!active)
    //     }, 500);
    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <>
            <Section className={`banner d-flex align-items-center`}>
                <div className={`container`}>
                    <h1
                        style={{textAlign: item.alignhor}}
                        className="BannerTitle"
                        dangerouslySetInnerHTML={{__html: item.title}} />
                    <div
                        style={{textAlign: item.alignhor}}
                        className="text"
                        dangerouslySetInnerHTML={{__html: item.text}}
                    />
                </div>
            </Section>
        </>
    )
};

export default Banner;



