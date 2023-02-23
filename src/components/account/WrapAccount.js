import React from "react";
import {Link} from "gatsby";
import Section1 from "../../styles/boxNav";
import WrapContentAccount from "../../styles/WrapContentAccount";

const WrapAccount = ({children}) => {
    return (
       <Section1 style={{paddingTop: `5rem`}}>
                <div id="s-block-0" className="container">
                    <div className="WrapListCategoryPost">
                        <div className="row">
                            <div className="col-12 col-sm-auto">
                                <div style={{width: `18rem`}} className="WrapMenu h100">

                                    <div className="list style-2">

                                        <Link to='/account/'>
                                            <strong>Dashboard</strong>
                                        </Link>
                                        <Link to='/account/assets/'>
                                            Assets
                                        </Link>
                                        <Link to='/account/hashrate/'>
                                            Hashrate
                                        </Link>
                                        <Link to='/account/orders/'>
                                            <strong>Orders</strong>
                                        </Link>
                                        <Link to='/account/coupon/'>
                                            <strong>Coupon</strong>
                                        </Link>
                                        <Link to='/account/settings/'>
                                            <strong>Settings</strong>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm">
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
