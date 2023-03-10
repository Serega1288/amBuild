import React from 'react';
import {minCol} from "../../../function/SizeCol";
import styled from 'styled-components';
import VideoOpen from './VideoOpen';

const Video = ( {item} ) => {
    //console.log('Video >>>', item);



    const ImageBG = styled.div`  
        background-size: cover;
        background-image: url(${ item.videofonMobile.localFile.publicURL });
        @media(min-width: ${minCol.md}) { 
              background-image: url(${ item.videofon.localFile.publicURL });
        }
    `;

    const Section = styled.section`
    
        .exit {
           transition: all 0.5s 0s ease; 
           opacity: 0; 
        }
        // .box-iframe {
        //     transition: all 0.5s ease; 
        //     opacity: 0;
        //     visibility: hidden;
        //     position: absolute;
        //     top: 6rem; 
        //     bottom: 2rem;
        //     left: 2rem;
        //     right: 2rem;
        //     @media(min-width: ${minCol.sm}) {
        //         top:10rem;
        //         bottom: 10rem; 
        //         left: 10rem;
        //         right: 10rem;
        //     }
        //     iframe {
        //        display:block;
        //        border: none;
        //        width: 100%;
        //        height: 100%;
        //     }
        //     &.visible {
        //         opacity: 1 !important;
        //         visibility: visible;
        //     }
        // }
        
        .lozad { 
            transition: all 3s 1s ease; 
            &.active {
                opacity: 1;
            }
        }
        
        .block-video {
            //cursor: pointer; 
            position: relative;
            min-height: calc( 100vh - 8.8rem );
            @media(min-width: ${minCol.sm}) {
                min-height: calc( 100vh - 13.4rem );
            }
            
            &.block-iframe {
                position: absolute;
                top:0;
                 bottom: 0;
                 left:0;
                 right: 0;
                 z-index: 1;    
                 .fon {
                          position: absolute;
                          top: 0rem;
                          bottom: 0rem;
                          left: 0;
                          right: 0;
                          z-index: 2;
                       
                      }
                 & > div {
                      
                      position: absolute;
                      top: 0rem;
                      bottom: 0rem;
                      left: 0;
                      right: 0;
                      overflow: hidden;
                      iframe {
                        width: 100%;
                        //height: calc(100% + 6rem + 100px);
                        height: calc(100%);
                        position: absolute;
                        //top: -60px;
                        top: 0rem;
                        bottom: 0rem;
                        left: 0;
                        right: 0;
                      }
                 }
            }
            // .play:before {
            //     opacity: 1;
            //     transition: all 0.5s ease;  
            // }
            // .play-exit {
            //    opacity: 0; 
            //    transition: all 0.5s 1.5s ease; 
            // }
            // .play {
            //     transition: all 0.5s 1s ease; 
            // }
            // &.open {
            //     .exit {
            //        transition: all 0.5s 2s ease; 
            //        opacity: 1; 
            //     }
            //     .play-exit {
            //        opacity: 1;
            //        transition: all 0.5s 0.5s ease;
            //     }
            //     .play {
            //         width: 100%;
            //         height: 100%;
            //         position: absolute;
            //         border-radius: 0;
            //         top:0;
            //     }
            //     .play:before { 
            //         opacity: 0;
            //     }
            // }
        }
 
        // .play {
        //     width: 9.6rem;
        //     height: 9.6rem;
        //     position: absolute;
        //     top:calc(50% - ( 9.6rem / 2 ) );
        //     left: 0;
        //     right: 0;
        //     margin: auto;
        //     @media(min-width: ${minCol.sm}) {
        //         top:calc(50% - ( 24rem / 2 ) );
        //         width: 24rem;
        //         height: 24rem;
        //     }
        //     background-color: rgba(0, 0, 0, 0.6);
        //     border-radius: 50%;
        //     z-index: 10;
        //     &:before {
        //         position: absolute;
        //         top:0;
        //         bottom: 0; 
        //         left: 0;
        //         right: 0;
        //         margin: auto;
        //         content:'';
        //         width: 0;
        //         height: 0; 
        //         border-top: 1.8rem solid transparent;
        //         border-left: 3.3rem solid rgba(255, 255, 255, 0.6);;
        //         border-bottom: 1.8rem solid transparent; 
        //         left: 1rem;
        //         @media(min-width: ${minCol.sm}) {
        //             left: 3rem;
        //             border-top: 4.4rem solid transparent;
        //             border-left: 8.1rem solid rgba(255, 255, 255, 0.6);;
        //             border-bottom: 4.4rem solid transparent;
        //         }
        //     }
        // }
        
        
    `;

    return (
        <Section className="Video section">
            <div className="container box-title">
                <h2 className="block-title">
                    {item.blockTitle}
                </h2>
            </div>
            <div className="section-box">
                <div className="pos">
                    <ImageBG  className='block-video' />
                    <VideoOpen video={item.video} />
                </div>
            </div>

        </Section>

    )
};

export default Video;



