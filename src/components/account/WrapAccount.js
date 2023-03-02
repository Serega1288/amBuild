import React, {useEffect} from "react";
import {Link} from "gatsby";
import Section1 from "../../styles/boxNav";
import WrapContentAccount from "../../styles/WrapContentAccount";
import AccountData from "../../function/accountData";

const WrapAccount = ({children, status}) => {

    return (
       <Section1 style={{paddingTop: `5rem`}}>
                <div id="s-block-0" className="container">
                    <div className="WrapListCategoryPost">
                        <div className="row">
                            <div className="col-12 col-sm-2">
                                <div style={{width: `100%`}} className="WrapMenu h100">

                                    <div className="list style-2">

                                        {
                                            status === 0 ? (
                                                <>
                                                    <span className='a'>
                                                        <strong>Dashboard</strong>
                                                    </span>
                                                    <span className='a'>
                                                        Assets
                                                    </span>
                                                    <span className='a'>
                                                        Hashrate
                                                    </span>
                                                    <span className='a'>
                                                        <strong>Orders</strong>
                                                    </span>
                                                    <span className='a'>
                                                        <strong>Coupon</strong>
                                                    </span>
                                                    <Link className='a' to='/account/settings/'>
                                                        <strong>Settings</strong>
                                                    </Link>
                                                </>
                                            ) : (
                                                <>
                                                    <Link className='a' to='/account/'>
                                                        <strong>Dashboard</strong>
                                                    </Link>
                                                    <Link className='a' to='/account/assets/'>
                                                        Assets
                                                    </Link>
                                                    <Link className='a' to='/account/hashrate/'>
                                                        Hashrate
                                                    </Link>
                                                    <Link className='a' to='/account/orders/'>
                                                        <strong>Orders</strong>
                                                    </Link>
                                                    <Link className='a' to='/account/coupon/'>
                                                        <strong>Coupon</strong>
                                                    </Link>
                                                    <Link className='a' to='/account/settings/'>
                                                        <strong>Settings</strong>
                                                    </Link>
                                                </>
                                            )
                                        }



                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-10">
                                <WrapContentAccount>
                                    {children}
                                </WrapContentAccount>
                            </div>
                        </div>
                    </div>

                </div>
            </Section1>
    )
}
export default WrapAccount;
