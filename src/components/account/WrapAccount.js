import React from "react";
import {Link} from "gatsby";
import Section1 from "../../styles/boxNav";

const WrapAccount = ({content}) => {
    console.log('content', content )
    return (
        <Section1>
            <div className="container">
                <div className="WrapListCategoryPost">
                    <div className="row">
                        <div className="col-12 col-sm-auto">
                            <div className="WrapMenu h100">

                                <div className="list">

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
                            <div className="WrapContent">
                                {content}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Section1>
    )
}
export default WrapAccount;