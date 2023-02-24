import React, {useState} from 'react';
import Layout from "../../components/Layout"
import {AuthLayout} from "../../function/AuthLayout"
import WrapAccount from "../../components/account/WrapAccount"
import {navigate} from "gatsby";
import OrderDetails from "../../components/account/OrderDetails";
import {gql} from "@apollo/client";
import {Query} from "@apollo/client/react/components";
// import restClient from '../../apollo/client'





// const WEATHER_QUERY = gql`
//     query NewQuery($search: String! ) {
//         order(where: {search: $search}) {
//             nodes {
//                 id
//                 title
//                 content
//                 uri
//             }
//         }
//     }
// `;


// const GET_ORDER = gql`
//     query NewQuery($pathURL: String! ) {
//         person @rest(type: "Person", path: $pathURL ) {
//             id
//             date_created
//         }
//     }
// `;

const WrapSectionOrder = () => {

    // const { loading, error, data } = useQuery(WEATHER_QUERY, {
    //     variables: { search : '' },
    // });

    // console.log('data >>', data)

    const [sBlock, setSBlock ] = useState(null);
    const tableList = (style, scroll) => {
        setSBlock(style)
        console.log('settingBlock', style, scroll)
        navigate(`#tableList-${scroll}`)
    }

    const p = `customers/1?consumer_key=ck_e73fa37550d023558c5a1676bd0e1bab9320dc46&consumer_secret=cs_cacc5a8c3bb55d734d2eb0c3f614a6f354d0ab1a`;

    return (
        <AuthLayout logIn={false} page='account' go='sign-in'>
            <Layout title="Account order" desc="desc">
                <WrapAccount>

                    {/*<Query ssr={false} query={GET_ORDER} client={restClient} variables={ {pathURL: p }  } >*/}
                    {/*    {({ loading, error, data }) => { console.log('>>>', data); return null }}*/}
                    {/*</Query>*/}

                    <div className="Wrap" id="tableList-0">

                        {
                            sBlock === null ? (
                                <>
                                    <div className="title">
                                        Order List
                                    </div>
                                    <div className="orderList">

                                        <div className="table">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="tableTitle">
                                                        Name
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="tableTitle">
                                                        Date
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="tableTitle">
                                                        ID
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="tableTitle">
                                                        Order Status
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/*<div className="tableList no">*/}
                                        {/*    <div>No Data</div>*/}
                                        {/*</div>*/}

                                        <div className="tableList yes">

                                            <div id="tableList-1" onClick={()=>tableList(1, 0)} className="tableListItem">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="tableTitle">
                                                            Name
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="tableTitle">
                                                            Date
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="tableTitle">
                                                            ID
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="tableTitle">
                                                            Order Status
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="tableList-2" onClick={()=>tableList(2,0)} className="tableListItem">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="tableTitle">
                                                            Name
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="tableTitle">
                                                            Date
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="tableTitle">
                                                            ID
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="tableTitle">
                                                            Order Status
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="tableList-3" onClick={()=>tableList(3,0)} className="tableListItem">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="tableTitle">
                                                            Name
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="tableTitle">
                                                            Date
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="tableTitle">
                                                            ID
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="tableTitle">
                                                            Order Status
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </>
                            ) : (
                                <>
                                    <span className='btn style-7' onClick={()=>tableList(null, sBlock )}>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M3.21932 6.66664L6.79532 10.2426L5.85265 11.1853L0.667318 5.99997L5.85265 0.814636L6.79532 1.7573L3.21932 5.3333L11.334 5.3333L11.334 6.66664L3.21932 6.66664Z" fill="#CBCBCB"/>
                                        </svg>
                                        Back
                                    </span>
                                    <div className="Wrap WrapOrderDelails orderList" >
                                        <OrderDetails s={sBlock} />
                                    </div>
                                </>
                            )
                        }



                    </div>
                </WrapAccount>
            </Layout>
        </AuthLayout>
    );
};
export default WrapSectionOrder;