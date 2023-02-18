import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Navigation } from "swiper";
import Section from '../../styles/Slider.js'
import {Link} from "gatsby";

const SliderPost = ( { item, title, s } ) => {
    // console.log('Slider >>>', item);

    return (
        <Section className={`slider post ${s}`}>
            <div className="box-title">
                <div className="row">
                    <div className="col">
                        <h2 className="block-title text h1" > {title} </h2>
                    </div>
                    <div className="col-auto">
                        <div className="swipe-cline" />
                    </div>
                </div>

                <Swiper
                    // breakpoints={{
                    //     576: {
                    //         slidesPerView: 'auto',
                    //         spaceBetween: 10
                    //     },
                    //     768: {
                    //         slidesPerView: "auto",
                    //         spaceBetween: 0
                    //     },
                    // }}
                    slidesPerView={"auto"}
                    spaceBetween={10}
                    className="section-box mySwiper"
                    scrollbar={{
                        draggable: false,
                        hide: true
                    }}
                    modules={[Navigation]}
                    loop={false}
                    speed={600}
                    navigation={
                        {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }
                    }
                >

                    <div className="swiper-button-prev d-inline-flex align-items-center justify-content-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.828 9.00008L9.192 14.3641L7.778 15.7781L6.79974e-07 8.00007L7.778 0.222076L9.192 1.63608L3.828 7.00008L16 7.00008L16 9.00008L3.828 9.00008Z" fill="#CBCBCB"/>
                        </svg>
                    </div>
                    <div className="swiper-button-next d-inline-flex align-items-center justify-content-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.172 6.99992L6.808 1.63592L8.222 0.221924L16 7.99992L8.222 15.7779L6.808 14.3639L12.172 8.99992H0V6.99992H12.172Z" fill="black"/>
                        </svg>
                    </div>


                    {item?.nodes?.map( (item, index) => (
                        <SwiperSlide key={index}>
                            <Link to={item.uri} className="item d-flex flex-column">
                                {/*{ item.icon ? (*/}
                                {/*    <div style={{backgroundImage: `url(${item.icon.localFile.publicURL})` }}*/}
                                {/*         className="icon-img" />*/}
                                {/*) : null}*/}
                                { item.title ? (
                                    <div className="h2 title">
                                        {item.title}
                                    </div>
                                ) : null }
                                {/*{ item.subTitle ? (*/}
                                {/*    <div className="subTitle h4">*/}
                                {/*        {item.subTitle}*/}
                                {/*    </div>*/}
                                {/*) : null }*/}

                                {/*{ item.text ? (*/}
                                {/*    <div className="text" dangerouslySetInnerHTML={{__html: item.text}} />*/}
                                {/*) : null }*/}
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Section>
    );
};
export default SliderPost;

