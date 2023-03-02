import React from 'react'
// import {format} from "date-fns";
import WrapСoupon from "../../styles/WrapСoupon";


const SectionCouponActive = ({data}) => {
    // console.log('setDataCouponActive >>> 2222222', data)

    return (
        <WrapСoupon className="WrapСoupon">
            {

                    <div className="BlockCoupon">
                        <div className="row">
                            <div className="col-5">
                                <div className="CouponBlock pos h100 d-flex flex-column">
                                    <div className="CouponPrice">
                                        ${data.amount}
                                    </div>
                                    <div style={{marginTop: `auto`}} className="CouponDetails">
                                        {data.description}
                                    </div>
                                    <div className="obTop"></div>
                                    <div className="obDots"></div>
                                    <div className="obBottom"></div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="CouponBlock right pos">
                                    <div className="obCircl"></div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="CouponTitle">
                                                Coupon
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                             <span className="btn style-8">
                                                  Rules
                                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                        <path d="M8.78068 5.33336L5.20468 1.75736L6.14735 0.814697L11.3327 6.00003L6.14735 11.1854L5.20468 10.2427L8.78068 6.6667H0.666016V5.33336H8.78068Z" fill="white"/>
                                                  </svg>
                                             </span>
                                        </div>
                                    </div>
                                    <p className="CouponID">ID: <strong>{data.code}</strong></p>

                                    <p className="CouponData">
                                        {/*{format( new Date( data.date_expires_gmt ), 'yyyy.mm.dd')}*/}
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

            }
        </WrapСoupon>
    )
}
export default SectionCouponActive;