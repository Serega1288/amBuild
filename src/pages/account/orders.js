import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout"
import {AuthLayout} from "../../function/AuthLayout"
import WrapAccount from "../../components/account/WrapAccount"
import {navigate} from "gatsby";
import OrderDetails from "../../components/account/OrderDetails";
// import {gql} from "@apollo/client";
// import {Query} from "@apollo/client/react/components";
import {localStoreService} from "../../function/hook";
import { format } from 'date-fns'
// import AccountData from "../../function/accountData";
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

    // const { dataAccountStatus, dataAccount, fetchDataAccount } = AccountData();
    //
    //
    const [sBlock, setSBlock ] = useState(null);
    const tableList = (style, scroll) => {
        setSBlock(style)
        console.log('settingBlock', style, scroll)
        navigate(`#tableList-${scroll}`)
    }

    const [data, setData] = useState([]);
    const [isLoadingData, setIsLoadingData] = useState(true);

    useEffect(() => {
        // fetchDataAccount()
        fetchData();

    }, []);

    const fetchData = async () => {
        let ob = { get: `orders?customer=${localStoreService.getLocal(process.env.LOCAL_TOKEN).name.split('ud=')[1]}`, type : `order` };
        const response = await fetch(`${process.env.GATSBY_SERVERLESS_URL}/sendGetData`, {
           method: 'POST',
           headers: {
               'content-Type': 'application/json',
           },
           body: JSON.stringify(ob),
        });
        const data = await response.json();
        if (data) {
            setData(data.result);
            setIsLoadingData(false)
            console.log('data >>>', localStoreService.getLocal(process.env.LOCAL_TOKEN).name.split('ud=')[1], data )
        }

    };



    return (
        <AuthLayout logIn={false}  page='account/orders' go='sign-in'>
            <Layout title="Account order" desc="desc">
                <WrapAccount  >


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
                                                    <div  style={{paddingLeft: `2.5rem`}} className="tableTitle">
                                                        Date
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div style={{paddingLeft: `2.5rem`}} className="tableTitle">
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

                                        {
                                            isLoadingData === false ? (

                                                <div className="tableList yes">
                                                    {
                                                        data?.map((item, index) => (
                                                            <div
                                                                key={`tableList-${index}`}
                                                                id={`tableList-${index}`}
                                                                onClick={()=>tableList(index, 0)}
                                                                className="tableListItem"
                                                            >
                                                                {/*{console.log('tableList item >>', item)}*/}
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <div className="tableTitle">
                                                                            { item.meta_data.map((item, index) => { if (item.key === 'hashrate_name') {
                                                                                return ( <span key={`hashrate_name-${index}`}>{item.value}</span> )
                                                                            }})}
                                                                            {/*{item.name}*/}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <div className="tableTitle">
                                                                            {format( new Date(item.date_created), 'yyyy-MM-dd H:mma')}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <div className="tableTitle">
                                                                            { item.meta_data.map((item, index) => { if (item.key === 'id') {
                                                                                return ( <span key={`id-${index}`}>{item.value}</span> )
                                                                            }})}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-auto">
                                                                        <div className="tableTitle">
                                                                            {item.status}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        ))
                                                    }
                                                </div>

                                            ) : (
                                                <div className="tableList no">
                                                    <div>No Data</div>
                                                </div>
                                            )
                                        }

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
                                    <div className="Wrap WrapOrderDelails orderList">
                                        <OrderDetails s={data[sBlock]} />
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