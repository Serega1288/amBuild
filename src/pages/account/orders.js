import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout"
import {AuthLayout} from "../../function/AuthLayout"
import WrapAccount from "../../components/account/WrapAccount"
import {navigate} from "gatsby";
import OrderDetails from "../../components/account/OrderDetails";
import {gql} from "@apollo/client";
import {Query} from "@apollo/client/react/components";
import {localStoreService} from "../../function/hook";
import { format } from 'date-fns'
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


    // const [data, setData] = useState(null)
    // const [isLoading, setLoading] = useState(false)

    // useEffect(()=> {
    //
    //     let ob = { id: '111' };
    //
    //     try {
    //         const response = fetch(`${process.env.GATSBY_SERVERLESS_URL}/sendStar`, {
    //             method: 'POST',
    //             headers: {
    //                 'content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(ob),
    //         });
    //         const result = response.json();
    //
    //         console.log('result >>>', result)
    //
    //     } catch (err) {
    //         console.log('result err >>>', err)
    //     } finally {
    //         console.log('result finally >>>')
    //     }
    // })

    // const OnloadData = async (op1, op2) => {
    //
    //     let ob = { op1, op2 };
    //
    //     try {
    //         const response = fetch(`${process.env.GATSBY_SERVERLESS_URL}/sendStar`, {
    //             method: 'POST',
    //             headers: {
    //                 'content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(ob),
    //         });
    //         const result = response.json();
    //
    //         console.log('result >>>', result)
    //
    //         setData(1)
    //
    //     } catch (err) {
    //         console.log('result err >>>', err)
    //         setData(2)
    //     } finally {
    //         console.log('result finally >>>')
    //     }
    //
    //     // console.log('OnloadData >>>', op1, op2 )
    // }




    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    //         const data = await response.json();
    //         setData(data);
    //     };
    //     fetchData();
    //
    // }, []);

    const [data, setData] = useState([]);
    useEffect(() => {
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
        setData(data);
        // console.log('data >>>', data )
    };
    return (
        <AuthLayout logIn={false} page='account' go='sign-in'>
            <Layout title="Account order" desc="desc">
                <WrapAccount>


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

                                        {
                                            data.result ? (

                                                <div className="tableList yes">
                                                    {
                                                        data.result.map((item, index) => (
                                                            <div
                                                                id={`tableList-${index}`}
                                                                onClick={()=>tableList(index, 0)}
                                                                className="tableListItem"
                                                            >
                                                                {/*{console.log('tableList item >>', item.line_items[0].name)}*/}
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <div className="tableTitle">
                                                                            {item.line_items[0].name}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <div className="tableTitle">
                                                                            {format( new Date(item.date_created), 'yyyy-mm-dd H:mma')}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <div className="tableTitle">
                                                                            {item.number}
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
                                        <OrderDetails s={data.result[sBlock]} />
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