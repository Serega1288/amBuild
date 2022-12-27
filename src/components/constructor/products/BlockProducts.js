import React from 'react';
import styled from 'styled-components';
import {maxCol, minCol} from "../../../function/SizeCol";
import {Link} from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Section from '../../../styles/Slider.js'
import ListProductItem from "./ListProductItem";

const S = styled.div`
        .title {
            font-size: 3.2rem;
            font-weight: 600;
        }
        .block-title {
            font-weight: 500;
            font-size: 2.8rem;
        }
        .WrapBtn {
            margin-top: 2rem;
        }
        .swiper-slide {
            width: 40rem;
            @media(max-width: ${maxCol.sm}) {
              width: 36rem;
            }
        }
        @media(max-width: ${maxCol.sm}) {
            .block-title {
                order: 1;
            }
            .WrapBtn {
                order: 2;
                margin-top: 0;
                margin-bottom: 1rem;
            }
            .WrapProducts {
                order: 3;
            }
        }
        
        
`;

const BlockProducts = ( {item} ) => {
    //console.log('BlockProducts >>>', item )

    return (
        <Section className="section BlockProducts">
            <S className="container d-flex flex-column">
                <h2 className="block-title text" dangerouslySetInnerHTML={{__html: item.title}} />
                <div className="WrapProducts">

                    <Swiper
                        breakpoints={{
                            576: {
                                slidesPerView: 'auto',
                                spaceBetween: 10
                            },
                            768: {
                                slidesPerView: 'auto',
                                spaceBetween: 20
                            },
                            992: {
                                slidesPerView: 'auto',
                                spaceBetween: 20
                            },
                        }}
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

                        {item.products?.map( (item, index) => (
                            <SwiperSlide key={index}>
                                <ListProductItem item={item} />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
                {
                    item.buttonUrl ? (
                        <div className="WrapBtn">
                            <Link className="btn style-2" to={item.buttonUrl}>
                                {item.button}
                            </Link>
                        </div>
                    ) : ''
                }

            </S>
        </Section>
    )
};
export default BlockProducts;



